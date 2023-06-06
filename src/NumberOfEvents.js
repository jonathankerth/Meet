import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
	constructor() {
		super();
		this.state = {
			numberOfEvents: 32,
			errorText: "",
		};
	}

	handleInputChanged = (event) => {
		const value = event.target.value;
		if (value >= 1 && value <= 32) {
			this.setState({
				numberOfEvents: value,
				errorText: "",
			});
		} else {
			this.setState({
				numberOfEvents: value,
				errorText: "Please enter a valid number between 1 and 32",
			});
		}
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevState.numberOfEvents !== this.state.numberOfEvents) {
			this.props.updateEvents(this.state.numberOfEvents);
		}
	}

	render() {
		return (
			<div className="numberOfEvents">
				<ErrorAlert text={this.state.errorText} />
				<input
					type="number"
					className="numberOfEvents"
					min={1}
					max={32}
					value={this.state.numberOfEvents}
					onChange={this.handleInputChanged}
				/>
			</div>
		);
	}
}

export default NumberOfEvents;
