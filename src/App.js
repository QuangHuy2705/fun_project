import React, { Component } from 'react';
import './App.css';
import Navbar from "./containers/Navbar/Navbar";
import Main from "./containers/Main/Main";
import {configureStore} from "./store/index";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ClubDetail from "./components/ClubDetail/ClubDetail";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      	<Router>
      		<div className="App">
      			<Navbar />
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route exact path="/clubs/:club_id" component={ClubDetail}/>
            </Switch>
      		</div>
      	</Router>
      </Provider>
    );
  }
}

export default App;
