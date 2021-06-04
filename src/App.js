import "./App.css";
import React, { Component } from "react";
import Subscribe from "./components/Subscribe";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Switch, Route ,Redirect} from "react-router-dom";
import MyContest from "./components/MyContest";

function App() {
	return (
		<div>
			<Router>
				<NavigationBar />
				<Switch>
					<Route path="/" exact component={() => <MyContest />} />
					<Route
						path="/Subscribe"
						exact
						component={() => <Subscribe />}
					/>
					
				</Switch>
			</Router>
		</div>
	);
}

export default App;
