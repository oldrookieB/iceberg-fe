import axios from "axios";

// userName을 받아 API 호출 후 응답으로 해당 유저의 레포지토리 정보를 반환합니다.
export const getRepositoryData = async (userName: string) => {
  const response = await axios.get(
    `https://api.github.com/users/${userName}/repos`
  );

  return response;
};
