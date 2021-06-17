import React from 'react';

function PencilAlt(props) {
	const title = props.title || "pencil alt";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.9 10.1c0-.6-.2-1.2-.7-1.7-1.3-1.3-2.6-2.6-3.8-3.9C58.2 3.3 57 2.2 55.8 1c-.4-.5-.9-.8-1.5-.9-.7-.1-1.3.1-1.9.5l-7.6 7.6H2.4C1.1 8.2 0 9.3 0 10.6v51.1c0 1.3 1.1 2.4 2.4 2.4h51.1c1.3 0 2.4-1.1 2.4-2.4V19.1l7.4-7.4c.4-.4.6-1 .6-1.6zM33.3 37.3l-10 3.3 3.3-10 20.5-20.5 6.8 6.7-20.6 20.5zM52.9 61H3.1V11.2h38.7L24 29l-4.3 13.2c-.2.5-.1 1.1.2 1.5.2.3.6.7 1.4.7h.2L34.9 40l17.9-17.9V61zM56 14.7L49.2 8 54 3.3l3.3 3.3c1.1 1.1 2.2 2.3 3.4 3.4L56 14.7z"/>
	</g>
</svg>
	);
};

export default PencilAlt;