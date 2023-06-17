import { useEffect, useState } from "react";

import { useGithubAuthStore } from "../store/auth";

import { useAuthStore } from "../store/auth";
import Header from "../components/ui/Header";
import Layout from "../components/ui/Layout";
import SelectProject from "../components/addproject/SelectProject";
import ConfirmProject from "../components/addproject/ConfirmProject";
import Progress from "../components/addproject/Progress";
import { getRepositoryData } from "../api/github";

const AddProjectPage = () => {
  const [progress, setProgress] = useState(0);
  // TODO: 가져온 레포지토리 정보 중 사용할 데이터 정해지면 타입 설정하기
  const [repositoryDatas, setRepositoryDatas] = useState<any>(null);
  const [selectedRepository, setSelectedRepository] = useState("");

  const githubAuthStore = useGithubAuthStore();

  const authStore = useAuthStore();

  const setRepository = async () => {
    const response = await getRepositoryData(githubAuthStore.userName);

    console.log(response);
    setRepositoryDatas(response.data);
    setSelectedRepository(response.data[0].name);
  };

  // 유저의 레포지토리 리스트를 가져옵니다.
  useEffect(() => {
    setTimeout(setRepository, 500);
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
    <Layout>
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
    </Layout>
  );
};

export default AddProjectPage;
