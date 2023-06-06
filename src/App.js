import React, { Component } from "react";
import "./App.css";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import "./nprogress.css";

class App extends Component {
	state = {
		events: [],
		locations: [],
		numberOfEvents: 32,
	};

	updateEvents = (location, eventCount) => {
		getEvents().then((events) => {
			let locationEvents = events.filter(
				(event) => event.location === location
			);

			if (eventCount !== undefined) {
				this.setState({ numberOfEvents: eventCount });
			}

			locationEvents = locationEvents.slice(0, this.state.numberOfEvents);

			this.setState({
				events: locationEvents,
			});
		});
	};

	componentDidMount() {
		this.mounted = true;
		getEvents()
			.then((events) => {
				if (this.mounted) {
					this.setState({
						events: events ? events.slice(0, this.state.numberOfEvents) : [],
						locations: extractLocations(events),
					});
				}
			})
			.catch((error) => {
				console.error("Error retrieving events:", error);
			});
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	render() {
		return (
			<div className="App">
				<CitySearch
					locations={this.state.locations}
					updateEvents={this.updateEvents}
				/>
				<NumberOfEvents updateEvents={this.updateEvents} />
				<EventList events={this.state.events} />
			</div>
		);
	}
}

export default App;
