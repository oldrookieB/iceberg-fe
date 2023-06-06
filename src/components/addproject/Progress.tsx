interface ProgressProps {
  progress: number;
}

const Progress = (props: ProgressProps) => {
  return (
    <ul className="steps w-60">
      <li className="step step-primary">프로젝트 선택</li>
      <li className={props.progress === 1 ? "step step-primary" : "step "}>
        프로젝트 추가
      </li>
    </ul>
  );
};

export default Progress;
