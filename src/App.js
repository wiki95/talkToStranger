import React, { Component } from "react";
import Appbar from "./components/Appbar";
import Landing from "./pages/Landing";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route path="/" component={Appbar} />
				<Route path="/landing" component={Landing} exact />
			</BrowserRouter>
		);
	}
}

export default App;
