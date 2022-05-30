import React from "react";
import CocktailComponent from "./CocktailComponent";
import InlcudedSection from "./IncludedSection";
const CocktailPage = () => {
  return (
    <div className="cocktailPage">
      <h1 className="bluespecialty">
        Specialty <span className="blacktitle">Cocktails</span>
      </h1>
      <h3 className="barspubs">IN OUR BARS & PUBS</h3>
      <div className="typeofdrinks">
        <h4 className="bluecocktails">OUR BARTENDERS ARE EXPERTS AT POURING & MIXING THE BEST COCKTAILS</h4>
      </div>
      <br />
      <br />
      <br />
      <div className="photococktail">
        {/**arriba */}
        <CocktailComponent />
        {/**abajo */}
      </div>
      <div>
        <h3 className="premiumliquors">
          AND MANY MORE WITH OUR PREMIUM LIQUORS AT
          <span className="extracost"> NO EXTRA COST!</span>
        </h3>
        <div className="learnMoresection">
          <InlcudedSection/>
        </div>
      </div>
    </div>
  );
};
export default CocktailPage;
