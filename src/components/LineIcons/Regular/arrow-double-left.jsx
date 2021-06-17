import React from 'react';

function ArrowDoubleLeft(props) {
	const title = props.title || "arrow double left";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M27.6 30.3H6.7l2.9-3.1c.7-.7.6-1.8-.1-2.5s-1.8-.7-2.4 0L2 30.1c-.9 1-.9 2.6 0 3.7l5.1 5.4c.3.4.8.5 1.3.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8.1-2.5l-2.9-3.1h20.9c1 0 1.8-.8 1.8-1.8s-1-1.5-1.9-1.5z"/>
		<path d="M61 30.3H40.1l2.9-3.1c.7-.7.6-1.8-.1-2.5s-1.8-.6-2.5.1l-5.1 5.4c-.9 1-.9 2.6 0 3.7l5.1 5.4c.3.4.8.5 1.3.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8.1-2.5l-2.9-3.1H61c1 0 1.8-.8 1.8-1.8s-.8-1.6-1.8-1.6z"/>
	</g>
</svg>
	);
};

export default ArrowDoubleLeft;