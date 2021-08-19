import "./Portfolio.scss";
import CardComponent from "../../components/CardComponent/CardComponent";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import technologicStack from '../../mocks/TechnologicStack'

const Portfolio = () => {
  const { t } = useTranslation();
  
  return (
    <div className="portfolio">
      <div className="portfolio-container">

      
          {technologicStack.map((stack) => {
            return (
           
                <NavLink className="portfolio__links" exact to={stack.href}>
                  <CardComponent
                    color={stack.backgroundColor}
                    textColor={stack.textColor}
                    imageUrl={stack.imageUrl}
                    skill={stack.title}
                    legendText={t("legend_stack.1") + stack.title}
                    key={stack.id}
                    cardColor={stack.cardColor}
                    
                  />
                </NavLink>
        
            );
          })}
       
          </div>
    </div>
  );
};

export default Portfolio;
