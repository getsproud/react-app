import React from 'react';

function RocketEarth(props) {
	const title = props.title || "rocket earth";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M36.6 36v-.3l8.8-8.9c10.4-10.4 11.4-17.9 11-23.9-.1-.9-.8-1.6-1.6-1.6-6-.4-13.6.7-23.9 11L22 21.2H12c-.5 0-.9.2-1.2.5l-6.2 6.1c-.3.3-.5.8-.5 1.2 0 .5.2.9.5 1.2l6.3 6.3c-.5.3-1 .7-1.5 1.1-2.5 2.5-3.9 11.1-4.1 12.7-.1.5.1 1.1.5 1.5.3.3.8.5 1.2.5h.2c1.8-.1 10.3-1.4 12.8-4 .5-.5.8-1 1.1-1.5l6.3 6.3c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l1.2-1.2c.7-.7.7-1.8 0-2.5s-1.7-.7-2.4-.1L8.3 29.1l4.4-4.4h10c.5 0 .9-.2 1.2-.5l9.4-9.4c8.4-8.4 14.4-10 19.6-10h.1c0 5.1-1.6 11.2-10 19.6l-9.4 9.4c-.3.3-.5.8-.5 1.2v1c0 1 .8 1.8 1.8 1.8s1.7-.8 1.7-1.8zm-19.1 9.9c-.9.9-4.7 2-8.4 2.7.6-3.4 1.7-7.4 2.7-8.4.5-.5 1-.8 1.6-1l5 5c-.1.6-.4 1.2-.9 1.7z"/>
		<path d="M59.9 50.1c0-7-5.7-12.7-12.7-12.7s-12.7 5.7-12.7 12.7 5.7 12.7 12.7 12.7c3.3 0 6.3-1.3 8.5-3.3.1-.1.2-.1.2-.2 2.5-2.4 4-5.6 4-9.2zm-12.6-9.2h.5l-1 2.9c-.4 1.3-1.8 2.1-3.1 1.8l-3.8-.9c1.6-2.3 4.3-3.8 7.4-3.8zm-9.2 9.2c0-.7.1-1.4.3-2.1l4.5 1.1c.5.1 1 .2 1.4.2 2.6 0 5-1.7 5.9-4.2l1-3.2c3.1 1.5 5.3 4.6 5.3 8.3 0 1.8-.5 3.5-1.4 4.9-.8-.9-1.9-1.6-3.1-1.9-2-.5-4.1.1-5.7 1.5L42.6 58c-2.7-1.6-4.5-4.6-4.5-7.9zm8.3 9.1l2.2-2c.7-.6 1.6-.9 2.4-.6.6.2 1.1.5 1.5 1-1.5 1.1-3.3 1.7-5.3 1.7-.2 0-.5-.1-.8-.1z"/>
	</g>
</svg>
	);
};

export default RocketEarth;