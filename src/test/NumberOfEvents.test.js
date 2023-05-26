import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { mockData } from "../mock-Data";
import Event from "../Event";

configure({ adapter: new Adapter() });

describe("<Event /> component", () => {
	let eventWrapper;
	const event = mockData[0];

	beforeEach(() => {
		eventWrapper = shallow(<Event event={event} />);
	});

	test("renders the component", () => {
		expect(eventWrapper.exists()).toBe(true);
	});

	test("renders the summary as h1", () => {
		const summary = eventWrapper.find("h1.summary");
		expect(summary.text()).toBe(event.summary);
	});

	test("renders the start details", () => {
		const eventStart = eventWrapper.find("p.event-start");
		expect(eventStart.text()).toBe(new Date(event.start.dateTime).toString());
	});

	test("renders location details", () => {
		const eventLocation = eventWrapper.find("p.event-location");
		expect(eventLocation.text()).toBe(`@${event.summary} | ${event.location}`);
	});

	test("renders button show details, when details collapsed", () => {
		const detailsButton = eventWrapper.find("button.details-button");
		expect(detailsButton.text()).toBe("show details");
	});

	test("renders collapsed state as default", () => {
		expect(eventWrapper.state("collapsed")).toBe(true);
	});

	test("expand details, when clicking show details", () => {
		const detailsButton = eventWrapper.find("button.details-button");
		detailsButton.simulate("click");
		expect(eventWrapper.state("collapsed")).toBe(false);
	});

	test("collapse details, when clicking hide details", () => {
		eventWrapper.setState({ collapsed: false });
		const detailsButton = eventWrapper.find("button.details-button");
		detailsButton.simulate("click");
		expect(eventWrapper.state("collapsed")).toBe(true);
	});

	describe("when details expanded", () => {
		beforeEach(() => {
			eventWrapper.setState({ collapsed: false });
		});

		test("renders about header and description", () => {
			const aboutHeader = eventWrapper.find("h2.about");
			const description = eventWrapper.find("p.description");

			expect(aboutHeader.text()).toBe("About event:");
			expect(description.text()).toBe(event.description);
		});

		test("renders a link with correct href", () => {
			const link = eventWrapper.find("a.link");

			expect(link.prop("href")).toBe(event.htmlLink);
		});
	});
});
