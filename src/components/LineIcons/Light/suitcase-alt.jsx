import React from 'react';

function SuitcaseAlt(props) {
	const title = props.title || "suitcase alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M46.9 14.1h-5V4.3C42 1.9 40 0 37.6 0H26.4C24 0 22 1.9 22 4.3v9.8h-5c-1.9 0-3.5 1.6-3.5 3.5v35.5c0 1.9 1.6 3.5 3.5 3.5h2.2V62.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.6-.3h19.6V62.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.6-.3H47c1.9 0 3.5-1.6 3.5-3.5V17.6c-.1-1.9-1.7-3.5-3.6-3.5zM25 4.3c0-.7.6-1.3 1.4-1.3h11.3c.7 0 1.3.6 1.3 1.3v9.8H25V4.3zm22.4 48.8c0 .3-.2.5-.5.5H17.1c-.3 0-.5-.2-.5-.5V17.6c0-.3.2-.5.5-.5h29.8c.3 0 .5.2.5.5v35.5z"/>
		<path d="M37.6 22.6H26.4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h11.3c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.6-1.5z"/>
	</g>
</svg>
	);
};

export default SuitcaseAlt;