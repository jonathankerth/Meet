import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import EventList from "../EventList";
import Event from "../Event";

configure({ adapter: new Adapter() });

describe("<EventList /> component", () => {
	test("render correct number of events", () => {
		const EventListWrapper = shallow(
			<EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} />
		);
		expect(EventListWrapper.find(Event)).toHaveLength(4);
	});
});
