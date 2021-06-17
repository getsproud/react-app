import React from 'react';

function CornerDoubleUpLeft(props) {
	const title = props.title || "corner double up left";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.4 22.3H23.9c.1-.1.1-.2.2-.3l9.1-10.8c.6-.7.5-1.8-.2-2.5-.7-.6-1.8-.5-2.5.2l-9.1 10.8c-2.1 2.5-2.1 6.1 0 8.6l9.1 10.8c.3.4.8.6 1.3.6.4 0 .8-.1 1.1-.4.7-.6.8-1.7.2-2.5L24 26c-.1-.1-.1-.2-.2-.3h31.6c2.1 0 3.8 1.7 3.8 3.8v24.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V29.6c0-4.1-3.3-7.3-7.4-7.3z"/>
		<path d="M14.6 11.2c.6-.7.5-1.8-.2-2.5-.7-.6-1.8-.5-2.5.2L2.8 19.7c-2.1 2.5-2.1 6.1 0 8.6l9.1 10.8c.3.4.8.6 1.3.6.4 0 .8-.1 1.1-.4.7-.6.8-1.7.2-2.5L5.5 26c-1-1.2-1-2.9 0-4.1l9.1-10.7z"/>
	</g>
</svg>
	);
};

export default CornerDoubleUpLeft;