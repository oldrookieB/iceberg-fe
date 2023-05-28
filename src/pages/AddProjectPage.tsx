import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Base64 } from "js-base64";

const AddProjectPage = () => {
  const [readme, setReadme] = useState("");
  const getReadMe = async () => {
    const data = await axios.get(
      "https://api.github.com/repos/leey00nsu/TakingMeal/readme"
    );

    setReadme(Base64.decode(data.data.content));
  };
  useEffect(() => {
    getReadMe();
  }, []);
  return (
    <div className="markdown-body">
      <ReactMarkdown children={readme} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default AddProjectPage;
