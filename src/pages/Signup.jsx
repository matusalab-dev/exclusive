import LoginHero from "../assets/login-hero.png";
import GoogleLogo from "../assets/google-logo.png";
import Button from "../components/Button";
import Input from "../components/form/Input";
import { Link } from "react-router";
const Signup = () => {
  return (
    <section className="flex gap-6 py-20 text-center">
      <img src={LoginHero} alt="" srcset="" className="w-1/2" />
      <div className="flex flex-col gap-10 p-20">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-4xl font-medium font-inter">Create an account</h2>
          <p>Enter your details below</p>
        </div>
        <form className="flex flex-col gap-6">
          <Input
            placeholder="Name"
            className="border-b focus:outline-b-colors-text-3 bg-colors-primary-1 border-b-colors-text-2"
          />
          <Input
            type={`${"email" || "tel"}`}
            placeholder="Email or Phone Number"
            className="border-b focus:outline-b-colors-text-3 bg-colors-primary-1 border-b-colors-text-2"
          />
          <Input
            type="password"
            placeholder="password"
            className="border-b focus:outline-b-colors-text-3 bg-colors-primary-1 border-b-colors-text-2"
          />
          <div className="flex flex-col justify-center gap-3">
            <Button size="lg" color="red" children="Create Account" />
            <Button
              size="lg"
              color=""
              className="flex flex-row-reverse items-center justify-center gap-3 border border-colors-text-3/40"
            >
              Sign up with Google
              <img src={GoogleLogo} alt="" />
            </Button>
          </div>
          <div className="flex items-center justify-center gap-3">
            <p className="text-colors-text-3">Already have account?</p>
            <Link to="/login" className="border-b border-b-colors-text-3">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
