import React from 'react';

function BarChart(props) {
	const title = props.title || "bar chart";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 58.2h-6.8V33.9c0-1.9-1.5-3.4-3.4-3.4H42.2c-1.9 0-3.4 1.5-3.4 3.4v24.3h-8.1V22.7c0-1.8-1.5-3.3-3.4-3.3h-10c-1.9 0-3.4 1.5-3.4 3.3v35.5H3v-54c0-.8-.7-1.5-1.5-1.5S0 3.4 0 4.3v54.8c0 1.2 1 2.1 2.1 2.1H62.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5zm-34.8 0H16.9V22.7c0-.1.2-.3.4-.3h10.1c.2 0 .4.2.4.3v35.5zm25 0H41.8V33.9c0-.2.2-.4.4-.4h10.1c.2 0 .4.2.4.4v24.3z"/>
	</g>
</svg>
	);
};

export default BarChart;