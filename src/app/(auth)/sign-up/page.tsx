import Account from "@/partials/Account";
import Link from "next/link";

const Signup = () => {
  return (
    <Account
      title="Sign up"
      description="Donec rutrum congue leo eget malesuada. Sed porttitor nibh. Cras ultricies ligula sed magna dictum porta. Vestibulum"
    >
      <p className="mt-6 text-center">
        Already have account?{" "}
        <Link
          className="font-medium underline underline-offset-2 hover:no-underline"
          href="/login"
        >
          Login
        </Link>
      </p>
    </Account>
  );
};

export default Signup;
