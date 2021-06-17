import React from 'react';

function Billboard(props) {
	const title = props.title || "billboard";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.5 4.7H20.1c-.8 0-1.5.7-1.5 1.5v7.3H5v-12C5 .7 4.3 0 3.5 0S2 .7 2 1.5v61c0 .8.7 1.5 1.5 1.5S5 63.3 5 62.5V50.6h13.6v7.3c0 .8.7 1.5 1.5 1.5h40.4c.8 0 1.5-.7 1.5-1.5V6.2c0-.9-.7-1.5-1.5-1.5zM5 47.6V16.4h13.6v31.1H5zm54 8.7H21.6V7.7H59v48.6z"/>
		<path d="M32.9 29.4c.7.4 1.6.1 2-.7l1.9-3.8H45l1.8 3.8c.3.5.8.8 1.3.8.2 0 .4 0 .7-.2.7-.4 1.1-1.3.7-2l-7.3-15c-.3-.5-.8-.8-1.3-.8s-1.1.3-1.3.8l-7.3 15c-.5.8-.2 1.7.6 2.1zm8-12.9l2.7 5.5h-5.3l2.6-5.5z"/>
		<path d="M38.4 33.9h-2.5c-.8 0-1.5.7-1.5 1.5v15.4c0 .8.7 1.5 1.5 1.5h2.5c4.9 0 8.9-4 8.9-8.9v-.5c0-5-4-9-8.9-9zm5.9 9.4c0 3.3-2.7 5.9-5.9 5.9h-1V36.9h1c3.3 0 5.9 2.7 5.9 5.9v.5z"/>
	</g>
</svg>
	);
};

export default Billboard;