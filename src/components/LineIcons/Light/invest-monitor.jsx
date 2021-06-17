import React from 'react';

function InvestMonitor(props) {
	const title = props.title || "invest monitor";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M11.4 38.8H2.7c-1.5 0-2.7 1.3-2.7 2.9V61c0 1.7 1.2 3 2.6 3h8.8c1.5 0 2.7-1.3 2.7-2.9V41.8c0-1.7-1.2-3-2.7-3zM11.1 61H3V41.8h8.1V61z"/>
		<path d="M36.4 33.3h-8.8c-1.5 0-2.7 1.3-2.7 2.8v25.1c0 1.5 1.2 2.8 2.6 2.8h8.8c1.5 0 2.7-1.3 2.7-2.8V36.1c0-1.6-1.1-2.8-2.6-2.8zM36 61h-8V36.3h8V61z"/>
		<path d="M61.3 41.6h-8.8c-1.5 0-2.6 1.3-2.6 2.9V61c0 1.6 1.2 2.9 2.6 2.9h8.8c1.5 0 2.7-1.3 2.7-2.9V44.5c0-1.6-1.2-2.9-2.7-2.9zM61 61h-8.1V44.6H61V61z"/>
		<path d="M33.5 2.9V1.5C33.5.7 32.8 0 32 0s-1.5.7-1.5 1.5v1.4c-1.7.3-3.2 1.3-4.1 2.7-.8 1.2-1.1 2.6-.8 3.9.4 1.7 1.6 3.3 3.8 4.7.6.4 1.2.7 1.8 1.1 1 .6 1.9 1.1 2.6 1.7.6.5 2 1.9 1.4 3.4-.5 1.1-1.8 1.9-3.3 1.9-1.7 0-3.4-.7-4.3-1.9-.5-.7-1.4-.8-2.1-.3-.7.5-.8 1.4-.3 2.1 1.2 1.6 3.1 2.7 5.2 3v1.4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V25c2-.5 3.7-1.8 4.4-3.5 1-2.3.2-4.9-2.2-6.9-.9-.8-2-1.4-3-2-.5-.3-1.1-.6-1.6-1-1.5-1-2.4-1.9-2.6-2.8-.1-.5 0-1 .4-1.6.5-.7 1.3-1.3 2.3-1.4 2-.3 4.2.6 5.2 2 .5.7 1.4.9 2.1.4.7-.5.9-1.4.4-2.1-1.1-1.6-3.1-2.8-5.3-3.2z"/>
	</g>
</svg>
	);
};

export default InvestMonitor;