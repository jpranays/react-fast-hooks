import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
	title: string;
	description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
	{
		title: "Lightweight and Fast",
		description: (
			<>
				Designed to be minimal in size, ensuring your application remains
				performant and fast.
			</>
		),
	},
	{
		title: "SSR-Friendly",
		description: (
			<>
				Built with Server-Side Rendering (SSR) compatibility, making it perfect for Next.js.
			</>
		),
	},
	{
		title: "Typed with TypeScript",
		description: (
			<>
				Full TypeScript support, including comprehensive type definitions.</>
		),
  },
  {
		title: "Tree Shaking Support",
		description: (
			<>
				Optimized for tree shaking, ensuring only the code you use is included in your final bundle.</>
		),
	},
	{
		title: "Cross-Browser Compatibility",
		description: (
			<>
				Ensures consistent behavior across all major browsers.</>
		),
	},
	{
		title: "Ease of Use",
		description: (
			<>
				Designed with simplicity and ease of integration in mind.</>
		),
	},
];

function Feature({ title,description }: FeatureItem) {
	return (
		<div className={clsx("col col--4")} style={{padding:15}}>
			<div className="text--center padding-horiz--md">
        <Heading as="h3" style={{
          color: "var(--ifm-color-primary)",
          fontWeight: "normal",
          fontSize: "1.2rem",
        }}>{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
