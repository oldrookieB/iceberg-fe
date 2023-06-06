import axios from "axios";
import { useEffect, useState } from "react";

import { Base64 } from "js-base64";
import { useGithubAuthStore } from "../store/auth";

import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import Header from "../components/ui/Header";
import SelectProject from "../components/addproject/selectProject";
import ConfirmProject from "../components/addproject/ConfirmProject";
import Progress from "../components/addproject/Progress";

const AddProjectPage = () => {
  const [progress, setProgress] = useState(0);
  // TODO: 가져온 레포지토리 정보 중 사용할 데이터 정해지면 타입 설정하기
  const [repositoryDatas, setRepositoryDatas] = useState<any>([]);
  const [selectedRepository, setSelectedRepository] = useState("");
  
  const githubAuthStore = useGithubAuthStore();

  const authStore = useAuthStore();

  // 로그인 상태가 아닐 시 로그인 페이지로 이동
  if (!authStore.isLogin) {
    return <Navigate to="/"></Navigate>;
  }

  const getRepositoryData = async () => {
    const data = await axios.get(
      `https://api.github.com/users/${githubAuthStore.userName}/repos`
    );

    console.log(data);
    setRepositoryDatas(data.data);
    setSelectedRepository(data.data[0].name);
  };

  // 유저의 레포지토리 리스트를 가져옵니다.
  useEffect(() => {
    getRepositoryData();
  }, []);

  // 프로젝트 선택 단계에서 프로젝트 추가 단계로 넘어갑니다.
  const changeProgressHandler = () => {
    setProgress(1);
  };

  // 레포지토리를 선택합니다.
  const selectRepositoryHandler = (selected: string) => {
    setSelectedRepository(selected);
  };

  return (
    <div className="flex flex-col items-center w-screen min-h-screen">
      <Header />

      <Progress progress={progress} />

      {/* progress 0 : 프로젝트 선택 단계  */}
      {progress === 0 && (
        <SelectProject
          repositoryDatas={repositoryDatas}
          selectRepository={selectRepositoryHandler}
          changeProgress={changeProgressHandler}
        />
      )}

      {/*  progress 1 : 프로젝트 추가 단계 */}
      {progress === 1 && (
        <ConfirmProject
          repositoryDatas={repositoryDatas}
          selectedRepository={selectedRepository}
        />
      )}
    </div>
  );
};

export default AddProjectPage;
