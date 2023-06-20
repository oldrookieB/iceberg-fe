import axios from "axios";

import React, { useState, useEffect } from "react";
import Layout from "../components/ui/Layout";
import Header from "../components/ui/Header";
import SearchBar from "../components/ui/SearchBar";
import Card from "../components/list/Card";
import CardSkeleton from "../components/list/CardSkeleton";
import { ProjectType } from "../types/project.type";

const MainPage = () => {
  const [repositoryDatas, setRepositoryDatas] = useState<ProjectType[] | null>(
    null
  );
  const [searchResult, setSearchResult] = useState<ProjectType[]>([]); //필터링 된 검색 결과 저장하기 위한 상태 설정

  useEffect(() => {
    const fetchRepositoryData = async () => {
      try {
        const response = await axios.get("API UR 자리");
        // setRepositoryDatas(response.data);
        console.log(response.data); // 데이터 들어오는지 확인
      } catch (error) {
        console.log(error);
      }
    };

    setTimeout(fetchRepositoryData, 500);
  }, []);

  const handleSearch = (searchQuery: string) => {
    const filteredRepositories = repositoryDatas?.filter(
      (repository) =>
        repository.title.toLowerCase().includes(searchQuery.toLowerCase()) //검색어를 기준으로 레포지토리 필터링
    );
    if (filteredRepositories) {
      setSearchResult(filteredRepositories); //필터링 된 검색결과 설정
    }
  };

  return (
    <Layout>
      <Header />
      <div className="mt-12" />
      <SearchBar onSearch={handleSearch} />
      <div className="mt-5" />

      <div className="flex flex-col">
        <label className="label">
          <span className="label-text">전체 프로젝트</span>
        </label>
        <div className="py-4 flex flex-wrap justify-between items-center w-screen max-w-[384px] lg:max-w-4xl xl:max-w-7xl gap-6 after:content-[''] after:basis-[384px]  ">
          {!repositoryDatas &&
            [1, 2, 3, 4, 5, 6].map((_, index) => <CardSkeleton key={index} />)}
          {searchResult.length > 0
            ? searchResult.map((repository) => (
                <Card
                  key={repository.id}
                  id={repository.id}
                  userName={repository.userName}
                  title={repository.title}
                  description={repository.description}
                  techStacks={repository.techStacks}
                />
              ))
            : //검색결과가 없을 경우 모든 레포지토리 보여주기
              repositoryDatas?.map((repository) => (
                <Card
                  key={repository.id}
                  id={repository.id}
                  userName={repository.userName}
                  title={repository.title}
                  description={repository.description}
                  techStacks={repository.techStacks}
                />
              ))}
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;
