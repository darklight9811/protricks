// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Programming Tricks",
	tagline: "Helping developers be more efficient",
	url: "https://protricks.vercel.app/",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "darklight9811", // Usually your GitHub org/user name.
	projectName: "protricks", // Usually your repo name.

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					path: "docs/js",
					routeBasePath: "/",
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl: "https://github.com/darklight9811/protricks",
				},
				blog: false,
			}),
		],
	],

	plugins: [
		[
			"@docusaurus/plugin-content-docs",
			{
				id: "docs-ts",
				path: "docs/ts",
				routeBasePath: "/ts",
				sidebarPath: require.resolve("./sidebars.js"),
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				defaultMode: "dark",
			},
			navbar: {
				title: "Protricks",
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Javascript",
					},
					{
						type: "doc",
						docId: "intro",
						docsPluginId: "docs-ts",
						position: "left",
						label: "Typescript",
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
							{
								label: "Typescript",
								to: "/ts",
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
