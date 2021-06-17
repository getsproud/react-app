import React from 'react';

function Brocolli(props) {
	const title = props.title || "brocolli";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.4 18.9c0-5.9-4.7-10.7-10.5-10.7-1.4 0-2.8.3-4.1.9-1.2-4.5-5.3-7.8-10.1-7.8-4.7 0-8.8 3.2-10 7.6-1.1-.4-2.4-.6-3.6-.6C12.3 8.2 7.6 13 7.6 18.9c0 3.8 2 7.3 5.1 9.2-.2.7-.2 1.5-.2 2.2C12.5 36.2 17.2 41 23 41c.9 0 1.7-.1 2.5-.3l1 16.6c.3 3.1 2.8 5.5 5.9 5.5s5.7-2.4 5.9-5.6l1-16.3c.3 0 .7.1 1 .1 5.8 0 10.5-4.8 10.5-10.7 0-.7-.1-1.3-.2-2 3.6-1.8 5.8-5.4 5.8-9.4zM32.5 59.3c-1.3 0-2.3-1-2.5-2.3l-1.1-17.9c1.2-.8 2.1-1.7 2.9-2.8 1 1.6 2.4 2.8 4.1 3.6l-1 17c-.1 1.4-1.1 2.4-2.4 2.4zm15.6-33.6c-.4.2-.8.5-1 .9s-.2.9-.1 1.3c.3.7.4 1.5.4 2.4 0 3.9-3.1 7.2-7 7.2-.7 0-1.4-.1-2.1-.3-2.5-.8-4.2-2.9-4.6-5.7-.1-.9-.8-1.5-1.7-1.5-.8 0-1.6.6-1.7 1.4-.4 2.2-1.8 4.1-4 5.3-1 .5-2.1.8-3.3.8-3.9 0-7-3.2-7-7.2 0-.9.2-1.7.5-2.5.3-.9-.1-1.9-1-2.2-2.7-1.1-4.4-3.7-4.4-6.6 0-4 3.1-7.2 7-7.2 1.4 0 2.8.4 3.9 1.2.5.4 1.2.4 1.8.1.6-.3.9-.9 1-1.5.2-3.8 3.2-6.8 7-6.8s7 3.2 7 7.2c0 .7.4 1.3 1 1.6.6.3 1.3.2 1.9-.2 1.3-1 2.8-1.6 4.4-1.6 3.9 0 7 3.2 7 7.2-.2 3-2.1 5.7-5 6.7z"/>
	</g>
</svg>
	);
};

export default Brocolli;