import React from 'react';

function Select(props) {
	const title = props.title || "select";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.9 54.5l7.4-4.3-21.1-7.9c-.4-.2-.9.3-.7.7l8 21 4.3-7.4 4.4 4.4c.3.3.7.4 1.1.4s.8-.1 1.1-.4c.6-.6.6-1.5 0-2.1l-4.5-4.4z"/>
		<path d="M36.8 47.6h4v3h-4z"/>
		<path d="M20.4 47.6h8.2v3h-8.2z"/>
		<path d="M8.2 47.6h4v3h-4z"/>
		<path d="M3.7 46.1h-3v3c0 .8.7 1.5 1.5 1.5h3v-3H3.7v-1.5z"/>
		<path d="M.7 36.1h3v4h-3z"/>
		<path d="M.7 19.7h3v8.2h-3z"/>
		<path d="M.7 7.5h3v4h-3z"/>
		<path d="M.7 1.5v3h3V3h1.5V0h-3C1.4 0 .7.7.7 1.5z"/>
		<path d="M11.1 0h4v3h-4z"/>
		<path d="M23.4 0h8.2v3h-8.2z"/>
		<path d="M39.8 0h4v3h-4z"/>
		<path d="M48.3 4.5h3v-3c0-.8-.7-1.5-1.5-1.5h-3v3h1.5v1.5z"/>
		<path d="M48.3 10.4h3v4h-3z"/>
		<path d="M48.3 22.7h3v8.2h-3z"/>
		<path d="M48.3 39.1h3v4h-3z"/>
	</g>
</svg>
	);
};

export default Select;