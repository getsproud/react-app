import React from 'react';

function Text(props) {
	const title = props.title || "text";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.3 1.3H8.7c-4.1 0-7.5 3.4-7.5 7.5v2.5c.1.9.8 1.7 1.8 1.7s1.8-.8 1.8-1.8V8.7c0-2.2 1.8-4 4-4h21.5v54.5H19.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h25.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-11V4.8h21.5c2.2 0 4 1.8 4 4v2.5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V8.7c-.1-4.1-3.5-7.4-7.6-7.4z"/>
	</g>
</svg>
	);
};

export default Text;