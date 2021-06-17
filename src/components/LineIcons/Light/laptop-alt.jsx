import React from 'react';

function LaptopAlt(props) {
	const title = props.title || "laptop alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 42.6h-3.9V12.1c0-2.8-2.3-5.1-5.1-5.1h-43c-2.8 0-5.1 2.3-5.1 5.1v30.5H1.5c-.8 0-1.5.7-1.5 1.5v4.7C0 53.3 3.7 57 8.2 57h47.6c4.5 0 8.2-3.7 8.2-8.2v-4.7c0-.8-.6-1.5-1.5-1.5zM8.4 12.1c0-1.2 1-2.1 2.1-2.1h42.9c1.2 0 2.1 1 2.1 2.1v30.5H8.4V12.1zM61 48.8c0 2.9-2.4 5.2-5.2 5.2H8.2C5.3 54 3 51.7 3 48.8v-3.2h58v3.2z"/>
		<path d="M34.1 13.9H30c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h4.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default LaptopAlt;