import { Component } from "react";
import Header from "../Header/Header";
import Search from "../Search/Search";
import CountryList from "../CountryList/CountryList";

class App extends Component {
  render() {
     return (
      <>
         <Header />
         <main>
             <Search />
              <CountryList />
         </main>
      </>
     )
  }
}

export default App;