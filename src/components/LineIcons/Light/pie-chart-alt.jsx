import React from 'react';

function PieChartAlt(props) {
	const title = props.title || "pie chart alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M39.1 0c-.8 0-1.5.7-1.5 1.5v21.8c0 .8.7 1.5 1.5 1.5h23.4c.4 0 .8-.2 1.1-.5.3-.3.4-.7.4-1.1C63.1 10.2 52.2 0 39.1 0zm1.5 21.8V3.1c10.3.7 18.8 8.6 20.2 18.7H40.6z"/>
		<path d="M56.8 31.7H31.5V7.4c0-.8-.7-1.5-1.5-1.5h-.9c-16 0-29.1 13-29.1 29S13.1 64 29.2 64s29.2-13 29.2-29.1c0-.6 0-1.2-.1-1.8-.1-.8-.8-1.4-1.5-1.4zM29.2 61C14.7 61 3 49.3 3 34.9c0-14.1 11.4-25.7 25.5-26v24.3c0 .8.7 1.5 1.5 1.5h25.3v.2C55.3 49.3 43.6 61 29.2 61z"/>
	</g>
</svg>
	);
};

export default PieChartAlt;