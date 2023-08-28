export type User = {
  id: number;
  userName: string;
  email: string;
  name: string;
  address: string;
  phone: string;
  mobile_phone: string;
  instagram: string | null;
  facebook: string | null;
  whastsApp: string | null;
  tiktok: string | null;
  youtube: string | null;
  linkedIn: string | null;
  geolocation: string | null;
  profileImage: string | null;
  role: "usuario" | "escribano" | "secretario" | "abogado";
  status_approved: boolean;
  statusCodId: number | null;
  createdAt: string;
};

export type AuthInfo = {
  user: User;
  token: string;
};
