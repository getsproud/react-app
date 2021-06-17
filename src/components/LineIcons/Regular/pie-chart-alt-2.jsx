import React from 'react';

function PieChartAlt2(props) {
	const title = props.title || "pie chart alt 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M38.8 1.3c-1 0-1.8.7-1.8 1.7v20.7c0 1 .8 1.8 1.8 1.8H61c.5 0 .9-.2 1.3-.6.3-.4.5-.8.5-1.3-.9-12.5-11.4-22.3-24-22.3zm1.7 20.6V4.8c9.3.8 17 7.9 18.5 17.1H40.5z"/>
		<path d="M55.5 31.4H31.9V8.6c0-.9-.8-1.7-1.7-1.7h-.9c-15.5 0-28 12.5-28 28 0 15.4 12.6 28 28 28 15.5 0 28-12.5 28-28 0-.6 0-1.2-.1-1.7 0-1.1-.7-1.8-1.7-1.8zM29.3 59.3c-13.5 0-24.5-11-24.5-24.5 0-13.2 10.5-24 23.6-24.4v22.8c0 1 .8 1.8 1.8 1.8h23.7c-.1 13.3-11.1 24.3-24.6 24.3z"/>
	</g>
</svg>
	);
};

export default PieChartAlt2;