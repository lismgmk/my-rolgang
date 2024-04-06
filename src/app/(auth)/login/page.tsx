import Account from "@/partials/Account";
import Link from "next/link";

const Login = () => {
  return (
    <Account
      title="Login"
      description="Donec rutrum congue leo eget malesuada. Sed porttitor nibh. Cras ultricies ligula sed magna dictum porta. Vestibulum"
    >
      <p className="mt-6 text-center">
        Don&apos;t have any account?{" "}
        <Link
          className="font-medium underline underline-offset-2 hover:no-underline"
          href="sign-up"
        >
          Sign Up
        </Link>
      </p>
      <p className="mt-2 text-center">
        Forget your password?{" "}
        <Link
          className="font-medium underline underline-offset-2 hover:no-underline"
          href="/reset-password"
        >
          Reset Password
        </Link>
      </p>
    </Account>
  );
};

export default Login;
