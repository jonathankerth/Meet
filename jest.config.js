module.exports = {
	// ...other configurations
	testEnvironment: "node",
	moduleNameMapper: {
		"^puppeteer$": "puppeteer-core",
		"^.+\\.css$": "<rootDir>/__mocks__/styleMock.js",
	},
	transform: {
		"^.+\\.jsx?$": "babel-jest",
	},
	transformIgnorePatterns: ["/node_modules/(?!axios).+\\.js$"],
};
