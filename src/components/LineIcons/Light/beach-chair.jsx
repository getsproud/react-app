import React from 'react';

function BeachChair(props) {
	const title = props.title || "beach chair";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 48H28V30.1c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V48h-5.8L5.4 31.9c-.5-.6-1.5-.7-2.1-.2-.6.5-.7 1.5-.2 2.1l12 14.2H6.2l-6 9c-.5.7-.3 1.6.4 2.1.3.2.5.3.8.3.5 0 1-.2 1.2-.7L7.8 51h17v6.8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V51h22c0 .2.1.4.3.5l5.5 7.3c.3.4.7.6 1.2.6.3 0 .6-.1.9-.3.7-.5.8-1.4.3-2.1l-4.6-6h8.9c.8 0 1.5-.7 1.5-1.5s-.5-1.5-1.3-1.5z"/>
		<path d="M6.4 25.8c.2.2.4.2.7.2.5 0 1-.2 1.2-.6l3.1-3c1.3-1.3 3.1-1.3 4.4 0 2.4 2.4 6.1 2.4 8.6 0 1.3-1.3 3.1-1.3 4.4 0 2.4 2.4 6.1 2.4 8.5 0 1.3-1.3 3.1-1.3 4.4 0l3.2 3.2c.4.4 1.1.5 1.6.3.6-.2.9-.8.9-1.4C47.4 13 38 3.7 26.5 3.7 15 3.7 5.7 12.9 5.6 24.2c-.1.5.1 1 .4 1.3.1.2.2.3.4.3zM26.5 6.7c8.5 0 15.6 5.9 17.4 13.8l-.2-.2c-2.4-2.4-6.1-2.4-8.6 0-1.3 1.3-3.1 1.3-4.4 0-2.4-2.4-6.1-2.4-8.6 0-1.3 1.3-3.1 1.3-4.4 0-1.2-1.2-2.8-1.8-4.3-1.8s-3.1.6-4.3 1.8l-.1.1c1.9-7.9 9-13.7 17.5-13.7z"/>
	</g>
</svg>
	);
};

export default BeachChair;