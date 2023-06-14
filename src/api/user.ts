import axios from "axios";

interface LoginInputs {
  [inputLable: string]: string;
}

// 자체 로그인 API
export const defaultLogin = async (data: LoginInputs) => {
  console.log(data);

  // TODO: 자체 로그인 api , api 추가 시 변경
  // const response = await axios.post("", {
  //   id: data.아이디,
  //   password: data.비밀번호,
  // });
  // console.log(response);
};

// 자체 회원가입 API
export const defaultSignup = async (data: LoginInputs) => {
  console.log(data);

  // TODO: 자체 회원가입 api , api 추가 시 변경
  // const response = await axios.post("", {
  //   id: data.아이디,
  //   password: data.비밀번호,
  // });
  // console.log(response);
};
