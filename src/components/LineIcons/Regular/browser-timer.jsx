import React from 'react';

function BrowserTimer(props) {
	const title = props.title || "browser timer";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M31.2 24c-7.6 0-13.7 6.2-13.7 13.7s6.2 13.7 13.7 13.7c7.6 0 13.7-6.2 13.7-13.7S38.7 24 31.2 24zm0 23.9c-5.6 0-10.2-4.6-10.2-10.2s4.6-10.2 10.2-10.2 10.2 4.6 10.2 10.2-4.6 10.2-10.2 10.2z"/>
		<path d="M32.3 38.2v-3.5c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v4.2c0 .5.2.9.5 1.2l2.5 2.5c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.7.7-1.8 0-2.5l-1.8-1.9z"/>
		<path d="M58 3.2H6C3.4 3.2 1.3 5.4 1.3 8v48c0 2.6 2.1 4.8 4.8 4.8h52c2.6 0 4.8-2.1 4.8-4.8V8c-.1-2.6-2.3-4.8-4.9-4.8zM6 6.7h52c.7 0 1.3.6 1.3 1.3v8.2H4.8V8c0-.7.5-1.3 1.2-1.3zm52 50.6H6c-.7 0-1.3-.6-1.3-1.3V19.7h54.5V56c.1.7-.5 1.3-1.2 1.3z"/>
	</g>
</svg>
	);
};

export default BrowserTimer;