import React from 'react';

function RoundBoxCross(props) {
	const title = props.title || "round box cross";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M42.3 21.7c-.7-.7-1.8-.7-2.5 0L32 29.5l-7.8-7.8c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l7.8 7.8-7.8 7.8c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5s.9-.2 1.2-.5l7.8-7.8 7.8 7.8c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.7.7-1.8 0-2.5L34.5 32l7.8-7.8c.7-.7.7-1.8 0-2.5z"/>
		<path d="M57 1.3H7C3.8 1.3 1.3 3.8 1.3 7v50c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V7c-.1-3.2-2.7-5.7-5.9-5.7zM59.3 57c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3V7c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3v50z"/>
	</g>
</svg>
	);
};

export default RoundBoxCross;