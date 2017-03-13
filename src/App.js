import React, { Component } from 'react';
import logo from './the_dot_logo.png';
import './App.css';

// Access all components from `muicss/react` module
import { Appbar, Button, Col, Container, Divider, Form, Input, Panel, Row } from 'muicss/react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>The DoT Birthday Countdown App</h2>
        </div>
            <Container>
            <Form>
               <Row>
                  <Input value="08/04/1961" />
                  <Input value="Barack Obama" />
                  <Input value="Age" />
                  <Input value="Next Birthday in ..." />
               </Row>
            </Form>
            </Container>
      </div>
    );
  }
}

export default App;
