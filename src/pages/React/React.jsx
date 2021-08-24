import ReactJsProjects from "../../mocks/ReactJsProjects";
import WebCard from "../../components/WebCard/WebCard";


import "./React.scss";

const React = (id) => {
  
  return (
    <div className="react">
      {ReactJsProjects.map((react) => {
        return (
          <WebCard
            hrefGallery={`/work/react/${react.id}`}
            backgroundColor="#edf0f2"
            thumbnail={react.thumb}
            title={react.title}
            deployUrl={react.deploy}
            repositorie={react.repository}
            key={react.id}
          />
        );
      })}
    </div>
  );
};

export default React;
