import { Link } from "react-router";

const Breadcrumb = ({ userName, links }) => {
  return (
    <div className="flex justify-between items-center">
      <nav aria-label="breadcrumb" class="w-max">
        <ol class="flex w-full flex-wrap items-center rounded-md bg-slate-50 py-2">
          {links.map((link) => {
            return (
              <li class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                <Link to={link.href}>{link.label}</Link>
                <span class="pointer-events-none mx-2 text-slate-800">/</span>
              </li>
            );
          })}
          {/* <li class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
            <Link to="account">My Account</Link>
            <span class="pointer-events-none mx-2 text-slate-800">/</span>
          </li> */}
          {/* <li class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
          <Link to="#">Breadcrumbs</Link>
        </li> */}
        </ol>
      </nav>
      {userName}
    </div>
  );
};

export default Breadcrumb;
