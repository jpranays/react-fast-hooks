import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	title: "React-Fast-Hooks",
	tagline: "Fasten Your React Development",
	favicon: "img/favicon.ico",

	url: "https://react-fast-hooks.netlify.app/",
	baseUrl: "/",

	organizationName: "jpranays",
	projectName: "react-fast-hooks",

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},
	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		colorMode: {
			defaultMode: "dark", // Set the default mode to dark
			disableSwitch: false, // Allow users to switch themes
			respectPrefersColorScheme: true, // Respect the OS preference
		},
		algolia: {
			appId: "X8HNC6MYE7",

			apiKey: "28d17ffd008cca396c6102d9dd59c721",

			indexName: "react-fast-hooks",

			// Optional:
			contextualSearch: false,

			replaceSearchResultPathname: {
				from: "/docs/", // or as RegExp: /\/docs\//
				to: "/",
			},
		},
		navbar: {
			title: "react-fast-hooks",
			items: [
				{
					type: "docSidebar",
					sidebarId: "docsSidebar",
					position: "left",
					label: "docs",
				},
				{
					href: "https://github.com/jpranays/react-fast-hooks",
					label: "GitHub",
					position: "right",
				},
			],
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
