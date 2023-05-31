const axiosMock = {
	get: jest.fn().mockImplementation((url) => {
		switch (url) {
			case "/api/url1":
				return Promise.resolve({ data: "data for url1" });
			case "/api/url2":
				return Promise.resolve({ data: "data for url2" });
			default:
				throw new Error(`Unmocked url: ${url}`);
		}
	}),
};

export default axiosMock;
