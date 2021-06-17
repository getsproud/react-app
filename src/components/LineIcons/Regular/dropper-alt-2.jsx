import React from 'react';

function DropperAlt2(props) {
	const title = props.title || "dropper alt 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M39.7 11.4h-1.5v-4c0-1.7-.6-3.2-1.8-4.4-1.2-1.2-2.7-1.8-4.4-1.8-3.4 0-6.2 2.8-6.2 6.2v4h-1.5c-2.7 0-5 2.2-5 5v2.4c0 2.7 2.2 5 5 5h1.5v32.7c0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2V23.8h1.5c2.7 0 5-2.2 5-5v-2.4c0-2.7-2.2-5-5-5zM29.3 7.5c0-1.5 1.2-2.7 2.7-2.7a2.732 2.732 0 0 1 2.7 2.7v4h-5.4v-4zm5.4 49c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7V23.8h5.4v32.7zm6.5-37.7c0 .8-.7 1.5-1.5 1.5H24.3c-.8 0-1.5-.7-1.5-1.5v-2.4c0-.8.7-1.5 1.5-1.5h15.5c.8 0 1.5.7 1.5 1.5v2.4z"/>
	</g>
</svg>
	);
};

export default DropperAlt2;