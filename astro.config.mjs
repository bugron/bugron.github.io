import { defineConfig } from 'astro/config';
import starlightBlog from 'starlight-blog'
import starlight from '@astrojs/starlight';
import partytown from '@astrojs/partytown';
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";

const site = 'https://melikyan.dev/';

export default defineConfig({
	site,
	integrations: [
		starlightBlog({
			authors: {
			  bugron: { name: 'Arsen Melikyan', title: 'Staff Software Engineer @ ServiceTitan', picture: '/arsen-avatar.jpg', url: 'https://melikyan.dev' },
			},
		}),
		starlight({
			lastUpdated: true,
			title: 'Arsen Melikyan',
			favicon: '/favicon.ico',
			logo: {
				dark: '/public/logo-dark.png',
				light: '/public/logo-light.png',
				alt: 'Arsen Melikyan\'s personal blog logo',
				replacesTitle: true,
			},
			editLink: {
				baseUrl: 'https://github.com/bugron/bugron.github.io/edit/astro/',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			components: {
				MarkdownContent: 'starlight-blog/overrides/MarkdownContent.astro',
				Sidebar: 'starlight-blog/overrides/Sidebar.astro',
				ThemeSelect: 'starlight-blog/overrides/ThemeSelect.astro',
				TableOfContents: './src/components/TableOfContents.astro',
				Header: './src/components/Header.astro',
				Head: './src/components/Head.astro',
			},
			social: {
				github: 'https://github.com/bugron',
				linkedin: 'https://www.linkedin.com/in/arsen-melikyan/',
				'x.com': 'https://twitter.com/bugron1',
				youtube: 'https://www.youtube.com/@bugron',
			},
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://www.googletagmanager.com/gtag/js?id=G-EWP344X6RY',
						type: "text/partytown",
						async: true,
					},
				},
				{
					tag: 'script',
					type: "text/partytown",
					content: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-EWP344X6RY');
					`
				},
			],
		}),
        compress(),
        robotsTxt(),
		partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		}),
	],
});
