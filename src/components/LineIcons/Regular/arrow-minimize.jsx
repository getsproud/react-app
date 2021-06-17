import React from 'react';

function ArrowMinimize(props) {
	const title = props.title || "arrow minimize";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M34 36.6c-1.2-1.1-3-1.1-4.1-.1l-5.1 5.1c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.5 0 .9-.2 1.2-.5l2.8-2.9.3 19.8c0 1 .8 1.7 1.8 1.7s1.7-.8 1.7-1.8l-.1-19.8 2.9 2.9c.7.7 1.8.7 2.5 0s.7-1.8 0-2.5L34 36.6z"/>
		<path d="M30 27.3l.1.1c.6.5 1.3.7 2 .7s1.4-.2 2-.7l5.1-5.1c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0l-2.9 2.9V3c0-1-.8-1.7-1.7-1.7-1 0-1.7.8-1.7 1.8l.1 19.7-3.1-3.1c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l5.1 5.1z"/>
	</g>
</svg>
	);
};

export default ArrowMinimize;