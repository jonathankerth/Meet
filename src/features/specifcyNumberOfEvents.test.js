import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";
import EventList from "../EventList";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
	let AppWrapper;

	test("When user has not specified a number let 32 be the default number", ({
		given,
		when,
		then,
	}) => {
		given("that a user has not specified a number of events", () => {
			AppWrapper = mount(<App />);
		});

		when("selecting cities", () => {
			AppWrapper.update();
		});

		then(
			/^A default number of (\d+) is loaded on the page$/,
			(expectedNumber) => {
				const NumberOfEventsWrapper =
					AppWrapper.find(NumberOfEvents).instance();
				expect(NumberOfEventsWrapper.state.query).toBe(
					parseInt(expectedNumber)
				);
			}
		);
	});

	test("User can change the number of events they want to see", ({
		given,
		when,
		then,
	}) => {
		given("that the user does not want to view all events", () => {
			AppWrapper = mount(<App />);
		});

		when("user changes the number of events in the input box", () => {
			const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents).instance();
			NumberOfEventsWrapper.setState({ query: 2 });
			AppWrapper.update();
		});

		then(
			"the User should be able to change the number of events they want to see.",
			() => {
				expect(AppWrapper.find(EventList).props().events).toHaveLength(2);
			}
		);
	});
});
