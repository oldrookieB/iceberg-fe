import React from 'react';

const Header = () => {
 const LoginHandler = () => {

 }

  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-2xl">IceBerg Project</a>
  </div>
  <div className="flex-none">
  <button className="btn btn-ghost">로그인</button>
  <button className="btn btn-ghost">프로필</button>
  </div>
</div>
  );
};

export default Header;