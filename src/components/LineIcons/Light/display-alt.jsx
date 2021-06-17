import React from 'react';

function DisplayAlt(props) {
	const title = props.title || "display alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.5 2.8h-59C1.1 2.8 0 3.9 0 5.3v39.6c0 1.4 1.1 2.5 2.5 2.5h21.7l-2.9 10.9h-5.9c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h33.3c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-5.9l-2.9-10.9h21.7c1.4 0 2.5-1.1 2.5-2.5V5.3c-.1-1.4-1.2-2.5-2.6-2.5zM39.7 58.2H24.3l2.9-10.9h9.5l3 10.9zM61 44.4H3V5.8h58v38.6z"/>
	</g>
</svg>
	);
};

export default DisplayAlt;