import React from 'react';

function Necklace2(props) {
	const title = props.title || "necklace 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.8 7.5c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8c0 15-12.2 27.2-27.3 27.2C17 34.7 4.8 22.5 4.8 7.5c0-1-.8-1.8-1.8-1.8s-1.7.8-1.7 1.8C1.3 23.1 13 36 28.1 38c-2.6 2.6-6.1 6.7-6.1 10.2 0 5.6 4.5 10.1 10.1 10.1s10.1-4.5 10.1-10.1c0-3.5-3.5-7.6-6.1-10.2C51 36 62.8 23.1 62.8 7.5zM38.6 48.2c0 3.6-2.9 6.6-6.6 6.6-3.6 0-6.6-2.9-6.6-6.6 0-2.3 3.5-6.4 6.6-9.1 3 2.7 6.6 6.8 6.6 9.1z"/>
	</g>
</svg>
	);
};

export default Necklace2;