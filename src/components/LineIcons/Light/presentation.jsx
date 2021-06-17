import React from 'react';

function Presentation(props) {
	const title = props.title || "presentation";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 4.9h-61C.7 4.9 0 5.5 0 6.4v8.8c0 .8.7 1.5 1.5 1.5h1.1V43c0 .8.7 1.5 1.5 1.5h26.4v7.4L25 56.5c-.6.5-.7 1.5-.2 2.1.3.4.7.5 1.2.5.3 0 .7-.1 1-.3l5.1-4.2 5.1 4.2c.6.5 1.6.4 2.1-.2.5-.6.4-1.6-.2-2.1l-5.5-4.6v-7.4H60c.8 0 1.5-.7 1.5-1.5V16.7h1.1c.8 0 1.5-.7 1.5-1.5V6.4c-.1-.9-.8-1.5-1.6-1.5zm-4.2 36.6H5.6V16.7h52.7v24.8zM3 7.9h58v5.8H3V7.9z"/>
	</g>
</svg>
	);
};

export default Presentation;