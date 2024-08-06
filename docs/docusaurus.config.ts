import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	title: "React-Fast-Hooks",
	tagline: "Fasten Your React Development",
	favicon: "img/favicon.ico",
	// ----

	url: "https://jpranays.github.io",
	baseUrl: "/react-fast-hooks/", // Update this if your repo name is different
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	organizationName: "jpranays", // Your GitHub username or organization name
	projectName: "react-fast-hooks", // Your repo name
	// ----

	// url: "https://react-fast-hooks.netlify.app/",
	// baseUrl: "/",

	// organizationName: "jpranays",
	// projectName: "react-fast-hooks",

	// onBrokenLinks: "throw",
	// onBrokenMarkdownLinks: "warn",

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
		algolia: {
			apiKey: "3012a81621acdbbb5fc663277d5d013e",
			appId: "1F8174QBLL",
			indexName: "jpranaysio",
			contextualSearch: true,
		},
		colorMode: {
			defaultMode: "dark",
			disableSwitch: false,
			respectPrefersColorScheme: true,
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
					"aria-label": "GitHub",
					className: "navbar__icon navbar__github",
					position: "right",
					html: '<i class="fa fa-github"></i>',
				},
			],
		},
		prism: {
			theme: prismThemes.nightOwlLight,
			darkTheme: prismThemes.vsDark,
		},
	} satisfies Preset.ThemeConfig,
	themes: ["@docusaurus/theme-live-codeblock"],
};

export default config;
