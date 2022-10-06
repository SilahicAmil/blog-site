import MainNavigation from "../Navigation/MainNavigation";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className="m-3-auto w-auto max-w-screen-sm">{props.children}</main>
    </>
  );
};

export default Layout;
