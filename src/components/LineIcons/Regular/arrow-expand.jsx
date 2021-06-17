import React from 'react';

function ArrowExpand(props) {
	const title = props.title || "arrow expand";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M36.6 54.5l-2.8 2.9-.1-19.8c0-1-.8-1.7-1.7-1.7-1 0-1.7.8-1.7 1.8l.1 19.8-2.9-2.9c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l5 5V62c.6.5 1.3.7 2 .7s1.4-.2 2-.7l5.1-5.1c.7-.7.7-1.8 0-2.5-.7-.6-1.8-.6-2.5.1z"/>
		<path d="M27.3 9.5l2.9-2.9.1 19.8c0 1 .8 1.7 1.8 1.7s1.7-.8 1.7-1.8l-.2-19.6 3.1 3.1c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5L34 2.1l-.1-.1c-1.1-1-2.9-1-4 0l-5.1 5c-.7.7-.7 1.8 0 2.5s1.8.7 2.5 0z"/>
	</g>
</svg>
	);
};

export default ArrowExpand;