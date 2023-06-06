import React, { Component } from "react";
import Event from "./Event";

class EventList extends Component {
	render() {
		const { events, numberofevents } = this.props;
		const filteredEvents = events.slice(0, numberofevents);

		return (
			<ul className="EventList">
				{filteredEvents.map((event) => (
					<li key={event.id}>
						<Event event={event} />
					</li>
				))}
			</ul>
		);
	}
}

export default EventList;
