import React from 'react';

function Scaling(props) {
	const title = props.title || "scaling";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 33.1H45.4V1.5c0-.8-.7-1.5-1.5-1.5H1.5C.7 0 0 .7 0 1.5v42.4c0 .8.7 1.5 1.5 1.5h31.6v17.1c0 .8.7 1.5 1.5 1.5h27.9c.8 0 1.5-.7 1.5-1.5V34.6c0-.8-.7-1.5-1.5-1.5zM3 42.4V3h39.4v30.1h-7.8c-.8 0-1.5.7-1.5 1.5v7.8H3zm39.4-6.3v6.3h-6.3v-6.3h6.3zM61 61H36.1V45.4h7.8c.8 0 1.5-.7 1.5-1.5v-7.8H61V61z"/>
	</g>
</svg>
	);
};

export default Scaling;