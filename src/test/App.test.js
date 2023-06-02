import React from "react";
import { mount } from "enzyme";
import App from "../App";
import EventList from "../EventList";
import CitySearch from "../CitySearch";
import NumberOfEvents from "../NumberOfEvents";

describe("<App /> integration", () => {
	let AppWrapper;

	beforeEach(() => {
		AppWrapper = mount(<App />);
	});

	test('App passes "events" state as a prop to EventList', () => {
		AppWrapper.update();
		expect(AppWrapper.find(EventList).props().events).toHaveLength(2);
	});

	test('App passes "locations" state as a prop to CitySearch', () => {
		AppWrapper.update();
		expect(AppWrapper.find(CitySearch).props().locations).toHaveLength(2);
	});
	test("events state changes when the number of events selected by the user changes", () => {
		const selectedNumber = 2;
		const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents).instance();
		NumberOfEventsWrapper.setState({ query: selectedNumber });
		AppWrapper.update();
		expect(AppWrapper.find(EventList).props().events).toHaveLength(
			selectedNumber
		);
	});
});
