import React from 'react';

function Icicles(props) {
	const title = props.title || "icicles";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 62.8c-1.8 0-3.3-1.3-3.5-3.1l-2.4-19.8-1.3 5c-.4 1.6-1.8 2.7-3.5 2.7-1.6 0-3-1.2-3.4-2.8l-1.6-8.1-3.2 13c-.4 1.6-1.9 2.7-3.6 2.7-1.7-.1-3.1-1.4-3.3-3.1L1 8c-.2-1.7.3-3.4 1.5-4.7 1.1-1.3 2.8-2 4.5-2h50c1.7 0 3.4.8 4.5 2.1s1.7 3.1 1.4 4.8l-5.2 38.7c-.2 1.7-1.6 3-3.3 3-1.7.1-3.2-1.1-3.6-2.7L49.7 42l-3.8 12.5c-.5 1.5-1.8 2.5-3.4 2.5s-2.9-1-3.4-2.5l-2.3-7.7-1.4 12.9c-.1 1.7-1.6 3-3.4 3.1zm-5.3-34.3h.1c.8.1 1.5.7 1.6 1.5L32 59.2l2.3-21.5c.1-.8.7-1.5 1.6-1.6.8-.1 1.6.4 1.8 1.2l4.9 15.9 5.7-18.8c.2-.8.9-1.3 1.7-1.2.8 0 1.5.6 1.6 1.4l2.6 11.7 5.2-38.7c.1-.7-.1-1.4-.6-2-.5-.6-1.2-.9-1.9-.9h-50c-.7 0-1.4.3-1.9.9-.5.6-.7 1.3-.6 2l5.2 41.1 5.1-20.5c.2-.8.9-1.4 1.7-1.3.8 0 1.5.6 1.7 1.4L21.5 44 25 29.8c.2-.8.9-1.3 1.7-1.3z"/>
	</g>
</svg>
	);
};

export default Icicles;