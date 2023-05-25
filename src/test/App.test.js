import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "../App";
import EventList from "../EventList";
import CitySearch from "../CitySearch";

configure({ adapter: new Adapter() });

describe("<App /> component", () => {
	let AppWrapper;
	beforeAll(() => {
		AppWrapper = shallow(<App />);
	});

	test("render list of events", () => {
		expect(AppWrapper.find(EventList)).toHaveLength(1);
	});

	test("render CitySearch", () => {
		expect(AppWrapper.find(CitySearch)).toHaveLength(1);
	});
});
