import React from 'react';

function LinkAlt1(props) {
	const title = props.title || "link alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3c-4.6 0-8.3 3.7-8.3 8.3v12.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V9.5c0-2.6 2.2-4.8 4.8-4.8 2.6 0 4.8 2.2 4.8 4.8v12.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V9.5C40.3 5 36.6 1.3 32 1.3z"/>
		<path d="M33.8 36.5v-9c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8z"/>
		<path d="M38.5 40.4c-1 0-1.8.8-1.8 1.8v12.3c0 2.6-2.2 4.8-4.8 4.8-2.6 0-4.8-2.2-4.8-4.8V42.2c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v12.3c0 4.6 3.7 8.3 8.3 8.3s8.3-3.7 8.3-8.3V42.2c.2-1-.6-1.8-1.6-1.8z"/>
	</g>
</svg>
	);
};

export default LinkAlt1;