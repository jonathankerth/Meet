import React from "react";
import { mount } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents />", () => {
	let NumberOfEventsWrapper;

	beforeEach(() => {
		NumberOfEventsWrapper = mount(<NumberOfEvents updateEvents={() => {}} />);
	});

	test("noe-input is 32 (number type) by default", () => {
		const noeInput = NumberOfEventsWrapper.find("input.numberOfEvents");
		expect(noeInput.prop("type")).toBe("number");
		expect(NumberOfEventsWrapper.state("query")).toBe(32);
	});

	test("noe-input is changed, state and value are reflected correctly", () => {
		const noeInput = NumberOfEventsWrapper.find("input.numberOfEvents");
		const value = 15;
		noeInput.simulate("change", { target: { value } });
		expect(NumberOfEventsWrapper.state("query")).toBe(value);
	});
});
