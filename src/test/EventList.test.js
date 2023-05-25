import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import EventList from "../EventList";
import Event from "../Event";
import { mockData } from "../mock-Data";

configure({ adapter: new Adapter() });

describe("<EventList /> component", () => {
	test("render correct number of events", () => {
		const EventListWrapper = shallow(<EventList events={mockData} />);
		expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
	});
});
