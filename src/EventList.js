import React, { Component } from "react";
import Event from "./Event";

class EventList extends Component {
	render() {
		const { events, numberOfEvents } = this.props;
		const filteredEvents = events.slice(0, numberOfEvents);

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
