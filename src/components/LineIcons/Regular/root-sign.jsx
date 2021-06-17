import React from 'react';

function RootSign(props) {
	const title = props.title || "root sign";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M16.6 46.2c-1.1 0-2.2-.5-2.9-1.5L7.8 37l-.1-.1c-.1 0-.1 0-.1.1l-3.2 3.7c-.6.7-1.7.8-2.5.2-.7-.6-.8-1.7-.2-2.5l3.2-3.7c.7-.8 1.8-1.3 2.9-1.3 1.1 0 2.1.6 2.8 1.5l5.9 7.8s.1.1.2.1.1-.1.1-.1L26.4 20c.6-1.4 1.9-2.2 3.4-2.2H61c1 0 1.8.8 1.8 1.8s-.8 1.7-1.8 1.7H29.8c-.1 0-.1 0-.2.1L20 44c-.5 1.2-1.6 2.1-2.9 2.2h-.5z"/>
	</g>
</svg>
	);
};

export default RootSign;