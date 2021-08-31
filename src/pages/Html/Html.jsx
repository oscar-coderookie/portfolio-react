import "./Html.scss";
import { useState, useEffect } from "react";
import firebase from "../../config/firebase"
import WebCard from "../../components/WebCard/WebCard";

const Html = () => {
  const [htmlProjects, setHtmlProjects] = useState([]);

  const getHtmlProjects = async() => {
     firebase.firestore().collection('html').onSnapshot((querySnapshot) => {
      const projects = [];
      querySnapshot.forEach((doc)=> {
        projects.push({...doc.data(), id: doc.id});

      });
      setHtmlProjects(projects)
    }) 

  }

  useEffect(() => {
    getHtmlProjects()
    
  }, []);
  

  return (
    <div className="html">
      <div className="html-block">
        <div className="container-xl">
          <div className="row">
            {htmlProjects.map((project) => {
              return (
                <div className="col-11 col-lg-6 mx-auto" key={project.id}>
                  <WebCard
                    backgroundColor="#edf0f2"
                    thumbnail={null}
                    height={'auto'}
                    title={project.title}
                    deployUrl={project.deploy}
                    repositorie={project.repository}
                    key={project.id}
                    icon={project.icon}
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
