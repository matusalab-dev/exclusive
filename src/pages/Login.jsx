import LoginHero from "../assets/login-hero.png";
import GoogleLogo from "../assets/google-logo.png";
import Button from "../components/Button";
import Input from "../components/form/Input";
import { Link } from "react-router";
const Login = () => {
  return (
    <section className="flex gap-6 py-20 text-center">
      <img src={LoginHero} alt="" srcset="" className="w-1/2" />
      <div className="flex flex-col gap-10 p-20">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-4xl font-medium font-inter">
            Log in to Exclusive
          </h2>
          <p>Enter your details below</p>
        </div>
        <form className="flex flex-col gap-6">
          {/* <Input
            placeholder="Name"
            className="border-b focus:outline-b-colors-text-3 bg-colors-primary-1 border-b-colors-text-2"
          /> */}
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
          <div className="flex justify-between gap-3">
            <Button as="Link" to="/" size="lg" color="red" children="Log In" />
            <Button
              as="Link"
              to="/password"
              size="md"
              color=""
              className="flex flex-row-reverse items-center justify-center gap-3 text-base text-colors-secondary-3"
              children="Forget Password?"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
