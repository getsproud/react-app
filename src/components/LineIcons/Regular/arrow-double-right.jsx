import React from 'react';

function ArrowDoubleRight(props) {
	const title = props.title || "arrow double right";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62 30.1l-5.1-5.4c-.7-.7-1.8-.7-2.5-.1-.7.7-.7 1.8-.1 2.5l2.9 3.1H36.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h20.9l-2.9 3.1c-.7.7-.6 1.8.1 2.5.3.3.8.5 1.2.5.5 0 .9-.2 1.3-.5l5.1-5.4c.9-1.2.9-2.8-.1-3.9z"/>
		<path d="M23.5 24.7c-.7-.7-1.8-.7-2.5 0s-.7 1.8-.1 2.5l2.9 3.1H3c-1 0-1.8.8-1.8 1.8S2 33.8 3 33.8h20.9L21 36.9c-.7.7-.6 1.8.1 2.5.3.3.8.5 1.2.5.5 0 .9-.2 1.3-.5l5.1-5.4c.9-1 .9-2.6 0-3.7l-5.2-5.6z"/>
	</g>
</svg>
	);
};

export default ArrowDoubleRight;