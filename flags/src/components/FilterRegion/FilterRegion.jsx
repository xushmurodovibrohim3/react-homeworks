import { Component } from "react";

import './FilterRegion.scss';

class FilterRegion extends Component {
   state = {
      value: 'Filter By Region',
      isOpenChoices: false
   }

   openChoices = ({currentTarget}) => {
      if (this.state.isOpenChoices) {
         currentTarget.children[1].style.display = 'block'
         this.setState({ isOpenChoices: false })
      } else {
         currentTarget.children[1].style.display = 'none'
         this.setState({ isOpenChoices: true })
      }
   }
   
   changeValue = ({ target }) => {
      this.setState({value: target.innerText})
   }

   render() {
      return (
         <div onClick={this.openChoices} className="filter-region">
            <div className="value">{this.state.value}</div>
            <ul className="choices" onClick={this.changeValue}>
               <li>Africa</li>
               <li>America</li>
               <li>Europe</li>
               <li>Oceania</li>
            </ul>
         </div>
      )
   }
}

export default FilterRegion;