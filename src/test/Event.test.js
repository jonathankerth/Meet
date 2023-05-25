import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Event from "../Event";
import { mockData } from "../mock-Data";

configure({ adapter: new Adapter() });

describe("<Event /> component", () => {
	let EventWrapper;
	beforeAll(() => {
		EventWrapper = shallow(<Event event={mockData[0]} />);
	});

	test("render the event details", () => {
		expect(EventWrapper.find(".EventDetails")).toHaveLength(0);
	});

	test("render the show details button", () => {
		expect(EventWrapper.find("button")).toHaveLength(1);
	});

	test("show details when show details button is clicked", () => {
		EventWrapper.find("button").simulate("click");
		EventWrapper.update(); // force re-render
		expect(EventWrapper.find(".event-details")).toHaveLength(1);
	});

	test("hide details when hide details button is clicked", () => {
		EventWrapper.find("button").simulate("click");
		EventWrapper.update(); // force re-render
		expect(EventWrapper.find(".event-details")).toHaveLength(0);
	});
});
