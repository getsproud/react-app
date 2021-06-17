import React from 'react';

function AlignRight(props) {
	const title = props.title || "align right";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.4 1.3c-1 0-1.8.8-1.8 1.8v58c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V3c-.1-1-.9-1.7-1.8-1.7z"/>
		<path d="M43.1 10.7H10.4c-3.6 0-6.5 2.9-6.5 6.5v2.1c0 3.6 2.9 6.5 6.5 6.5h32.7c3.6 0 6.5-2.9 6.5-6.5v-2.1c0-3.5-2.9-6.5-6.5-6.5zm3 8.6c0 1.7-1.3 3-3 3H10.4c-1.7 0-3-1.3-3-3v-2.1c0-1.7 1.3-3 3-3h32.7c1.7 0 3 1.3 3 3v2.1z"/>
		<path d="M43.1 38.2H23.6c-3.6 0-6.5 2.9-6.5 6.5v2.1c0 3.6 2.9 6.5 6.5 6.5h19.5c3.6 0 6.5-2.9 6.5-6.5v-2.1c0-3.6-2.9-6.5-6.5-6.5zm3 8.6c0 1.7-1.3 3-3 3H23.6c-1.7 0-3-1.3-3-3v-2.1c0-1.7 1.3-3 3-3h19.5c1.7 0 3 1.3 3 3v2.1z"/>
	</g>
</svg>
	);
};

export default AlignRight;