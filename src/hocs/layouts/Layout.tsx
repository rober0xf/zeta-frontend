import { ReactNode } from "react";
import { connect } from "react-redux";

interface LayoutProps {
  children: ReactNode;
}
function Layout({ children }: LayoutProps) {
  return <div className="min-h-screen flex flex-col">{children}</div>;
}

// interface RootState {
//   auth: {
//     isLoggedIn: boolean;
//     user: {
//       id: string;
//       name: string;
//     } | null;
//   };
//   ui: {
//     theme: string;
//   };
// }
// const mapStateToProps = (state: RootState) => ({});
const mapStateToProps = () => ({});
export default connect(mapStateToProps, {})(Layout);
