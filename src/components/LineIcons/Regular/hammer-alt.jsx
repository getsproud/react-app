import React from 'react';

function HammerAlt(props) {
	const title = props.title || "hammer alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.7 9.1H38.9V4.9c0-2-1.6-3.6-3.6-3.6h-6.6c-2 0-3.6 1.6-3.6 3.6v4.2H14.3c-4 0-7.2 3.2-7.2 7.2v7.3c0 4 3.2 7.2 7.2 7.2h10.8v28.3c0 2 1.6 3.6 3.6 3.6h6.6c2 0 3.6-1.6 3.6-3.6V30.8h10.8c4 0 7.2-3.2 7.2-7.2v-7.3c0-4-3.2-7.2-7.2-7.2zM28.6 4.9c0-.1 0-.1.1-.1h6.6c.1 0 .1.1.1.1v4.2h-6.8V4.9zm6.8 54.2c0 .1 0 .1-.1.1h-6.6c-.1 0-.1-.1-.1-.1V30.8h6.8v28.3zm18-35.5c0 2.1-1.7 3.7-3.7 3.7H14.3c-2.1 0-3.7-1.7-3.7-3.7v-7.3c0-2.1 1.7-3.7 3.7-3.7h35.2c2.1 0 3.7 1.7 3.7 3.7v7.3z"/>
	</g>
</svg>
	);
};

export default HammerAlt;