import React from 'react';

function Change(props) {
	const title = props.title || "change";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 30.3H33.1V7.8c0-3.6-3-6.6-6.6-6.6H7.8c-3.6 0-6.6 3-6.6 6.6V37c0 3.6 3 6.6 6.6 6.6h11.7V57c0 3.2 2.6 5.8 5.8 5.8H57c3.2 0 5.8-2.6 5.8-5.8V36c0-3.2-2.6-5.7-5.8-5.7zm2.3 5.7v8.9l-5.8-4.5c-.6-.4-1.4-.5-2-.1L42 46.1l-8.8-5.7c-.6-.4-1.3-.4-1.8 0L23 45.1V36c0-1.2 1-2.3 2.3-2.3H57c1.2.1 2.3 1.1 2.3 2.3zM7.8 40.1c-1.7 0-3.1-1.4-3.1-3.1V7.8c0-1.7 1.4-3.1 3.1-3.1h18.7c1.7 0 3.1 1.4 3.1 3.1v22.4h-4.3c-3.2 0-5.8 2.6-5.8 5.8v4.1H7.8zM57 59.3H25.3c-1.2 0-2.3-1-2.3-2.3v-7.9l9.1-5.3 8.8 5.8c.6.4 1.3.4 1.9 0l9.4-5.7 7 5.5V57c.1 1.2-1 2.3-2.2 2.3z"/>
		<path d="M39.8 8.1c7.6 0 13.9 5.8 14.8 13.2L52.2 19c-.7-.7-1.8-.6-2.5.1s-.6 1.8.1 2.5l5.1 4.7c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5-4.6c.7-.7.8-1.8.1-2.5-.7-.7-1.8-.8-2.5-.1L58 20.7c-1.1-9.1-8.9-16.2-18.3-16.2-1 0-1.8.8-1.8 1.8s.9 1.8 1.9 1.8z"/>
	</g>
</svg>
	);
};

export default Change;