import "./Angular.scss";
import AngularPages from "../../mocks/AngularPages";
import WebCard from "../../components/WebCard/WebCard";

const Angular = () => {
  return (
    <div className="angular">
      <div className="angular__container">
        {AngularPages.map((page) => {
          return (
            <WebCard
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
