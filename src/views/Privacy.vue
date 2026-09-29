<script setup lang="ts">
import { profile } from '@/config';
</script>

<template>
	<div class="privacy container">
		<div class="content">
			<h1 class="title">Privacy Policy</h1>
			<p class="subtitle">Last Updated: {{ new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}</p>

			<section class="section">
				<h2>Introduction</h2>
				<p>
					Welcome to {{ profile.name }}'s personal website. This Privacy Policy
					explains how we collect, use, and protect your information when you visit
					our website.
				</p>
			</section>

			<section class="section">
				<h2>Information We Collect</h2>
				<h3>Information You Provide</h3>
				<p>
					When you contact us through the contact form, we collect:
				</p>
				<ul>
					<li>Name</li>
					<li>Email address</li>
					<li>Message content</li>
				</ul>

				<h3>Automatically Collected Information</h3>
				<p>
					We may automatically collect certain information about your device and
					how you interact with our website, including:
				</p>
				<ul>
					<li>Browser type and version</li>
					<li>Device information</li>
					<li>IP address</li>
					<li>Pages visited and time spent on pages</li>
					<li>Referring website</li>
				</ul>
			</section>

			<section class="section">
				<h2>How We Use Your Information</h2>
				<p>We use the collected information for the following purposes:</p>
				<ul>
					<li>To respond to your inquiries and communicate with you</li>
					<li>To improve our website and user experience</li>
					<li>To analyze website traffic and usage patterns</li>
					<li>To maintain the security and integrity of our website</li>
				</ul>
			</section>

			<section class="section">
				<h2>Data Sharing and Disclosure</h2>
				<p>
					We do not sell, trade, or rent your personal information to third
					parties. We may share your information only in the following
					circumstances:
				</p>
				<ul>
					<li>With your explicit consent</li>
					<li>To comply with legal obligations</li>
					<li>To protect our rights, privacy, safety, or property</li>
					<li>With service providers who assist in operating our website (e.g., hosting services, analytics providers)</li>
				</ul>
			</section>

			<section class="section">
				<h2>Cookies and Tracking Technologies</h2>
				<p>
					We use cookies and similar tracking technologies to enhance your
					browsing experience. Cookies are small data files stored on your device.
					You can control cookies through your browser settings.
				</p>
				<p>We use analytics services (such as Vercel Analytics) to understand how visitors use our website.</p>
			</section>

			<section class="section">
				<h2>Third-Party Links</h2>
				<p>
					Our website may contain links to third-party websites or services,
					including social media platforms (LinkedIn, Meta/Facebook, X/Twitter,
					TikTok, YouTube). We are not responsible for the privacy practices of
					these third parties. We encourage you to review their privacy policies.
				</p>
			</section>

			<section class="section">
				<h2>Data Security</h2>
				<p>
					We implement appropriate technical and organizational measures to
					protect your personal information from unauthorized access, disclosure,
					alteration, or destruction. However, no method of transmission over the
					Internet is 100% secure.
				</p>
			</section>

			<section class="section">
				<h2>Your Rights</h2>
				<p>Depending on your location, you may have the following rights:</p>
				<ul>
					<li>Access to your personal information</li>
					<li>Correction of inaccurate information</li>
					<li>Deletion of your personal information</li>
					<li>Objection to processing of your information</li>
					<li>Data portability</li>
					<li>Withdrawal of consent</li>
				</ul>
				<p>
					To exercise these rights, please contact us using the information
					provided below.
				</p>
			</section>

			<section class="section">
				<h2>Children's Privacy</h2>
				<p>
					Our website is not intended for children under the age of 13. We do not
					knowingly collect personal information from children under 13. If you
					believe we have collected information from a child under 13, please
					contact us immediately.
				</p>
			</section>

			<section class="section">
				<h2>Changes to This Privacy Policy</h2>
				<p>
					We may update this Privacy Policy from time to time. We will notify you
					of any changes by posting the new Privacy Policy on this page and
					updating the "Last Updated" date.
				</p>
			</section>

			<section class="section">
				<h2>Contact Us</h2>
				<p>
					If you have any questions about this Privacy Policy or our privacy
					practices, please contact us at:
				</p>
				<p class="contact-info">
					Email: <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
				</p>
			</section>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.privacy {
	max-width: 900px;
	margin: 0 auto;
	padding: 2rem 1rem;

	.content {
		color: var(--text-color-grey);

		.title {
			font-size: 3rem;
			font-weight: 700;
			color: var(--text-color);
			margin-bottom: 0.5rem;

			@media screen and (max-width: 768px) {
				font-size: 2rem;
			}
		}

		.subtitle {
			font-size: 1rem;
			color: var(--text-color-grey);
			margin-bottom: 2rem;
		}

		.section {
			margin-bottom: 2rem;

			h2 {
				font-size: 1.75rem;
				font-weight: 600;
				color: var(--text-color);
				margin-bottom: 1rem;
				margin-top: 1.5rem;

				@media screen and (max-width: 768px) {
					font-size: 1.5rem;
				}
			}

			h3 {
				font-size: 1.25rem;
				font-weight: 500;
				color: var(--text-color);
				margin-top: 1rem;
				margin-bottom: 0.5rem;
			}

			p {
				line-height: 1.8;
				margin-bottom: 1rem;
				font-size: 1rem;
			}

			ul {
				margin-left: 2rem;
				margin-bottom: 1rem;

				li {
					line-height: 1.8;
					margin-bottom: 0.5rem;
					list-style-type: disc;
				}
			}

			.contact-info {
				font-weight: 500;

				a {
					color: var(--text-highlight);
					text-decoration: none;

					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}
}
</style>
