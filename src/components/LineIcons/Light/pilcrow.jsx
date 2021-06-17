import React from 'react';

function Pilcrow(props) {
	const title = props.title || "pilcrow";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.5 0H26.4c-.1 0-.3 0-.4.1-8.4.6-15 7.8-15 16.6 0 8.4 6.1 15.4 14 16.6v29.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V3h8.2v59.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V3h12.5c.7 0 1.3-.7 1.3-1.5S52.4 0 51.5 0zM14 16.7c0-6.8 4.7-12.4 11-13.5v27c-6.3-1-11-6.7-11-13.5z"/>
	</g>
</svg>
	);
};

export default Pilcrow;