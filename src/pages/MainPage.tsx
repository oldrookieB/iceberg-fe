import Layout from "../components/ui/Layout";
import Header from "../components/ui/Header";
import SearchBar from "../components/ui/SearchBar";
import Card from "../components/list/Card";
import TechButton from "../components/ui/TechButton";
import { TECHSTACKS } from "../constants/techStacks";

const MainPage = () => {
  return (
    <Layout>
      <Header />
      <div className="mt-12" />
      <SearchBar />
      <div className="mt-5" />
      <a className="text-lg font-medium mx-5">Likes</a>
      <div className="flex flex-wrap justify-start ml-2 mt-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <a className="text-lg font-medium mx-5">TechStack</a>
      <div className="flex flex-row flex-wrap mx-10 mt-3">
        {TECHSTACKS.map((techstack, index) => (
          <TechButton key={index} title={techstack.title} />
        ))}
      </div>
      <div className="flex flex-wrap justify-start ml-2 mt-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
};

export default MainPage;
