import React from 'react';

function ArrowDoubleRight(props) {
	const title = props.title || "arrow double right";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.4 30.3l-3.9-4.4c-.5-.6-1.5-.7-2.1-.1-.6.5-.7 1.5-.1 2.1l2.3 2.7h-23c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h22.9l-2.3 2.7c-.5.6-.5 1.6.1 2.1.3.3.6.4 1 .4s.8-.2 1.1-.5l3.9-4.5c.9-1.1.9-2.5.1-3.5z"/>
		<path d="M24.3 25.8c-.5-.6-1.5-.7-2.1-.1-.6.5-.7 1.5-.1 2.1l2.3 2.7H1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h22.9l-2.3 2.7c-.5.6-.5 1.6.1 2.1.3.3.6.4 1 .4s.8-.2 1.1-.5l3.9-4.5c.8-1 .8-2.4 0-3.4l-3.9-4.5z"/>
	</g>
</svg>
	);
};

export default ArrowDoubleRight;