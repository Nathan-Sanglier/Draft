import React from "react";
import kisses from "../kisses.gif";

/**
 * Success component displaying a sweet message upon acceptance.
 *
 * @returns {JSX.Element} JSX element representing the Success component.
 */
const Success = () => (
  <div className="App-success">
    {/* Displaying a cute kisses gif */}
    <img className="App-gif" src={kisses} alt="Kisses" />
    {/* Personalized success messages */}
    <p className="App-text-success">
      T’es celle à qui je pense tout le temps, ma chérie, et la personne avec qui j’ai envie de partager chaque moment.
    </p>
    <p className="App-text-success">
      Trop hâte de passer la Saint-Valentin (un autre jour ducoup mdr) avec toi, Néné.
    </p>
    {/* Displaying the date of the special moment */}
    <p className="App-text-date">A choisir/02/2026</p>
  </div>
);

export default Success;
