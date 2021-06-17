import React from 'react';

function LayoutAlt1(props) {
	const title = props.title || "layout alt 1";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 0h-61C.7 0 0 .7 0 1.5v28.9c0 .8.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5V1.5c0-.8-.7-1.5-1.5-1.5zM61 28.9H3V3h58v25.9z"/>
		<path d="M25.3 40.3H1.5c-.8 0-1.5.7-1.5 1.5v20.7c0 .8.7 1.5 1.5 1.5h23.8c.8 0 1.5-.7 1.5-1.5V41.8c0-.8-.7-1.5-1.5-1.5zM23.8 61H3V43.3h20.8V61z"/>
		<path d="M62.5 40.3H38.7c-.8 0-1.5.7-1.5 1.5v20.7c0 .8.7 1.5 1.5 1.5h23.8c.8 0 1.5-.7 1.5-1.5V41.8c0-.8-.7-1.5-1.5-1.5zM61 61H40.2V43.3H61V61z"/>
	</g>
</svg>
	);
};

export default LayoutAlt1;