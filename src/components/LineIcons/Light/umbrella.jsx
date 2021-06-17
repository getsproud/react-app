import React from 'react';

function Umbrella(props) {
	const title = props.title || "umbrella";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M33.5 4.4V1.5C33.5.7 32.8 0 32 0s-1.5.7-1.5 1.5v2.9C13.5 5.2 0 19.2 0 36.4c0 .8.7 1.5 1.5 1.5h29v24.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V37.9h29c.8 0 1.5-.7 1.5-1.5 0-17.2-13.5-31.2-30.5-32zM3 34.9C3.8 19.6 16.5 7.3 32 7.3s28.2 12.2 29 27.5H3z"/>
	</g>
</svg>
	);
};

export default Umbrella;