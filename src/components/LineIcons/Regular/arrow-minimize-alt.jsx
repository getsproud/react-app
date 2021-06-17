import React from 'react';

function ArrowMinimizeAlt(props) {
	const title = props.title || "arrow minimize alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M29.7 37.1c-.1-1.6-1.4-2.9-3-3h-8.1c-1 0-1.7.8-1.7 1.8s.8 1.7 1.8 1.7h5l-22 22.1c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l22-22.1v5.1c0 1 .8 1.7 1.7 1.7 1 0 1.7-.8 1.7-1.8l-.1-7.9.3-.1z"/>
		<path d="M62.2 1.8c-.7-.7-1.8-.7-2.5 0L37.8 23.9v-5.4c0-1-.8-1.8-1.7-1.8-1 0-1.7.8-1.8 1.7v8.5c.1 1.6 1.4 2.9 3 3h8.1c1 0 1.7-.8 1.7-1.8s-.8-1.7-1.8-1.7h-5.1l22-22.1c.7-.8.7-1.9 0-2.5z"/>
	</g>
</svg>
	);
};

export default ArrowMinimizeAlt;