import React from 'react';

function VideoCut(props) {
	const title = props.title || "video cut";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55 1.3H9C4.7 1.3 1.3 4.7 1.3 9v46c0 4.3 3.5 7.8 7.8 7.8h46c4.3 0 7.8-3.5 7.8-7.8V9c-.1-4.3-3.6-7.7-7.9-7.7zm4.3 29H48.5V19h10.8v11.3zm-14.3 0H19V4.8h26v25.5zm-29.5 0H4.8V19h10.8v11.3zM4.8 33.8h10.8V45H4.8V33.8zm14.2 0h26v25.5H19V33.8zm29.5 0h10.8V45H48.5V33.8zM59.3 9v6.5H48.5V4.8H55c2.3 0 4.3 1.9 4.3 4.2zM9 4.8h6.5v10.8H4.8V9c0-2.3 1.9-4.2 4.2-4.2zM4.8 55v-6.5h10.8v10.8H9c-2.3 0-4.2-2-4.2-4.3zM55 59.3h-6.5V48.5h10.8V55c0 2.3-2 4.3-4.3 4.3z"/>
	</g>
</svg>
	);
};

export default VideoCut;