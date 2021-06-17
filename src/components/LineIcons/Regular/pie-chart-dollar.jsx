import React from 'react';

function PieChartDollar(props) {
	const title = props.title || "pie chart dollar";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62 31c-.1-.9-.8-1.6-1.7-1.6H34.6V4.8c0-.9-.8-1.7-1.7-1.7H32C15.4 3 1.9 16.4 1.9 32.9S15.4 62.8 32 62.8s30.1-13.4 30.1-29.9c0-.6 0-1.3-.1-1.9zM31.1 6.5v23.7L10.2 48c-3-4.3-4.8-9.5-4.8-15.1C5.4 18.6 16.9 7 31.1 6.5zm27.5 26.4c0 14.5-11.9 26.4-26.6 26.4-7.7 0-14.7-3.3-19.6-8.5l21-17.8 25.2-.1z"/>
		<path d="M53.4 19.2h-6.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4.6v1.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-1.6c2.4-.6 4.3-2.7 4.3-5.3 0-3-2.5-5.4-5.5-5.4h-3.2c-1.1 0-2-.9-2-1.9s.9-1.9 2-1.9h6.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-2.5V3c0-1-.8-1.8-1.8-1.8S51.1 2 51.1 3v1.4h-.9c-3 0-5.5 2.4-5.5 5.4s2.5 5.4 5.5 5.4h3.2c1.1 0 2 .9 2 1.9s-.9 2.1-2 2.1z"/>
	</g>
</svg>
	);
};

export default PieChartDollar;