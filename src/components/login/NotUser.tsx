import { Link, Navigate } from "react-router-dom";

const NotUser = () => {
  return (
    <section className="flex justify-between w-80 items-center">
      <span>아직 회원이 아니신가요?</span>
      <Link to="/signup" className="btn btn-ghost text-blue-500">
        회원가입
      </Link>
    </section>
  );
};

export default NotUser;
