import React, { Component } from "react";
import GenerateQuote from './GenerateQuote';
import DisplayQuote from './DisplayQuote';


const simpsons = {
  quote: "They taste like...burning.",
  character: "Ralph Wiggum",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
  characterDirection: "Left"

}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      simpsonsQuote: simpsons,
    }
  }

  getQuote() {
    // Employee collection via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        // Once the data is collected, we update our state with the new data
        this.setState({
          simpsonsQuote: data[0],
        });
      });
  }
  render() {

    return (
      <div className="App">
        <GenerateQuote selectQuote={() => this.getQuote()} />
        <DisplayQuote simpsonsQuote={this.state.simpsonsQuote} />

      </div>
    );
  }
}








export default App;
