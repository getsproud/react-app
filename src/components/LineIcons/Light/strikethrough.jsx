import React from 'react';

function Strikethrough(props) {
	const title = props.title || "strikethrough";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 19.4h-29V3h16.8c.8 0 1.5-.7 1.5-1.5S51.1 0 50.3 0H13.7c-.8 0-1.5.7-1.5 1.5S12.9 3 13.7 3h16.8v16.4h-29c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h29v40.1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V22.4h29c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default Strikethrough;