import React from 'react';

function Pyramids(props) {
	const title = props.title || "pyramids";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.7 52.9H2.3c-.8 0-1.6-.4-2-1.1-.4-.7-.4-1.6 0-2.3l16.6-28.1c.4-.7 1.1-1.1 1.9-1.1.8 0 1.5.4 1.9 1.1l5.7 9.5 11.1-18.8c.4-.7 1.1-1.1 1.9-1.1.8 0 1.5.4 1.9 1.1l22.5 37.4c.4.7.4 1.6 0 2.3-.5.7-1.2 1.1-2.1 1.1zm-58.1-3h56.9L39.3 14.8 28.2 33.6c-.4.7-1.1 1.1-1.9 1.1-.8 0-1.5-.4-1.9-1.1l-5.7-9.5L3.6 49.9z"/>
	</g>
</svg>
	);
};

export default Pyramids;