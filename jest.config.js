module.exports = {
	// ...other configurations
	testEnvironment: "node",
	moduleNameMapper: {
		"^puppeteer$": "puppeteer-core",
	},
	transform: {
		"^.+\\.jsx?$": "babel-jest",
	},
};
