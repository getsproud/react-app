import React from 'react';

function PaintRoller(props) {
	const title = props.title || "paint roller";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 8.3h-1.3V3.5c0-1.9-1.4-3.5-3.2-3.5H17.1c-1.8 0-3.2 1.6-3.2 3.5v4.8H8.7c-1.8 0-3.2 1.4-3.2 3.2v16c0 1.8 1.4 3.2 3.2 3.2h29.9c.1 0 .2.1.2.2V36h-2.7c-1.6 0-2.9 1.4-2.9 3v22c0 1.7 1.3 3 2.9 3h8.4c1.6 0 2.9-1.4 2.9-3V39.1c0-1.7-1.3-3-2.9-3h-2.7V31c0-1.8-1.4-3.2-3.2-3.2H8.7c-.1 0-.2-.1-.2-.2v-16c0-.1.1-.2.2-.2h5.1v4.8c0 1.9 1.4 3.5 3.2 3.5h35.4c1.8 0 3.2-1.6 3.2-3.5v-4.8H57c.8 0 1.5-.7 1.5-1.5s-.7-1.6-1.5-1.6zM44.4 39.1V61h-8.1V39.1h8.1zm8.3-23c0 .3-.2.5-.2.5H17.1s-.2-.2-.2-.5V3.5c0-.3.1-.5.2-.5h35.4s.2.2.2.5v12.6z"/>
	</g>
</svg>
	);
};

export default PaintRoller;