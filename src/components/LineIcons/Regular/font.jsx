import React from 'react';

function Font(props) {
	const title = props.title || "font";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 1.3H7C3.8 1.3 1.3 3.8 1.3 7v50c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V7c-.1-3.2-2.7-5.7-5.9-5.7zM59.3 57c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3V7c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3v50z"/>
		<path d="M42.3 19.9H21.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h8.6v19.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V23.4h8.6c1 0 1.8-.8 1.8-1.8s-1-1.7-2-1.7z"/>
	</g>
</svg>
	);
};

export default Font;