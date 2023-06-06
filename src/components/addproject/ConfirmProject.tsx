import Input from "../ui/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import ReadMe from "./ReadMe";
import DisabledInput from "../ui/DisabledInput";
import SelectTechStack from "./SelectTechStack";

interface ProjectInputs {
  [inputLable: string]: string;
}

interface ConfirmProjectProps {
  repositoryDatas: any;
  selectedRepository: string;
}

const ConfirmProject = (props: ConfirmProjectProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectInputs>();
  const onSubmit: SubmitHandler<ProjectInputs> = (data) => console.log(data);

  const selectedRepositoryData = props.repositoryDatas.filter(
    (repositoryData: any) => repositoryData.name === props.selectedRepository
  )[0];

  return (
    <section className="flex justify-center w-1/2 ">
      <form
        id="projectForm"
        className="flex flex-col items-center w-full gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="프로젝트 이름"
          type="text"
          errors={errors}
          register={register}
          required
        />

        <DisabledInput
          label="레포지토리 이름"
          defaultValue={props.selectedRepository}
        />

        {/* 기술 스택 선택 */}
        <SelectTechStack />

        {/* 리드미 */}
        <ReadMe selectedRepository={props.selectedRepository} />

        <button type="submit" className="btn btn-success w-80">
          프로젝트 추가
        </button>
      </form>
    </section>
  );
};

export default ConfirmProject;
