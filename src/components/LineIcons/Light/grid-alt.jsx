import React from 'react';

function GridAlt(props) {
	const title = props.title || "grid alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M20.2 0H2.3C1 0 0 1 0 2.3v17.8c0 1.3 1 2.3 2.3 2.3h17.9c1.3 0 2.2-1.1 2.2-2.2v-18c0-1.2-1-2.2-2.2-2.2zm-.8 19.4H3V3h16.4v16.4z"/>
		<path d="M20.2 41.6h-18c-1.2 0-2.2 1-2.2 2.2v18C0 63 1 64 2.2 64h17.9c1.1 0 2.1-.8 2.3-1.9V43.8c0-1.2-1-2.2-2.2-2.2zM19.4 61H3V44.6h16.4V61z"/>
		<path d="M61.8 41.6h-18c-1.2 0-2.2 1-2.2 2.2v18c0 1.2 1 2.2 2.2 2.2h18.1c1.1 0 2-1 2.2-1.9V43.8c-.1-1.2-1.1-2.2-2.3-2.2zM61 61H44.6V44.6H61V61z"/>
		<path d="M61.8 0H43.9c-1.3 0-2.3 1-2.3 2.3v17.8c0 1.3 1 2.3 2.3 2.3h17.9c1.3 0 2.2-1.1 2.2-2.2v-18C64 1 63 0 61.8 0zM61 19.4H44.6V3H61v16.4z"/>
	</g>
</svg>
	);
};

export default GridAlt;