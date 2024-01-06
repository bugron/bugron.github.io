import { defineConfig } from 'astro/config';
import starlightBlog from 'starlight-blog'
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://bugron.github.io',
	integrations: [
		starlightBlog({
			authors: {
			  bugron: { name: 'Arsen Melikyan', title: 'Staff Software Engineer @ ServiceTitan', picture: 'https://avatars.githubusercontent.com/u/13225220?v=4', url: 'https://melikyan.dev' },
			},
		}),
		starlight({
			title: 'Arsen Melikyan',
			customCss: [
				'./src/styles/custom.css',
			],
			components: {
				MarkdownContent: 'starlight-blog/overrides/MarkdownContent.astro',
				Sidebar: 'starlight-blog/overrides/Sidebar.astro',
				ThemeSelect: 'starlight-blog/overrides/ThemeSelect.astro',
				TableOfContents: './src/components/TableOfContents.astro'
			},
			social: {
				github: 'https://github.com/bugron',
				linkedin: 'https://www.linkedin.com/in/arsen-melikyan/',
				'x.com': 'https://twitter.com/bugron1',
				youtube: 'https://www.youtube.com/@bugron',
			},
		}),
	],
});
