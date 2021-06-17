import React from 'react';

function PyramidDecrease(props) {
	const title = props.title || "pyramid decrease";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M44.9 38c-.5-.7-1.4-.9-2.1-.4-.7.5-.9 1.4-.4 2.1l1.8 2.7H11.1l5.8-8.5h13.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H18.9L27.7 18l1.2 1.8c.5.7 1.4.9 2.1.4.7-.5.9-1.4.4-2.1l-2.5-3.6c-.3-.4-.7-.7-1.3-.7-.5 0-1 .2-1.3.7L.3 53.1c-.3.5-.3 1.1-.1 1.6.3.5.8.8 1.3.8h52.3c.6 0 1.1-.3 1.3-.8.3-.5.2-1.1-.1-1.6L44.9 38zM4.4 52.4l4.7-7h37.2l4.7 7H4.4z"/>
		<path d="M50.5 8.6C43 8.6 37 14.6 37 22.1s6 13.5 13.5 13.5c7.4 0 13.5-6.1 13.5-13.5S57.9 8.6 50.5 8.6zm0 23.9C44.7 32.5 40 27.8 40 22s4.7-10.5 10.5-10.5S61 16.2 61 22s-4.7 10.5-10.5 10.5z"/>
		<path d="M53.2 19.1l-2.7 2.7-2.7-2.7c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l3.8 3.8c.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4l3.8-3.8c.6-.6.6-1.5 0-2.1-.8-.6-1.7-.6-2.3 0z"/>
	</g>
</svg>
	);
};

export default PyramidDecrease;