import ProjectCard from "./ProjectCard";
import ProjectCardSkeleton from "./ProjectCardSkeleton";

interface SelectProjectProps {
  repositoryDatas: any;
  selectRepository: (selected: string) => void;
  changeProgress: () => void;
}

const SelectProject = (props: SelectProjectProps) => {
  return (
    <section className="flex flex-col gap-6 items-center w-full max-w-[382px] lg:max-w-4xl xl:max-w-7xl">
      <div className="flex flex-col">
        <label className="label">
          <span className="label-text">추가할 프로젝트 선택</span>
        </label>
        <div className="flex flex-wrap justify-between w-full gap-6 after:content-[''] after:w-[382px]">
          {/* 로딩 스켈레톤 UI */}
          {!props.repositoryDatas &&
            [1, 2, 3, 4, 5, 6].map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))}
          {props.repositoryDatas?.map((repositoryData: any, index: number) => (
            <ProjectCard
              index={index}
              key={repositoryData.id}
              selectRepository={props.selectRepository}
              {...repositoryData}
            />
          ))}
        </div>
      </div>
      {props.repositoryDatas && (
        <button onClick={props.changeProgress} className="btn btn-success w-80">
          다음 단계로
        </button>
      )}
    </section>
  );
};

export default SelectProject;
