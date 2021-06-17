import React from 'react';

function HeartMonitor(props) {
	const title = props.title || "heart monitor";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M46.2 16.6h-3.8L39 1.2C38.9.5 38.3 0 37.6 0H26.4c-.7 0-1.3.5-1.5 1.2l-3.5 15.5h-3.7c-1.4 0-2.5 1.1-2.5 2.5v25.7c0 1.4 1.1 2.5 2.5 2.5h3.7l3.5 15.5c.2.7.8 1.2 1.5 1.2h11.2c.7 0 1.3-.5 1.5-1.2l3.5-15.5h3.8c1.4 0 2.5-1.1 2.5-2.5V19.1c-.1-1.3-1.3-2.5-2.7-2.5zM27.6 3h8.8l3.1 13.6h-15L27.6 3zm-4.9 16.6h23.1v13.6L36.7 28c-.5-.3-1-.3-1.5 0l-8.7 5-8.2-4.7v-8.7h4.4zM36.4 61h-8.8l-3.1-13.6h14.9l-3 13.6zm4.9-16.6h-23V31.7l7.5 4.3c.5.3 1 .3 1.5 0l8.7-5 9.8 5.7v7.7h-4.5z"/>
	</g>
</svg>
	);
};

export default HeartMonitor;