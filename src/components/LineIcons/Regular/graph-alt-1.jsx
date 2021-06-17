import React from 'react';

function GraphAlt1(props) {
	const title = props.title || "graph alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 47.9h-1.2V25.6c0-2.1-1.7-3.8-3.8-3.8h-5.7c-2.1 0-3.8 1.7-3.8 3.8v22.3h-7.9V16.3c0-2.1-1.7-3.8-3.8-3.8h-5.7c-2.1 0-3.8 1.7-3.8 3.8v31.6h-7.9V29.7c0-2.1-1.7-3.8-3.8-3.8H7.9c-2.1 0-3.8 1.7-3.8 3.8V48H3c-1 0-1.8.8-1.8 1.8S2 51.4 3 51.4h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zm-53.3 0V29.7c0-.1.1-.3.3-.3h5.7c.1 0 .3.1.3.3V48H7.7zm21.2 0V16.3c0-.1.1-.3.3-.3h5.7c.1 0 .3.1.3.3v31.6h-6.3zm21.2 0V25.6c0-.1.1-.3.3-.3h5.7c.1 0 .3.1.3.3v22.3h-6.3z"/>
	</g>
</svg>
	);
};

export default GraphAlt1;