// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Programming Tricks",
	tagline: "Helping developers be more efficient",
	url: "https://your-docusaurus-test-site.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "darklight9811", // Usually your GitHub org/user name.
	projectName: "tricks", // Usually your repo name.

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: "/",
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl: "https://github.com/darklight9811/protricks",
				},
				blog: false,
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				defaultMode: "dark",
			},
			navbar: {
				title: "My Site",
				logo: {
					alt: "My Site Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Tutorial",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Javascript",
								to: "/",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Programming Tricks. Built with Docusaurus.`,
			},
			prism: {
				theme: darkCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
}

module.exports = config
