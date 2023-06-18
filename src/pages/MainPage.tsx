import React, { useState, useEffect } from 'react';
import Layout from '../components/ui/Layout';
import Header from '../components/ui/Header';
import SearchBar from '../components/ui/SearchBar';
import Card from '../components/list/Card';
import { getRepositoryData } from '../api/github';
import { useGithubAuthStore } from "../store/auth";
import { Link } from 'react-router-dom';

const MainPage = () => {
  const [repositoryDatas, setRepositoryDatas] = useState([]);
  const [searchResult, setSearchResult] = useState([]); //필터링 된 검색 결과 저장하기 위한 상태 설정
  const githubAuthStore = useGithubAuthStore();

  useEffect(() => {
    const fetchRepositoryData = async () => {
      try {
        const response = await getRepositoryData(githubAuthStore.userName);
        setRepositoryDatas(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRepositoryData();
  }, []);

  const handleSearch = (searchQuery: string) => {
    const filteredRepositories = repositoryDatas.filter((repository) =>
      repository.name.toLowerCase().includes(searchQuery.toLowerCase()) //검색어를 기준으로 레포지토리 필터링
    );
    setSearchResult(filteredRepositories); //필터링 된 검색결과 설정
  };

  return (
    <Layout>
      <Header />
      <div className='mt-12' />
      <SearchBar onSearch={handleSearch} />
      <div className='mt-5' />

      <div className='flex flex-wrap justify-between'>
        {searchResult.length > 0 ? (
          searchResult.map((repository) => (
            <Link to={`/project/${repository.id}`} key={repository.id}>
              <Card title={repository.name} description={repository.description} />
            </Link>
          ))
        ) : ( //검색결과가 없을 경우 모든 레포지토리 보여주기
          repositoryDatas.map((repository) => (
            <Link to={`/project/${repository.id}`} key={repository.id}>
              <Card title={repository.name} description={repository.description} />
            </Link>
          ))
        )}
      </div>
    </Layout>
  );
};

export default MainPage;
