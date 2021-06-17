import React from 'react';

function RightAlt(props) {
	const title = props.title || "right alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58c-2.5 0-5-.4-7.3-1 0-.1.1-.3.1-.5V36.3c0-1.4 1.2-2.6 2.6-2.6h9.3l-5.4 5.4c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5s.9-.2 1.2-.5l8.4-8.4c.7-.7.7-1.8 0-2.5l-8.4-8.4c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l5.4 5.4h-9.3c-3.4 0-6.1 2.7-6.1 6.1V57C11.6 52.9 4.8 43.2 4.8 32 4.8 17 17 4.8 32 4.8S59.3 17 59.3 32 47 59.3 32 59.3z"/>
	</g>
</svg>
	);
};

export default RightAlt;