import Base from "@/layouts/Base";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <Base backgroundColor="bg-transparent">{children}</Base>;
};

export default AuthLayout;
