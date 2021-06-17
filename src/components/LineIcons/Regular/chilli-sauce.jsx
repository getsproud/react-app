import React from 'react';

function ChilliSauce(props) {
	const title = props.title || "chilli sauce";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M42.8 22.1v-5.4c0-2.6-2.1-4.8-4.8-4.8h-.3l-3.3-9.5c-.2-.7-.9-1.2-1.7-1.2h-1.2c-.7 0-1.4.5-1.7 1.2l-3.3 9.5H26c-2.6 0-4.8 2.1-4.8 4.8v5.4c-1 .9-1.7 2.2-1.7 3.6V58c0 2.6 2.1 4.8 4.8 4.8h15.5c2.6 0 4.8-2.1 4.8-4.8V25.7c-.1-1.4-.8-2.7-1.8-3.6zM23 25.7c0-.7.6-1.3 1.3-1.3h15.5c.7 0 1.3.6 1.3 1.3v25.8H23V25.7zm9.1-19.2l1.9 5.4h-3.8l1.9-5.4zm-7.4 10.2c0-.7.6-1.3 1.3-1.3h12c.7 0 1.3.6 1.3 1.3V21H24.7v-4.3zm15 42.6H24.3c-.7 0-1.3-.6-1.3-1.3v-2.9h18V58c0 .7-.6 1.3-1.3 1.3z"/>
		<path d="M33.1 32.4v-1.2h-1v1.3c-1.1.3-1.9 1.2-1.9 2.4v4.6c0 2.4-.4 4.9-1.1 7.2l-.3.9c3.7-1.1 6.3-4.5 6.3-8.4v-4.3c.1-1.3-.8-2.3-2-2.5z"/>
	</g>
</svg>
	);
};

export default ChilliSauce;