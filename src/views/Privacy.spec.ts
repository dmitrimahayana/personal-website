import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Privacy from './Privacy.vue';

describe('Privacy.vue', () => {
	it('renders privacy policy page', () => {
		const wrapper = mount(Privacy);
		expect(wrapper.find('.privacy').exists()).toBe(true);
		expect(wrapper.find('.title').text()).toBe('Privacy Policy');
	});

	it('displays all required sections', () => {
		const wrapper = mount(Privacy);
		const sections = wrapper.findAll('.section');

		expect(sections.length).toBeGreaterThan(0);
		expect(wrapper.text()).toContain('Information We Collect');
		expect(wrapper.text()).toContain('How We Use Your Information');
		expect(wrapper.text()).toContain('Data Sharing and Disclosure');
		expect(wrapper.text()).toContain('Cookies and Tracking Technologies');
		expect(wrapper.text()).toContain('Your Rights');
		expect(wrapper.text()).toContain('Contact Us');
	});
});
