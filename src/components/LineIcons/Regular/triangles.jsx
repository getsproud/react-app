import React from 'react';

function Triangles(props) {
	const title = props.title || "triangles";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M20.2 7.3C19 5.3 16.9 4 14.5 4 12.2 4 10 5.3 8.8 7.3L2.1 18.9c-1.2 2.1-1.2 4.5 0 6.6 1.2 2.1 3.3 3.3 5.7 3.3h13.4c2.4 0 4.5-1.2 5.7-3.3 1.2-2.1 1.2-4.5 0-6.6L20.2 7.3zm3.7 16.4c-.6 1-1.5 1.5-2.7 1.5H7.8c-1.1 0-2.1-.6-2.7-1.5-.6-1-.6-2.1 0-3.1L11.8 9c.6-1 1.5-1.5 2.7-1.5 1.1 0 2.1.6 2.7 1.5l6.7 11.6c.5 1 .5 2.2 0 3.1z"/>
		<path d="M42.8 28.8h13.4c2.4 0 4.5-1.2 5.7-3.3 1.2-2.1 1.2-4.5 0-6.6L55.2 7.3C54 5.3 51.8 4 49.5 4S45 5.3 43.8 7.3l-6.7 11.6c-1.2 2.1-1.2 4.5 0 6.6s3.3 3.3 5.7 3.3zm-2.7-8.1l6.7-11.6c.6-1 1.5-1.5 2.7-1.5s2.1.6 2.7 1.5l6.7 11.6c.6 1 .6 2.1 0 3.1s-1.5 1.5-2.7 1.5H42.8c-1.1 0-2.1-.6-2.7-1.5-.5-1-.5-2.2 0-3.1z"/>
		<path d="M20.2 38.5c-1.2-2.1-3.3-3.3-5.7-3.3-2.4 0-4.5 1.2-5.7 3.3L2.1 50.1c-1.2 2.1-1.2 4.5 0 6.6S5.5 60 7.8 60h13.4c2.4 0 4.5-1.2 5.7-3.3 1.2-2.1 1.2-4.5 0-6.6l-6.7-11.6zm3.7 16.4c-.6 1-1.6 1.5-2.7 1.5H7.8c-1.1 0-2.1-.6-2.7-1.5s-.6-2.1 0-3.1l6.7-11.6c.6-1 1.5-1.5 2.7-1.5 1.1 0 2.1.6 2.7 1.5l6.7 11.6c.5 1 .5 2.2 0 3.1z"/>
		<path d="M61.9 50.1l-6.7-11.6c-1.2-2.1-3.3-3.3-5.7-3.3s-4.5 1.2-5.7 3.3l-6.7 11.6c-1.2 2.1-1.2 4.5 0 6.6s3.3 3.3 5.7 3.3h13.4c2.4 0 4.5-1.2 5.7-3.3 1.2-2.1 1.1-4.6 0-6.6zm-3.1 4.8c-.6 1-1.5 1.5-2.7 1.5H42.8c-1.1 0-2.1-.6-2.7-1.5-.6-1-.6-2.1 0-3.1l6.7-11.6c.6-1 1.5-1.5 2.7-1.5s2.1.6 2.7 1.5l6.7 11.6c.5 1 .5 2.2-.1 3.1z"/>
	</g>
</svg>
	);
};

export default Triangles;