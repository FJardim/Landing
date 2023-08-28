import "@/components/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      {(isLoading) =>
        isLoading ? (
          <div className="flex items-center justify-center h-screen w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-40 w-4h-40 animate-spin"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9" />
              <path d="M17 12a5 5 0 1 0 -5 5" />
            </svg>
          </div>
        ) : (
          <Component {...pageProps} />
        )
      }
    </AuthProvider>
  );
}
