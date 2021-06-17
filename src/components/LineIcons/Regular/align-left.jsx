import React from 'react';

function AlignLeft(props) {
	const title = props.title || "align left";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M5.6 1.3c-.9 0-1.7.7-1.7 1.7v58c0 1 .8 1.8 1.8 1.8S7.4 62 7.4 61V3c0-1-.8-1.7-1.8-1.7z"/>
		<path d="M53.6 10.7H20.9c-3.6 0-6.5 2.9-6.5 6.5v2.1c0 3.6 2.9 6.5 6.5 6.5h32.7c3.6 0 6.5-2.9 6.5-6.5v-2.1c0-3.5-2.9-6.5-6.5-6.5zm3 8.6c0 1.7-1.3 3-3 3H20.9c-1.7 0-3-1.3-3-3v-2.1c0-1.7 1.3-3 3-3h32.7c1.7 0 3 1.3 3 3v2.1z"/>
		<path d="M40.4 38.2H20.9c-3.6 0-6.5 2.9-6.5 6.5v2.1c0 3.6 2.9 6.5 6.5 6.5h19.5c3.6 0 6.5-2.9 6.5-6.5v-2.1c0-3.6-2.9-6.5-6.5-6.5zm3 8.6c0 1.7-1.3 3-3 3H20.9c-1.7 0-3-1.3-3-3v-2.1c0-1.7 1.3-3 3-3h19.5c1.7 0 3 1.3 3 3v2.1z"/>
	</g>
</svg>
	);
};

export default AlignLeft;