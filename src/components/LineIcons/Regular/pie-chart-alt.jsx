import React from 'react';

function PieChartAlt(props) {
	const title = props.title || "pie chart alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M39.3 6.2c-1.1-.2-2.2-.4-3.3-.4V3c0-1-.8-1.7-1.7-1.8h-.1c-15.9 0-29.4 11.4-32.3 27-.4 1.9-.5 3.9-.5 5.9 0 1 .8 1.8 1.8 1.8H6c.8 13 10.3 24 23.3 26.3 1.7.3 3.4.5 5.1.5 5.7 0 11.3-1.7 16.2-5.1 6.3-4.3 10.5-10.9 11.8-18.4C65 23.9 54.7 9 39.3 6.2zm-34 22.7C7.7 15.5 19 5.6 32.5 4.8v27.7H4.9c0-1.2.2-2.4.4-3.6zm53.5 9.8c-1.2 6.6-4.9 12.3-10.4 16.1-5.5 3.8-12.1 5.3-18.7 4.1C18.4 56.8 10.1 47.3 9.3 36h24.9c1 0 1.8-.8 1.8-1.8V9.3l2.7.3c13.5 2.5 22.5 15.5 20.1 29.1z"/>
	</g>
</svg>
	);
};

export default PieChartAlt;