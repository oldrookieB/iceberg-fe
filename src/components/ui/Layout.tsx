import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <section className="flex flex-col w-full h-screen max-w-screen bg-white overflow-y-auto">
      {props.children}
    </section>
  );
};

export default Layout;
