import React from 'react';

function ColorPalette(props) {
	const title = props.title || "color palette";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.5 40.6H36.2l19.2-19.2c1.4-1.4 2.1-3.2 2.1-5.1 0-1.9-.8-3.8-2.1-5.1L50 5.6c-1.4-1.4-3.2-2.1-5.1-2.1-1.9 0-3.8.8-5.1 2.1L23.4 22V7c0-3.2-2.6-5.8-5.8-5.8H7C3.8 1.3 1.3 3.8 1.3 7v50c0 3.2 2.6 5.8 5.8 5.8h48.5c4 0 7.2-3.3 7.2-7.2v-7.7c0-4.1-3.3-7.3-7.3-7.3zM42.3 8.1c1.5-1.5 3.8-1.5 5.3 0l5.4 5.4c.7.7 1.1 1.6 1.1 2.6s-.4 1.9-1.1 2.6L31.3 40.6h-7.9V27L42.3 8.1zM4.8 57V7c0-1.2 1-2.3 2.3-2.3h10.7c1.2 0 2.3 1 2.3 2.3v52.3H7c-1.2 0-2.2-1.1-2.2-2.3zm54.5-1.5c0 2.1-1.7 3.7-3.7 3.7H23.4V44.1h32.1c2.1 0 3.7 1.7 3.7 3.7v7.7z"/>
	</g>
</svg>
	);
};

export default ColorPalette;