import React from "react";
import rum from "../images/Rum.png";
import mojito from "../images/Mojito.png";
import margarita from "../images/Margarita.png";
import pina from "../images/Pina.png";
import lagoon from "../images/lagoon.png";
import bahama from "../images/Bahama.png";
const CocktailPage = () => {
  return (
    <div className="cocktailPage">
      <h1 className="bluespecialty">
        Specialty <span className="blacktitle">Cocktails</span>
      </h1>
      <h3 className="barspubs">IN OUR BARS & PUBS</h3>
      <div className="typeofdrinks">
        <h4>OUR BARTENDERS ARE EXPERTS AT POURING</h4>
        <h4>& MIXING THE BEST COCKTAILS</h4>
      </div>
      <div className="photococktail">
        {/**arriba */}
        <img className="rum" src={rum} alt="rum"/>
        <img className="mojito" src={mojito} alt="mojito"/>
        <img className= "margarita" src={margarita} alt="margarita"/>
        {/**abajo */}
        <img className= "pina" src={pina} alt="pina"/>
        <img className= "lagoon" src={lagoon} alt="lagoon"/>
        <img className= "bahama" src={bahama} alt="bahama"/>
      </div>
      <div>
        <h3 className="premiumliquors">
          AND MANY MORE WITH OUR PREMIUM LIQUORS AT <h3 className="extracost">NO EXTRA COST!</h3>
        </h3>
      </div>
    </div>
  );
};
export default CocktailPage;
