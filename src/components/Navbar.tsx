import { connect } from "react-redux";
import { NavLink, Link } from "react-router";
import gamma from "../assets/gamma.png";

function Navbar() {
  return (
    <nav className="w-full py-5 top-0 nav-shadow">
      <div className="px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap px-10">
          <Link to={"/"} className="mt-2">
            <img src={gamma} width={140} height={100}></img>
            <h3 className="text-lg font-medium leading-6 text-gray-900"></h3>
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink
              to={"/pricing"}
              className="text-lg inline-flex mx-4 font-medium leading-6 text-gray-900 relative hover-underline"
            >
              Pricing
            </NavLink>
            <NavLink
              to={"/research"}
              className="text-lg inline-flex mx-4 font-medium leading-6 text-gray-900 relative hover-underline"
            >
              Research
            </NavLink>
            <NavLink
              to={"/models"}
              className="text-lg inline-flex mx-4 font-medium leading-6 text-gray-900 relative hover-underline"
            >
              Models
            </NavLink>
            <NavLink
              to={"/about"}
              className="text-lg inline-flex mx-4 font-medium leading-6 text-gray-900 relative hover-underline"
            >
              About us
            </NavLink>
            <button
              type="button"
              className="ml-8 relative inline-flex items-center rounded-md border border-transparent bg-orange-600 px-5 py-2.5 text-md font-bold text-white shadow-sm hover:transition hover:duration-300 hover:bg-black"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// interface RootState {
//   auth: {
//     isAuthenticated: boolean;
//     user: {
//       username: string;
//       role: string;
//     } | null;
//   };
// }

// const mapStateToProps = (state: RootState) => ({
// });
const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(Navbar);
