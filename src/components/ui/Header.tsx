import React from "react";

const Header = () => {
  const LoginHandler = () => {};

  return (
    <header className="navbar bg-base-100 w-screen px-4">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl">Iceberg</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-ghost">로그아웃</button>
        <button className="btn btn-ghost">프로젝트</button>
        <button className="btn btn-ghost">프로필</button>
      </div>
    </header>
  );
};

export default Header;
