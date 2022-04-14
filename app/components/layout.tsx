import { NavLink } from "@remix-run/react";

const Layout = ({ children }: any) => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-8 flex-col md:flex-row items-center">
          <NavLink
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="text-xl">Hacker News</span>
          </NavLink>
        </div>
      </header>
      <div className="mx-auto container p-8">{children}</div>
    </>
  );
};

export default Layout;
