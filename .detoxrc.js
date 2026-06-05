/** @type {Detox.DetoxConfig} */
module.exports = {
	testRunner: {
		args: {
			$0: 'jest',
			config: 'e2e/jest.config.js',
		},
		jest: {
			setupTimeout: 300000,
		},
	},
	apps: {
		'ios.debug': {
			type: 'ios.app',
			binaryPath:
				'ios/build/Build/Products/Debug-iphonesimulator/Planimate.app',
			build:
				'xcodebuild -workspace ios/Planimate.xcworkspace -scheme Planimate -configuration Debug -destination "generic/platform=iOS Simulator" -derivedDataPath ios/build',
		},
	},
	devices: {
		simulator: {
			type: 'ios.simulator',
			device: {
				type: 'iPhone 17 Pro',
			},
		},
	},
	configurations: {
		'ios.sim.debug': {
			device: 'simulator',
			app: 'ios.debug',
		},
	},
};
