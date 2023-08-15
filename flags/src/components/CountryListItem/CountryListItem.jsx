import { Component } from "react";

import './CountryListItem.scss';

class CountryListItem extends Component {
   render() {
      const {imgSrc , countryName , population , region , capital} = this.props
      return (
         <article>
            <img src={imgSrc} alt={countryName + " flag"} />
            <div className="country-info">
               <h4 className="name">{countryName}</h4>
               
               <div>
                  <h5><span>Population: </span>{population}</h5>
                  <h5><span>Region: </span>{region}</h5>
                  <h5><span>Capital: </span>{capital}</h5>
               </div>
            </div>
         </article>
      )
   }
}

export default CountryListItem