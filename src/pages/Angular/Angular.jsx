import "./Angular.scss";
import AngularPages from "../../mocks/AngularPages";
import WebCard from "../../components/WebCard/WebCard";
// import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const Angular = () => {
  return (
  
        <div className="angular">
          <div className="angular__container">
            {AngularPages.map((page) => {
              return (
                <WebCard
                  hrefGallery={`/work/angular/${page.id}`}
                  backgroundColor="#edf0f2"
                  thumbnail={page.thumb}
                  title={page.title}
                  deployUrl={page.url}
                  repositorie={page.repositorie}
                  key={page.id}
                />
              );
            })}
          </div>
        </div>
  );
};

export default Angular;
