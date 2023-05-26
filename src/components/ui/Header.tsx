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
    <ul className="menu menu-horizontal px-1">
      <li><a>로그인</a></li>
      <li><a>프로필</a></li>
    </ul>
  </div>
</div>
  );
};

export default Header;