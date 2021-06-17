import React from 'react';

function SaveAlt(props) {
	const title = props.title || "save alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.6 1.3h-41c-.7 0-1.4.2-2 .7L4.2 11.5c-.6.6-.9 1.4-.9 2.3V58c0 2.7 2.2 4.8 4.8 4.8H56c2.7 0 4.8-2.2 4.8-4.8V4.3c0-1.7-1.4-3-3.2-3zM22.9 4.8h23.5v9H22.9v-9zm34.4 53.1c0 .7-.6 1.3-1.3 1.3H8c-.7 0-1.3-.6-1.3-1.3v-44l9.9-9.1h2.8v10.7c0 1 .8 1.8 1.8 1.8h27c1 0 1.8-.8 1.8-1.8V4.8h7.3v53.1z"/>
		<path d="M33.4 22.8c-7.7 0-13.9 6.2-13.9 13.9s6.2 13.9 13.9 13.9 13.9-6.2 13.9-13.9S41 22.8 33.4 22.8zm0 24.3c-5.7 0-10.4-4.7-10.4-10.4s4.7-10.4 10.4-10.4S43.8 31 43.8 36.7s-4.7 10.4-10.4 10.4z"/>
	</g>
</svg>
	);
};

export default SaveAlt;