import React, { useState } from 'react';
import Layout from '../components/ui/Layout';
import Header from '../components/ui/Header';
import SearchBar from '../components/ui/SearchBar';
import Card from '../components/list/Card';
import TechButton from '../components/ui/TechButton';

const MainPage = (props) => {
    const cardData = [
        {
            id: 1,
            title: "my-awesome-project",
            description: "This is an amazing project.",
          },
          {
            id: 2,
            title: "react-app",
            description: "A React application for frontend development.",
          },
          {
            id: 3,
            title: "python-scripts",
            description: "Collection of useful Python scripts.",
          },
          {
            id: 4,
            title: "portfolio-website",
            description: "My personal portfolio website.",
          },
          {
            id: 5,
            title: "node-api",
            description: "A Node.js API server for backend development.",
          },
    ];

    const TechStacks = [
        { title: "React", bgColor: "#61dafb", txtColor: "black" },
        { title: "Python", bgColor: "#3676AB", txtColor: "white" },
        { title: "JavaScript", bgColor: "#f7df1e", txtColor: "black" },
        { title: "html", bgColor: "#e34f26", txtColor: "white" },
        { title: "Css", bgColor: "#264de4", txtColor: "white" },
        { title: "node.js", bgColor: "#339933", txtColor: "white" },
        { title: "java", bgColor: "#007396", txtColor: "white" },
        { title: "ruby", bgColor: "#cc342d", txtColor: "white" },
        { title: "angular", bgColor: "#dd0031", txtColor: "white" },
        { title: "Vue.js", bgColor: "#4fc08d", txtColor: "white" },
        { title: "c#", bgColor: "#68217a", txtColor: "white" }
    ]
    
    return (
       <Layout>
            <Header/>
            <div className='mt-12' />
            <SearchBar/>
            <div className='mt-5'/>
            <a className='text-lg font-medium mx-5'>Likes</a>
            <div className='flex flex-wrap justify-start ml-2 mt-3'>
              {cardData.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    description={card.description}
                    />
              ))}
            </div>
            <a className='text-lg font-medium mx-5'>TechStack</a>
            <div className='flex flex-row flex-wrap mx-10 mt-3'>
                {TechStacks.map((tech, index) => (
                    <TechButton
                        key={index}
                        title={tech.title}
                        bgColor={tech.bgColor}
                        txtColor={tech.txtColor}
                    />
            ))}
            </div>
            <div className='flex flex-wrap justify-start ml-2 mt-5'>
            {cardData.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    description={card.description}
                    />
              ))}
            </div>
       </Layout>
    );
};

export default MainPage;
