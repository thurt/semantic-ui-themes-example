import React, { Component } from "react";
import "./App.css";
import { Button, Segment, Rating } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1em"
        }}
      >
        <Button>Chubby Themed Button</Button>
        <Segment>
          <Rating icon="heart" defaultRating={1} maxRating={20} />
        </Segment>
      </div>
    );
  }
}

export default App;
