import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar bg-base-100 w-screen px-4">
      <div className="flex-1">
        <Link to="/main" className="btn btn-ghost normal-case text-2xl">
          Iceberg
        </Link>
      </div>
      <div className="flex-none">
        <button className="btn btn-ghost">로그아웃</button>
        <Link to="/main" className="btn btn-ghost">
          프로젝트
        </Link>
        <Link to="/profile" className="btn btn-ghost">
          프로필
        </Link>
      </div>
    </header>
  );
};

export default Header;
