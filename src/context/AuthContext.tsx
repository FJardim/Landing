import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../../types";
import { deleteAuth, getAuth, storeAuth } from "../helpers/auth";

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (data: { user: User; token: string }) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  isLoading: true,
  token: null,
  login: () => {},
  logout: () => {},
});

type AuthProviderProps = {
  children: (isLoading: boolean) => React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const authInfo = await getAuth();

      if (authInfo !== null) {
        setUser(authInfo.user);
        setToken(authInfo.token);
      }

      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = useCallback<AuthContextType["login"]>(
    async ({ user, token }) => {
      setUser(user);
      setToken(token);

      await storeAuth({ user, token });
    },
    []
  );

  const logout = useCallback(async () => {
    setUser(null);
    setToken(null);

    await deleteAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        token,
        login,
        logout,
      }}
    >
      {children(isLoading)}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
