import React from 'react';

function ArrowExpandAlt(props) {
	const title = props.title || "arrow expand alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M26.4 35.1L4.9 56.8v-5c0-1-.8-1.7-1.7-1.7-1 0-1.7.8-1.7 1.8l.1 7.8v.1c.1 1.6 1.4 2.8 3 3H12.5c1 0 1.7-.8 1.7-1.8s-.8-1.8-1.8-1.7H7.5L29 37.6c.7-.7.7-1.8 0-2.5-.8-.7-1.9-.7-2.6 0z"/>
		<path d="M62.7 4.2c-.1-1.6-1.4-2.8-3-3H51.8c-1 0-1.7.8-1.7 1.8s.8 1.7 1.8 1.7h4.9L35.2 26.5c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.5 0 .9-.2 1.2-.5L59.2 7.3v5.3c0 1 .8 1.8 1.7 1.8 1 0 1.7-.8 1.8-1.7V4.2z"/>
	</g>
</svg>
	);
};

export default ArrowExpandAlt;