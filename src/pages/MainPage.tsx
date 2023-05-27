import React, {useState} from 'react';
import Layout from '../components/ui/Layout';
import Header from '../components/ui/Header';
import SearchBar from '../components/ui/SearchBar';
import Card from '../components/list/Card';
import TechButton from '../components/ui/TechButton';

const MainPage = () => {

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
            <button className="btn btn-ghost w-24 text-lg">Likes</button>
            <div className='flex flex-wrap justify-center mt-3'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <button className="btn btn-ghost w-40 text-lg">TechStack</button>
            <div className='flex flex-row flex-wrap mx-10'>
                {TechStacks.map((tech, index) => (
                    <TechButton
                        key={index}
                        title={tech.title}
                        bgColor={tech.bgColor}
                        txtColor={tech.txtColor}
                    />
            ))}
            </div>
            <div className='flex flex-wrap justify-center mt-5'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
       </Layout>
    );
};

export default MainPage;