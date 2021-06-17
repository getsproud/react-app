import React from 'react';

function StatsDown(props) {
	const title = props.title || "stats down";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 61H4.8c-1 0-1.8-.8-1.8-1.8V1.5C3 .7 2.3 0 1.5 0S0 .7 0 1.5v57.7C0 61.8 2.2 64 4.8 64h57.7c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M62.5 30.5c-.8 0-1.5.7-1.5 1.5v10.2l-8.6-7.1c-.3-.2-.6-.3-1-.3H37l-8-10.5c-.3-.4-.7-.6-1.2-.6H14.1c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h13l8 10.5c.3.4.7.6 1.2.6H51l8 6.6H48.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h12.5c1.6 0 2.9-1.3 2.9-2.9V32c0-.8-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default StatsDown;