import "./Angular.scss";
import { useState, useEffect } from "react";
import { getAngularProjects } from "../../db/angular";
import WebCard from "../../components/WebCard/WebCard";
// import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const Angular = () => {
  const [angularProjects, setAngularProjects] = useState([]);
  useEffect(() => {
    getAngularProjects().then((angular) => {
      setAngularProjects(angular);
    });
  }, []);
  return (
    <div className="angular">
      <div className="angular-block">
        <div className="container-xl">
          <div className="row">
            <div className="angular__container">
              {angularProjects.map((page) => {
                return (
                  <div className="col-11 col-md-6 mx-auto" key={page.id}>
                    <WebCard
                      hrefGallery={`/work/angular/${page.id}`}
                      backgroundColor="#edf0f2"
                      thumbnail={page.thumb}
                      title={page.title}
                      deployUrl={page.deploy}
                      repositorie={page.repository}
                      
                      icon={page.icon}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Angular;
