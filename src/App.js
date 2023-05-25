import React, { Component } from "react";
import "./App.css";
import CitySearch from "./CitySearch";
import Event from "./Event";
import EventList from "./EventList";
import NumberOfEvents from "./NumberofEvents";

class App extends Component {
	render() {
		return (
			<div className="App">
				<EventList />
				<CitySearch />
				<NumberOfEvents />
				<Event />
			</div>
		);
	}
}

export default App;
