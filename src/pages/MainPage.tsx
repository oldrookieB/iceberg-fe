import axios from "axios";

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
  },     []);

    
    return (
       <Layout>
            <Header/>
            <div className='mt-12' />
            <SearchBar/>
            <div className='mt-5'/>
     
            <div className='flex flex-wrap justify-between' >
              {repositoryDatas.map((repository: any) => (
                <Link to={`/project/${repository.id}`} key = {repository.id}>
                <Card
                  title={repository.name}
                  description={repository.description}
                />
                </Link>
              ))}
            </div>          
       </Layout>
    );
};

export default MainPage;
