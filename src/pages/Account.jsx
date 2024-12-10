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
      <div className="flex items-center justify-between">
        <Breadcrumb links={ACCOUNT_PATHS} />
        <h3 className="text-sm">
          Welcome! <span className="text-colors-secondary-3 ">Md Rimel</span>
        </h3>
      </div>
      <div className="flex items-start justify-between mt-12">
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex flex-col gap-2 ">
            <h3 className="text-lg font-medium capitalize">
              Manage My Account
            </h3>
            <ul ml-8 className="flex flex-col gap-1 ml-8 text-colors-text-2">
              <li className="capitalize text-colors-secondary-3">My profile</li>
              <li className="capitalize">address book</li>
              <li className="capitalize">my payment options</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 ">
            <h3 className="text-lg font-medium capitalize">My Orders</h3>
            <ul className="flex flex-col gap-1 ml-8 text-colors-text-2">
              <li className="capitalize">My returns</li>
              <li className="capitalize">My Cancellations</li>
              <li className="capitalize">my payment options</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium capitalize">My WishList</h3>
          </div>
        </div>
        <div className="basis-[70%] px-16 py-8 shadow-sm shadow-colors-text-2">
          <h3 className="text-2xl font-medium capitalize text-colors-secondary-3">
            Edit your Profile
          </h3>
          <form action="" method="post" className="flex flex-col w-full">
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
            <div className="flex flex-col items-stretch w-full mt-10">
              <h3 className="text-xl capitalize">Password Changes</h3>
              <div className="flex gap-10 mt-1 basis-full">
                <FormGroup
                  id="password"
                  inputType={
                    <Input type="password" placeholder="current password" />
                  }
                />
              </div>
              <div className="flex w-full gap-10 mt-2">
                <FormGroup
                  id="newPassword"
                  inputType={
                    <Input type="password" placeholder="New password" />
                  }
                />
              </div>
              <div className="flex w-full gap-10 mt-2">
                <FormGroup
                  id="password"
                  inputType={
                    <Input type="password" placeholder="Confirm New password" />
                  }
                />
              </div>
            </div>

            <div className="flex self-end gap-4 mt-4">
              <Button size="lg" color="white" children="Cancel" />
              <Button
                size="lg"
                type="submit"
                color="red"
                children="Save Changes"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Account;
