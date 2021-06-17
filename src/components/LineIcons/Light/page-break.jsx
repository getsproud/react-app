import React from 'react';

function PageBreak(props) {
	const title = props.title || "page break";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M50.4 0H13.6c-1.4 0-2.5 1.1-2.5 2.5v20.2c0 1.4 1.1 2.5 2.5 2.5h36.9c1.4 0 2.5-1.1 2.5-2.5V2.5C52.9 1.1 51.8 0 50.4 0zm-.5 22.2H14.1V3H50v19.2z"/>
		<path d="M50.4 38.8H13.6c-1.4 0-2.5 1.1-2.5 2.5v20.2c0 1.4 1.1 2.5 2.5 2.5h36.9c1.4 0 2.5-1.1 2.5-2.5V41.3c-.1-1.4-1.2-2.5-2.6-2.5zM49.9 61H14.1V41.8H50V61z"/>
		<path d="M16.3 33.5h4.6c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-5.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h1z"/>
		<path d="M30.2 33.5h4.6c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-5.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h1z"/>
		<path d="M44.1 33.5h4.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-5.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h1z"/>
	</g>
</svg>
	);
};

export default PageBreak;