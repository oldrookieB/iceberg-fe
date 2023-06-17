import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  evenly?: boolean;
}

const Layout = (props: LayoutProps) => {
  return (
    <section
      className={
        props.evenly
          ? "flex flex-col items-center w-screen min-h-screen justify-evenly"
          : "flex flex-col items-center w-screen h-screen bg-white"
      }
    >
      {props.children}
    </section>
  );
};

export default Layout;
