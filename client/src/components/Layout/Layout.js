import React from "react";
import Navigation from "../Nav/Navigation";

const Layout = (props) => {
  return (
    <>
      <div>
        <Navigation />
        {props.children}
      </div>
    </>
  );
};

export default Layout;
