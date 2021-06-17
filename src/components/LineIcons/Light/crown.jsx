import React from 'react';

function Crown(props) {
	const title = props.title || "crown";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63 4.9c-.7-.4-1.6-.4-2.3.1L45.9 15 33.4 4.6c-.8-.6-1.8-.6-2.7 0L18 15.3 3.3 5.5C2.6 5 1.7 4.9 1 5.4c-.7.4-1.1 1.2-1 2l4.5 49.4c.1 1.7 1.6 3.1 3.4 3.1h48c1.7 0 3.1-1.3 3.4-3l4.7-50c.1-.8-.3-1.6-1-2zm-7 51.9H8c-.2 0-.4-.1-.4-.3L6.2 42.3h51.4l-1.3 14.2c0 .1-.2.3-.3.3zm1.9-17.5H6L3.2 9l15.1 10L32.1 7.4l13.6 11.3L60.8 8.4l-2.9 30.9z"/>
		<path d="M20.3 46.6c-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9c1.6 0 2.9-1.3 2.9-2.9s-1.3-2.9-2.9-2.9z"/>
		<path d="M32 46.6c-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9c1.6 0 2.9-1.3 2.9-2.9s-1.3-2.9-2.9-2.9z"/>
		<path d="M43.7 46.6c-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9-1.3-2.9-2.9-2.9z"/>
	</g>
</svg>
	);
};

export default Crown;