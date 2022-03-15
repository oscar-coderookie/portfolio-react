import React, { useState, useEffect } from "react";
import './ReactNative.scss';
import WebCard from "../../components/WebCard/WebCard";
import firebase from "../../config/firebase";
import "simplebar/dist/simplebar.min.css";

const db = firebase.firestore();
const ReactNative_collection = "react-native";

const ReactNative = () => {
  const [reactNativeProjects, setReactNativeProjects] = useState([]);

  useEffect(() => {
    db.collection(ReactNative_collection).onSnapshot((snapshot) => {
      setReactNativeProjects(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);
  console.log(reactNativeProjects);

  return (
      <div className="react-native">
      <div className="react-native__block">
      <div className="container-xl">
      <div className="row">
      <div className="react-native__container">
      {reactNativeProjects.map((react)=> {
          return (
            <div className="col-11 col-lg-5 mx-auto" key={react.id}>
            <WebCard
              hrefGallery={`/work/react-native/${react.id}`}
              backgroundColor="var(--primary-color)"
              thumbnail={null}
              title={react.title}
              deployUrl={null}
              repositorie={react.repository}
              icon={react.icon}
              technologies={react.technologies}
            />
          </div>
          )
      })}
      </div>
      </div>
      
      </div>
      </div>
      
      </div>
      
      ) ;
};

export default ReactNative;
