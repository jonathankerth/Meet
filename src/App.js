import React, { Component } from "react";
import "./App.css";
import CitySearch from "./CitySearch";
import Event from "./Event";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import "./nprogress.css";

class App extends Component {
	state = {
		events: [],
		locations: [],
	};

	updateEvents = (location) => {
		getEvents().then((events) => {
			const locationEvents =
				location === "all"
					? events
					: events.filter((event) => event.location === location);
			this.setState({
				events: locationEvents,
			});
		});
	};

	componentDidMount() {
		this.mounted = true;
		getEvents().then((events) => {
			if (this.mounted) {
				this.setState({ events, locations: extractLocations(events) });
			}
		});
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	render() {
		return (
			<div className="App">
				<EventList events={this.state.events} />
				<CitySearch
					locations={this.state.locations}
					updateEvents={this.updateEvents}
				/>
				<NumberOfEvents />
				<Event />
			</div>
		);
	}
}

export default App;
