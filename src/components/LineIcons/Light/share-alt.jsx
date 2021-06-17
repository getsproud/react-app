import React from 'react';

function ShareAlt(props) {
	const title = props.title || "share alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M1.5 12.6l9.1 6.8c.3.2.6.3.9.3.5 0 .9-.2 1.2-.6.5-.7.4-1.6-.3-2.1l-7.5-5.6h16.4c6.6 0 12.1 5.4 12.1 12.1v16.9c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-17c0-8.3-6.8-15.1-15.1-15.1H4.7l7.7-5.6c.7-.5.8-1.4.3-2.1s-1.4-.8-2.1-.3l-9 6.6C.6 7.6 0 8.7 0 9.7c0 1.1.5 2.1 1.5 2.9z"/>
		<path d="M62.5 38.8c-.8 0-1.5.7-1.5 1.5v18.8c0 1-.8 1.9-1.9 1.9H4.9c-1 0-1.9-.8-1.9-1.9V40.3c0-.8-.7-1.5-1.5-1.5S0 39.5 0 40.3v18.8C0 61.8 2.2 64 4.9 64h54.2c2.7 0 4.9-2.2 4.9-4.9V40.3c0-.8-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default ShareAlt;