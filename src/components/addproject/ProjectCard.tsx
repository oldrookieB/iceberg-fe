import React from "react";

const ProjectCard = (props: any) => {
  const onChangeHandler = () => {
    props.selectRepository(props.name);
  };
  return (
    <label className=" h-48 border shadow-xl cursor-pointer shrink-0 card w-96 bg-base-100">
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.description}</p>
        <div className="justify-end card-actions">
          <input
            onChange={onChangeHandler}
            type="radio"
            name="radio-project"
            defaultChecked={props.index === 0 ? true : false}
            className="w-8 h-8 checkbox checkbox-success"
          />
        </div>
      </div>
    </label>
  );
};

export default ProjectCard;
