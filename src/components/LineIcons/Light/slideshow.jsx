import React from 'react';

function Slideshow(props) {
	const title = props.title || "slideshow";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 25.3h-61c-.8 0-1.5.7-1.5 1.5v35.7c0 .8.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5V26.8c0-.8-.7-1.5-1.5-1.5zM61 61H3V28.3h58V61z"/>
		<path d="M8.1 19.8h47.7c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H8.1c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
		<path d="M13.4 11.4h37.2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H13.4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
		<path d="M18.6 3h26.9c.8 0 1.5-.7 1.5-1.5S46.3 0 45.4 0H18.6c-.8 0-1.5.7-1.5 1.5S17.7 3 18.6 3z"/>
	</g>
</svg>
	);
};

export default Slideshow;