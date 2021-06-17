import React from 'react';

function Arc(props) {
	const title = props.title || "arc";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 1.3h-3.5c-2.6 0-4.8 2.1-4.8 4.8v.2C37 8.1 26.4 13.7 18.3 22.9 8.9 33.6 6.6 45.7 6.1 49.7H6c-2.6 0-4.8 2.1-4.8 4.8V58c0 2.6 2.1 4.8 4.8 4.8h3.5c2.6 0 4.8-2.1 4.8-4.8v-3.5c0-2.6-2-4.6-4.6-4.7.6-4 2.8-14.9 11.3-24.5 7.6-8.6 17-13.6 28.8-15.4.1 2.5 2.2 4.5 4.7 4.5H58c2.6 0 4.8-2.1 4.8-4.8V6.1c0-2.7-2.2-4.8-4.8-4.8zM10.7 54.4v3.5c0 .7-.6 1.3-1.3 1.3H6c-.7 0-1.3-.6-1.3-1.3v-3.5c0-.7.6-1.3 1.3-1.3h3.5c.7.1 1.2.7 1.2 1.3zM59.3 9.6c0 .7-.6 1.3-1.3 1.3h-3.5c-.7 0-1.3-.6-1.3-1.3V6.1c0-.7.6-1.3 1.3-1.3H58c.7 0 1.3.6 1.3 1.3v3.5z"/>
	</g>
</svg>
	);
};

export default Arc;