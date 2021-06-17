import React from 'react';

function LayoutAlt2(props) {
	const title = props.title || "layout alt 2";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M25.3 0H1.5C.7 0 0 .7 0 1.5v61c0 .8.7 1.5 1.5 1.5h23.8c.8 0 1.5-.7 1.5-1.5v-61c0-.8-.7-1.5-1.5-1.5zm-1.5 61H3V3h20.8v58z"/>
		<path d="M62.5 0H38.7c-.8 0-1.5.7-1.5 1.5v23.8c0 .8.7 1.5 1.5 1.5h23.8c.8 0 1.5-.7 1.5-1.5V1.5c0-.8-.7-1.5-1.5-1.5zM61 23.8H40.2V3H61v20.8z"/>
		<path d="M62.5 37.2H38.7c-.8 0-1.5.7-1.5 1.5v23.8c0 .8.7 1.5 1.5 1.5h23.8c.8 0 1.5-.7 1.5-1.5V38.7c0-.8-.7-1.5-1.5-1.5zM61 61H40.2V40.2H61V61z"/>
	</g>
</svg>
	);
};

export default LayoutAlt2;