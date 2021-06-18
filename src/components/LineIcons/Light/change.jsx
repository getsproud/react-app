import React from 'react';

function Change(props) {
	const title = props.title || "change";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 30.5H32.8v-29c0-.8-.7-1.5-1.5-1.5H1.5C.7 0 0 .7 0 1.5v40.8c0 .8.7 1.5 1.5 1.5h17.7v18.7c0 .8.7 1.5 1.5 1.5h41.8c.8 0 1.5-.7 1.5-1.5V32c0-.8-.7-1.5-1.5-1.5zM61 45l-6.7-5.2c-.5-.4-1.2-.4-1.7-.1l-10.2 6.2-9.4-6.1c-.5-.3-1.1-.3-1.6 0l-9.2 5.4V33.7H61V45zM3 40.8V3h26.8v27.5h-9.1c-.8 0-1.5.7-1.5 1.5v8.8H3zM22.2 61V48.6l9.9-5.8 9.5 6.2c.5.3 1.1.3 1.6 0l10.1-6.1 7.7 6V61H22.2z"/>
		<path d="M40.2 6.5c8.5 0 15.5 6.7 16 15L53 18.6c-.6-.6-1.6-.5-2.1.1-.6.6-.5 1.6.1 2.1l5.3 4.9c.3.3.7.4 1 .4s.7-.1 1-.4l5.2-4.8c.6-.6.6-1.5.1-2.1-.6-.6-1.5-.6-2.1-.1l-2.4 2.2c-.8-9.7-9-17.4-18.9-17.4-.8 0-1.5.7-1.5 1.5s.6 1.5 1.5 1.5z"/>
	</g>
</svg>
	);
};

export default Change;