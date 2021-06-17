import React from 'react';

function RightArrowBox(props) {
	const title = props.title || "right arrow box";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M40 19.2c-.7-.7-1.8-.7-2.5-.1-.7.7-.7 1.8-.1 2.5l8.2 8.6-30.4.2c-1 0-1.7.8-1.7 1.8s.8 1.7 1.7 1.7l30.4-.2-8.2 8.8c-.7.7-.6 1.8.1 2.5.3.3.8.5 1.2.5.5 0 .9-.2 1.3-.6l9.3-10 .1-.1c1.3-1.6 1.3-4 0-5.7L40 19.2z"/>
		<path d="M57 1.3H7C3.8 1.3 1.3 3.8 1.3 7v50c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V7c-.1-3.2-2.7-5.7-5.9-5.7zM59.3 57c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3V7c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3v50z"/>
	</g>
</svg>
	);
};

export default RightArrowBox;