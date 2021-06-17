import React from 'react';

function LaptopReportMedical(props) {
	const title = props.title || "laptop report medical";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 49.3h-2.6V21.1c0-3-2.4-5.6-5.4-5.7-1-.1-1.8.7-1.8 1.6-.1 1 .7 1.8 1.6 1.8 1.2.1 2.1 1 2.1 2.2v28.2H9.1V21.1c0-1.2 1-2.2 2.3-2.2 1 0 1.7-.8 1.7-1.8s-.8-1.8-1.8-1.8c-3.2 0-5.7 2.6-5.7 5.7v28.2H3c-1 0-1.8.8-1.8 1.8S2 52.8 3 52.8h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
		<path d="M26.4 29h3.8v3.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V29h3.8c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-3.8v-3.8c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v3.8h-3.8c-1 0-1.8.8-1.8 1.8s.9 1.8 1.8 1.8z"/>
		<path d="M32 43.3c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm0-28.6c6.9 0 12.5 5.6 12.5 12.5S38.9 39.8 32 39.8s-12.5-5.6-12.5-12.5S25.1 14.7 32 14.7z"/>
	</g>
</svg>
	);
};

export default LaptopReportMedical;