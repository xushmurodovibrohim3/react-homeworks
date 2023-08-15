import { Component } from "react";
import CountryListItem from "../CountryListItem/CountryListItem";
import germanyFlag from '../../assets/images/germany.png';
import usaFlag from '../../assets/images/usa.png';
import brazilFlag from '../../assets/images/brazil.png';
import icelandFlag from '../../assets/images/iceland.png';

import './CountryList.scss';

const data = [ 
   {
      imgSrc: germanyFlag, 
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      capital: "Berlin"
   },
   {
      imgSrc: usaFlag,
      name: "United States of America",
      population: "81,770,900",
      region: "Americas",
      capital: "Washington, D.C."
   },
   {
      imgSrc: brazilFlag,
      name: "Brazil",
      population: "81,770,900",
      region: "Americas",
      capital: "Brasília"
   },
   {
      imgSrc: icelandFlag,
      name: "Iceland",
      population: "81,770,900",
      region: "Europe",
      capital: "Reykjavík"
   },
   {
      imgSrc: germanyFlag,
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      capital: "Berlin"
   },
   {
      imgSrc: usaFlag,
      name: "United States of America",
      population: "81,770,900",
      region: "Americas",
      capital: "Washington, D.C."
   },
   {
      imgSrc: brazilFlag,
      name: "Brazil",
      population: "81,770,900",
      region: "Americas",
      capital: "Brasília"
   },
   {
      imgSrc: icelandFlag,
      name: "Iceland",
      population: "81,770,900",
      region: "Europe",
      capital: "Reykjavík"
   },
]

class CountryList extends Component {
   render() {
      return (
         <section className="countery-cards container">
            {
               data.map((e) => {
                  return <CountryListItem imgSrc={e.imgSrc} countryName={e.name} population={e.population} region={e.region} capital={e.capital}/>
               })
            }
         </section>
      )
   }
}

export default CountryList