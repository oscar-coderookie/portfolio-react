import "./Angular.scss";
import { useState, useEffect } from "react";
import WebCard from "../../components/WebCard/WebCard";
import firebase from "../../config/firebase";
// import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const db = firebase.firestore();
const Angular_Collection = "angular";

const Angular = () => {
  const [angularProjects, setAngularProjects] = useState([]);

  useEffect(() => {
    db.collection(Angular_Collection).onSnapshot((snapshot) => {
      setAngularProjects(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);
  console.log(angularProjects);

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
                      technologies={page.technologies}
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
