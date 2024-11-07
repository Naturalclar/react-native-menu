const project = (() => {
	const path = require("node:path");
	try {
		const { configureProjects } = require("react-native-test-app");

		return configureProjects({
			android: {
				sourceDir: path.join("example", "android"),
				manifestPath: path.join(__dirname, "example", "android"),
			},
			ios: {
				sourceDir: path.join("example", "ios"),
			},
		});
	} catch (e) {
		return undefined;
	}
})();

module.exports = {
	dependencies: {
		// Help rn-cli find and autolink this library
		"@react-native-menu/menu": {
			root: __dirname,
		},
	},
	...(project ? { project } : undefined),
};
