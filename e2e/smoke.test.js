const { device, element, by, expect } = require('detox');

describe('Smoke', () => {
	beforeAll(async () => {
		await device.launchApp({ newInstance: true });
	});

	it('shows the Goals screen on launch', async () => {
		await expect(element(by.text('Goals List'))).toBeVisible();
	});
});
