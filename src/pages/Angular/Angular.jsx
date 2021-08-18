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
              thumbnail={page.thumb}
              title={page.title}
              deployUrl={page.url}
              repositorie={page.repositorie}
              description={page.description}
              key={page.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Angular;
