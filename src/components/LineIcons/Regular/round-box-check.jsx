import React from 'react';

function RoundBoxCheck(props) {
	const title = props.title || "round box check";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 1.3H7C3.8 1.3 1.3 3.8 1.3 7v50c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V7c-.1-3.2-2.7-5.7-5.9-5.7zM59.3 57c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3V7c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3v50z"/>
		<path d="M47.9 19.1L27.6 39.4c-1 1-2.6 1-3.5 0l-8-8c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l8 8c1.2 1.2 2.7 1.8 4.2 1.8s3.1-.6 4.2-1.8l20.3-20.3c.7-.7.7-1.8 0-2.5-.6-.7-1.7-.7-2.4 0z"/>
	</g>
</svg>
	);
};

export default RoundBoxCheck;