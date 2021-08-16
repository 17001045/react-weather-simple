import React from "react";
import { useSelector } from "react-redux";
import WeatherInfo from "./components/WeatherInfo";
import WeatherForm from "./components/WeatherForm";
import Navigation from "./components/Navigation";
import { navData } from "./common/navData";

const App = () => {
  const sectionActive = useSelector((state) => state.sectionActive);
  const sectionsRender = () => {
    switch (sectionActive) {
      case navData[0].label:
        return <WeatherForm />;
      case navData[1].label:
        return <WeatherInfo />;
      default:
        return null;
    }
  };
  return (
    <div className="b-app-container">
      <section className="b-app-container__content">
        <Navigation />
        {sectionsRender()}
      </section>
    </div>
  );
};

export default App;
