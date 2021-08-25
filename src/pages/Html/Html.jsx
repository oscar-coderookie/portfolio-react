import "./Html.scss";
import HtmlProjects from "../../mocks/HtmlProjects";
import WebCard from "../../components/WebCard/WebCard";

const Html = () => {
  return (
    <div className="html">
      <div className="html-block">
        <div className="container-xl">
          <div className="row">
            {HtmlProjects.map((project) => {
              return (
                <div className="col-11 col-lg-6 mx-auto">
                  <WebCard
                    backgroundColor="#edf0f2"
                    thumbnail={null}
                    height={'auto'}
                    title={project.title}
                    deployUrl={project.deploy}
                    repositorie={project.repository}
                    key={project.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Html;
