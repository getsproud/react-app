import React from 'react';

function Closet5(props) {
	const title = props.title || "closet 5";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 4.6H6c-2.6 0-4.8 2.1-4.8 4.8v45.3c0 2.6 2.1 4.8 4.8 4.8h52c2.6 0 4.8-2.1 4.8-4.8V9.4c0-2.7-2.2-4.8-4.8-4.8zm-53.2 50V9.4c0-.7.6-1.3 1.3-1.3h24.2v47.8H6c-.7 0-1.2-.6-1.2-1.3zm54.5 0c0 .7-.6 1.3-1.3 1.3H33.7V8.1H58c.7 0 1.3.6 1.3 1.3v45.2z"/>
		<path d="M26.7 28.7c0-1-.8-1.7-1.8-1.7s-1.7.8-1.7 1.8v2.3c0 1 .8 1.7 1.8 1.7s1.7-.8 1.7-1.8v-2.3z"/>
		<path d="M39 26.9c-1 0-1.8.8-1.8 1.8V31c0 1 .8 1.7 1.8 1.7s1.7-.8 1.7-1.8v-2.3c.1-.9-.7-1.7-1.7-1.7z"/>
	</g>
</svg>
	);
};

export default Closet5;