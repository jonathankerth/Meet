import React, { Component } from "react";
import { InfoAlert } from "./Alert";

class CitySearch extends Component {
	state = {
		query: "",
		suggestions: [],
		showSuggestions: false,
		infoText: "",
	};

	handleInputChanged = (event) => {
		const value = event.target.value;
		this.setState({ showSuggestions: true });
		const suggestions = this.props.locations.filter((location) => {
			return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
		});
		if (suggestions.length === 0) {
			this.setState({
				query: value,
				infoText:
					"We cannot find the city you are looking for. Please try another city. If offline, this may not be true due to caching.",
			});
		} else {
			return this.setState({
				query: value,
				suggestions,
				infoText: "",
			});
		}
	};

	handleItemClicked = (suggestion) => {
		this.setState({
			query: suggestion,
			showSuggestions: false,
		});

		this.props.updateEvents(suggestion);
	};

	render() {
		const { showSuggestions, query, infoText } = this.state;
		const { isWelcomeScreenVisible, isLoggedIn } = this.props;

		if (isWelcomeScreenVisible || !isLoggedIn) {
			return null; // Hide the search bar when WelcomeScreen is visible or user is not logged in
		}

		return (
			<div className="CitySearch">
				<InfoAlert text={infoText} />
				<input
					type="text"
					className="city"
					value={query}
					onChange={this.handleInputChanged}
					onFocus={() => {
						this.setState({ showSuggestions: true });
					}}
				/>
				<ul
					className="suggestions"
					style={showSuggestions ? {} : { display: "none" }}
				>
					{this.state.suggestions.map((suggestion, index) => (
						<li key={index} onClick={() => this.handleItemClicked(suggestion)}>
							{suggestion}
						</li>
					))}
					<li onClick={() => this.handleItemClicked("all")}>
						<b>See all cities</b>
					</li>
				</ul>
			</div>
		);
	}
}

export default CitySearch;
