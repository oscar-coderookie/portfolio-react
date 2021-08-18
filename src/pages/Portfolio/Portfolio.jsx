import "./Portfolio.scss";
import CardComponent from "../../components/CardComponent/CardComponent";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const technologicStack = [
  {
    id: 1,
    title: "React Js",
    imageUrl: "https://img.icons8.com/color/240/000000/react-native.png",
    backgroundColor: "#E4E4E4",
    legend: "Projects developed in React JS",
    href: "/work/react",
    textColor: "#E4E4E4",
    cardColor: "#80DEEA"
  },
  {
    id: 2,
    title: "NodeJs",
    imageUrl: "https://img.icons8.com/color/144/000000/nodejs.png",
    backgroundColor: "#BFBFBF",
    legend: "Projects developed in Nodejs",
    href: "/work/nodejs",
    textColor: "#E4E4E4",
    cardColor: "#4CAF50"
  },
  {
    id: 3,
    title: "Angular",
    imageUrl: "https://img.icons8.com/color/144/000000/angularjs.png",
    backgroundColor: "#A7A7A7",
    legend: "Projects developed in Angular",
    href: "/work/angular",
    textColor: "#E4E4E4",
    cardColor: "#DD2C00"
  },
  {
    id: 4,
    title: "HTML & CSS",
    imageUrl: "https://img.icons8.com/color/144/000000/html-5--v1.png",
    backgroundColor: "#929292",
    legend: "Projects developed in HTML & CSS",
    href: "/work/html",
    textColor: "#E4E4E4",
    cardColor: "#FF6D00"
  },
];

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
                    legendText={stack.legend}
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
