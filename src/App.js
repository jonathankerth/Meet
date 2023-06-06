import React, { Component } from "react";
import "./App.css";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";
import "./nprogress.css";
import WelcomeScreen from "./WelcomeScreen";

class App extends Component {
	state = {
		events: [],
		locations: [],
		numberOfEvents: 32,
		showWelcomeScreen: undefined,
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

	async componentDidMount() {
		this.mounted = true;
		const accessToken = localStorage.getItem("access_token");
		const isTokenValid = (await checkToken(accessToken)).error ? false : true;
		const searchParams = new URLSearchParams(window.location.search);
		const code = await searchParams.get("code");
		this.setState({ showWelcomeScreen: !(code || isTokenValid) });
		if ((code || isTokenValid) && this.mounted) {
			getEvents().then((events) => {
				if (this.mounted) {
					this.setState({
						events: events,
						locations: extractLocations(events),
					});
				}
			});
		}
	}
	componentWillUnmount() {
		this.mounted = false;
	}
	render() {
		if (this.state.showWelcomeScreen === undefined)
			return <div className="App" />;
		return (
			<div className="App">
				<WelcomeScreen
					showWelcomeScreen={this.state.showWelcomeScreen}
					getAccessToken={() => {
						getAccessToken();
					}}
				/>
				<CitySearch
					locations={this.state.locations}
					updateEvents={this.updateEvents}
				/>
				<NumberOfEvents
					numberOfEvents={this.state.numberOfEvents}
					updateEvents={this.updateEvents}
				/>
				<EventList events={this.state.events} />
			</div>
		);
	}
}

export default App;
