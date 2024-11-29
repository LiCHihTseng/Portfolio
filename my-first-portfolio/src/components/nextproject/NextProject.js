import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const NextProjectButton = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // 匹配 URL 中的 ":id"

  const totalProjects = 3; // 项目总数
  const currentId = parseInt(id) || 1; // 当前项目 ID，默认为 1

  const handleNextProject = () => {
    const nextId = (currentId % totalProjects) + 1; // 计算下一个项目 ID
    navigate(`/project/${nextId}`); // 导航到下一个项目
  };

  return (
    <div className="flex justify-center items-center p-4 gap-4" onClick={handleNextProject}>
      {/* 替换成 <button>，避免 <a> 的默认跳转行为 */}
      <button className="text-3xl text-white" onClick={handleNextProject}>
        Next Project
      </button>
      <FontAwesomeIcon
        icon={faArrowCircleRight}
        className="fa-2x cursor-pointer"
        onClick={handleNextProject}
      />
    </div>
  );
};

export default NextProjectButton;