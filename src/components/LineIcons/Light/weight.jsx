import React from 'react';

function Weight(props) {
	const title = props.title || "weight";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.7 0H6.3c-2 0-3.5 1.6-3.5 3.5v57c0 1.9 1.6 3.5 3.5 3.5h51.5c1.9 0 3.5-1.6 3.5-3.5v-57C61.2 1.6 59.7 0 57.7 0zm.5 60.5c0 .3-.2.5-.5.5H6.3c-.3 0-.5-.2-.5-.5v-57c0-.3.2-.5.5-.5h51.5c.3 0 .5.2.5.5v57z"/>
		<path d="M31.9 13.3c-7.8 0-14.4 6.5-15.4 15.1-.1.6.1 1.2.5 1.7.4.4.9.7 1.5.7h26.8c.6 0 1.1-.2 1.5-.7.4-.4.6-1.1.5-1.7-1-8.6-7.6-15.1-15.4-15.1zm1.2 14.4l-1.4-4.2c-.3-.8-1.1-1.2-1.9-.9-.8.3-1.2 1.1-.9 1.9l1.1 3.3H19.6c1.2-6.6 6.3-11.4 12.3-11.4 6 0 11.1 4.8 12.3 11.4H33.1z"/>
	</g>
</svg>
	);
};

export default Weight;