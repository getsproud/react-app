import React from 'react';

function Headphone(props) {
	const title = props.title || "headphone";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54.8 17.4C48.6 11.3 40.3 8 31.4 8.2 14.1 8.5 0 22.5 0 39.6v12.8c0 1.9 1.6 3.5 3.5 3.5h7.1c1.9 0 3.5-1.6 3.5-3.5v-9.9c0-1.9-1.6-3.5-3.5-3.5H3c.3-15.1 13-27.5 28.4-27.7 8-.1 15.6 2.8 21.2 8.4 5.4 5.1 8.4 12 8.4 19.2-.2 0-.3-.1-.5-.1h-7.1c-1.9 0-3.5 1.6-3.5 3.5v9.9c0 1.9 1.6 3.5 3.5 3.5h7.1c1.9 0 3.5-1.6 3.5-3.5V39c0-8.1-3.3-15.8-9.2-21.6zM3.5 41.9h7.1c.3 0 .5.2.5.5v9.9c0 .3-.2.5-.5.5H3.5c-.3 0-.5-.2-.5-.5v-9.9c0-.3.2-.5.5-.5zM61 52.3c0 .3-.2.5-.5.5h-7.1c-.3 0-.5-.2-.5-.5v-9.9c0-.3.2-.5.5-.5h7.1c.3 0 .5.2.5.5v9.9z"/>
	</g>
</svg>
	);
};

export default Headphone;