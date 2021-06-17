import React from 'react';

function PieChart(props) {
	const title = props.title || "pie chart";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M37.7.5C20.4-2.6 3.8 8.9.6 26.2c-3.2 17.4 8.3 34.1 25.7 37.2 1.9.4 3.8.5 5.7.5 15.1 0 28.6-10.9 31.4-26.3C66.5 20.4 55 3.7 37.7.5zm22.8 36.7c-.2 1.2-.5 2.4-.9 3.6L33.5 31V3c1.2.1 2.4.2 3.7.4 15.6 2.9 26.1 18.1 23.3 33.8zM30.5 3v27.4H3.1c.1-1.2.2-2.5.4-3.7C6 13.3 17.4 3.7 30.5 3zm-3.7 57.5c-13.4-2.5-23-13.9-23.7-27h28.6l26.8 10.1c-5.2 12-18.2 19.4-31.7 16.9z"/>
	</g>
</svg>
	);
};

export default PieChart;