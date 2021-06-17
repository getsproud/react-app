import React from 'react';

function StatsUp(props) {
	const title = props.title || "stats up";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 61H4.8c-1 0-1.8-.8-1.8-1.8V1.5C3 .7 2.3 0 1.5 0S0 .7 0 1.5v57.7C0 61.8 2.2 64 4.8 64h57.7c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M61.1 22.2H48.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h10.3l-8.3 6.9H36c-.5 0-.9.2-1.2.6l-8 10.5h-13c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h13.7c.5 0 .9-.2 1.2-.6l8-10.5h14.5c.4 0 .7-.1 1-.3l8.8-7.3.1-.1v10.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V25c-.1-1.5-1.4-2.8-3-2.8zm-.1 3z"/>
	</g>
</svg>
	);
};

export default StatsUp;