import React from 'react';

function Shorts(props) {
	const title = props.title || "shorts";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.5 62.8H44.3c-.7 0-1.3-.4-1.6-1.1L32.1 36.5 21.3 61.7c-.3.6-.9 1.1-1.6 1.1H8.5c-4 0-7.3-3.3-7.3-7.3v-47c0-4 3.3-7.3 7.3-7.3h47c4 0 7.3 3.3 7.3 7.3v47c0 4-3.3 7.3-7.3 7.3zm-10.1-3.5h10.1c2.1 0 3.8-1.7 3.8-3.8v-47c0-2.1-1.7-3.8-3.8-3.8h-47c-2.1 0-3.8 1.7-3.8 3.8v47c0 2.1 1.7 3.8 3.8 3.8h10.1l11.9-27.9c.3-.6.9-1.1 1.6-1.1.7 0 1.3.4 1.6 1.1l11.7 27.9z"/>
	</g>
</svg>
	);
};

export default Shorts;