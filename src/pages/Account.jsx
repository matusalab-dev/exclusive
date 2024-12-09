import Input_ from "postcss/lib/input";
import Breadcrumb from "../components/Breadcrumb";
import FormGroup from "../components/form/FormGroup";
import Input from "../components/form/Input";
import Button from "../components/Button";

const ACCOUNT_PATHS = [
  { href: "home", label: "Home" },
  { href: "My account", label: "My Account" },
];
const Account = () => {
  return (
    <section className="mt-12">
      <Breadcrumb
        userName={
          <h3 className="text-sm">
            Welcome! <span className="text-colors-secondary-3 ">Md Rimel</span>
          </h3>
        }
        links={ACCOUNT_PATHS}
      />

      <div className="flex justify-between items-start mt-12">
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex flex-col gap-2 ">
            <h3 className="text-lg font-medium capitalize">
              Manage My Account
            </h3>
            <ul ml-8 className="text-colors-text-2 flex flex-col gap-1 ml-8">
              <li className="capitalize text-colors-secondary-3">My profile</li>
              <li className="capitalize">address book</li>
              <li className="capitalize">my payment options</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 ">
            <h3 className="text-lg font-medium capitalize">My Orders</h3>
            <ul className="text-colors-text-2 flex flex-col gap-1 ml-8">
              <li className="capitalize">My returns</li>
              <li className="capitalize">My Cancellations</li>
              <li className="capitalize">my payment options</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium capitalize">My WishList</h3>
          </div>
        </div>
        <div className="basis-[50%] px-16 py-8 border border-colors-text-2">
          <h3 className="capitalize font-medium text-2xl text-colors-secondary-3">
            Edit your Profile
          </h3>
          <form action="" className="w-full flex flex-col">
            <div className="flex gap-6 mt-6">
              <FormGroup
                label="First name"
                id="firstName"
                inputType={<Input placeholder="Md" />}
              />
              <FormGroup
                label="Last name"
                id="lastName"
                inputType={<Input placeholder="Rimel" />}
              />
            </div>
            <div className="flex gap-6 mt-6">
              <FormGroup
                label="Email"
                id="email"
                inputType={
                  <Input type="email" placeholder="rimel11@gmail.com" />
                }
              />
              <FormGroup
                label="Address"
                id="address"
                inputType={<Input placeholder="Kingston, 5236, United State" />}
              />
            </div>
            <div className="flex flex-col mt-10 items-stretch w-full">
              <h3 className="capitalize text-xl">Password Changes</h3>
              <div className="flex gap-10 mt-1 basis-full">
                <FormGroup
                  id="password"
                  inputType={
                    <Input type="password" placeholder="current password" />
                  }
                />
              </div>
              <div className="flex gap-10 mt-2 w-full">
                <FormGroup
                  id="newPassword"
                  inputType={
                    <Input type="password" placeholder="New password" />
                  }
                />
              </div>
              <div className="flex gap-10 mt-2 w-full">
                <FormGroup
                  id="password"
                  inputType={
                    <Input type="password" placeholder="Confirm New password" />
                  }
                />
              </div>
            </div>

            <div className="flex gap-4 mt-4 self-end">
              <Button size="lg" color="white" children="Cancel" />
              <Button size="lg" color="red" children="Save Changes" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Account;
