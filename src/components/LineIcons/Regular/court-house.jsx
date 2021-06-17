import React from 'react';

function CourtHouse(props) {
	const title = props.title || "court house";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.9 19L34.8 2.5c-1.7-1-3.8-1-5.5 0L2.1 19c-.7.4-1 1.2-.8 2 .2.8.9 1.3 1.7 1.3h3.3v36.5H4.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h19.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-1.9V22.3h20.5v36.5h-2.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h19.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-1.7V22.3H61c.8 0 1.5-.5 1.7-1.3.2-.8-.1-1.6-.8-2zM31.1 5.5c.6-.4 1.3-.4 1.9 0l21.8 13.3H9.2L31.1 5.5zM18.2 58.8H9.8V22.3h8.4v36.5zm35.9 0h-8.4V22.3h8.4v36.5z"/>
	</g>
</svg>
	);
};

export default CourtHouse;