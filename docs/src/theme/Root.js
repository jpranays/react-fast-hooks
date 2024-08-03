import React, { useEffect } from "react";
import { useLocation } from "@docusaurus/router";
const scrollSidebarIntoView = () => {
	const activeLink = document.querySelectorAll(".menu__link--active");
	if (activeLink && activeLink.length > 1) {
		activeLink[1].scrollIntoView({ behavior: "smooth", block: "nearest" });
	}
};

function Root({ children }) {
	const location = useLocation();
	useEffect(() => {
		scrollSidebarIntoView();
	}, [location.pathname]);

	return <>{children}</>;
}

export default Root;
