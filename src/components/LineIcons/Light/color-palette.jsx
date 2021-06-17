import React from 'react';

function ColorPalette(props) {
	const title = props.title || "color palette";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 41.4H35.6l24.9-24.9c.3-.3.4-.7.4-1.1 0-.4-.2-.8-.4-1.1L46.6.4C46-.2 45-.2 44.5.4L22.6 22.3V1.5C22.6.7 22 0 21.1 0H1.5C.7 0 0 .7 0 1.5v61c0 .8.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5V42.9c0-.9-.7-1.5-1.5-1.5zM45.6 3.6l11.8 11.8-26 26h-8.7V26.6l22.9-23zM3 61V3h16.6v58H3zm58 0H22.6V44.4H61V61z"/>
	</g>
</svg>
	);
};

export default ColorPalette;