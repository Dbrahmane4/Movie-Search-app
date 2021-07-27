import React from "react";
import SearchComponent from "./SearchComponent";

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchComponent/>
      </div>
    
    );
  }
}



export default App;
