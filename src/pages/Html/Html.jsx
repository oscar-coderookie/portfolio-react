import "./Html.scss";
import HtmlProjects from "../../mocks/HtmlProjects";
import WebCard from "../../components/WebCard/WebCard";

const Html = () => {
  return (
    <div className="html">
      <div className="html__container">
        {HtmlProjects.map((project) => {
          return (
            <WebCard
              backgroundColor="#edf0f2"
              thumbnail={null}
              title={project.title}
              deployUrl={project.deploy}
              repositorie={project.repository}
              key={project.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Html;
