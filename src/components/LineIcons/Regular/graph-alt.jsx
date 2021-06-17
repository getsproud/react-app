import React from 'react';

function GraphAlt(props) {
	const title = props.title || "graph alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 47.5h-1.2V16.7c0-2.1-1.7-3.8-3.8-3.8h-5.7c-2.1 0-3.8 1.7-3.8 3.8v30.8h-7.9v-25c0-2.1-1.7-3.8-3.8-3.8h-5.7c-2.1 0-3.8 1.7-3.8 3.8v25h-7.9V29.3c0-2.1-1.7-3.8-3.8-3.8H7.9c-2.1 0-3.8 1.7-3.8 3.8v18.2H3c-1 0-1.8.8-1.8 1.8S2 51 3 51h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zm-53.3 0V29.3c0-.1.1-.3.3-.3h5.7c.1 0 .3.1.3.3v18.2H7.7zm21.2 0v-25c0-.1.1-.3.3-.3h5.7c.1 0 .3.1.3.3v25h-6.3zm21.2 0V16.7c0-.1.1-.3.3-.3h5.7c.1 0 .3.1.3.3v30.8h-6.3z"/>
	</g>
</svg>
	);
};

export default GraphAlt;