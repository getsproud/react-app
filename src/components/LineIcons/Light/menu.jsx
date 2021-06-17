import React from 'react';

function Menu(props) {
	const title = props.title || "menu";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 30.5h-61c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M62.5 49.1h-61c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M1.5 14.9h61c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-61c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
	</g>
</svg>
	);
};

export default Menu;