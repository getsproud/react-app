import React from 'react';

function Wifi(props) {
	const title = props.title || "wifi";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.2 12.5c-15.4-15.3-40.7-15-56.4.7-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5s1-.2 1.3-.6C20.7 1.3 43.7 1 57.7 15c.7.7 1.8.7 2.5 0 .6-.7.6-1.8 0-2.5z"/>
		<path d="M11.7 27.8c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5s.9-.2 1.2-.5c9.8-9.8 25.7-10 35.4-.3.7.7 1.8.7 2.5 0s.7-1.8 0-2.5c-11-11-29.1-10.9-40.3.3z"/>
		<path d="M19.8 42.7c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5s.9-.2 1.2-.5c5.3-5.2 13.8-5.3 19-.1.7.7 1.8.7 2.5 0s.7-1.8 0-2.5c-6.6-6.5-17.3-6.5-23.9.1z"/>
		<path d="M32.1 51.1c-1.6 0-3 .6-4.1 1.7-2.3 2.3-2.3 6 0 8.2 1.1 1.1 2.6 1.7 4.1 1.7 1.6 0 3-.6 4.1-1.7 2.3-2.3 2.3-6 0-8.2-1.1-1.1-2.6-1.7-4.1-1.7zm1.6 7.5c-.4.4-1 .7-1.6.7-.6 0-1.2-.2-1.6-.7-.9-.9-.9-2.4 0-3.3.4-.4 1-.7 1.6-.7.6 0 1.2.2 1.6.7.9.9.9 2.4 0 3.3z"/>
	</g>
</svg>
	);
};

export default Wifi;