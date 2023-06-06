import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
	constructor() {
		super();
		this.state = {
			numberofevents: 32,
			errorText: "",
		};
	}

	handleInputChanged = (event) => {
		const value = event.target.value;
		if (value >= 1 && value <= 32) {
			this.setState({
				numberofevents: value,
				errorText: "",
			});
		} else {
			this.setState({
				numberofevents: value,
				errorText: "Please enter a valid number between 1 and 32",
			});
		}
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevState.numberofevents !== this.state.numberofevents) {
			this.props.updateEvents(this.state.numberofevents);
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
					value={this.state.numberofevents}
					onChange={this.handleInputChanged}
				/>
			</div>
		);
	}
}

export default NumberOfEvents;
