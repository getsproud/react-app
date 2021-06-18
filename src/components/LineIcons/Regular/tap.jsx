import React from 'react';

function Tap(props) {
	const title = props.title || "tap";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M21.8 17.3c1-.1 1.7-1 1.5-1.9-.2-2.2.3-4.3 1.4-6.2 2.8-4.4 8.8-5.7 13.2-2.9 3.1 2 4.8 5.5 4.4 9.1-.1 1 .6 1.8 1.5 1.9h.2c.9 0 1.6-.7 1.7-1.6.6-5-1.7-9.7-6-12.4-6.1-3.9-14.2-2.1-18 4-1.6 2.5-2.3 5.5-2 8.5.3.9 1.2 1.6 2.1 1.5z"/>
		<path d="M50.1 39.8c-4.6-5.9-10.7-8.8-13.3-9.9V29v-2.7-4V18c0-2.2-1.7-4-3.9-4.2-2.2-.1-4 1.4-4.3 3.6l-.4 2.7c-.8 5.1-1.7 10.4-2.6 15.6-.1.5-.3 1-.4 1.3-.2-.4-.5-.9-.7-1.3-1-2-1.5-2.9-2-3.4-.9-1-2.2-2.2-4.2-2.6-1-.2-2.4 0-3.3.5-1 .6-1.6 1.3-1.7 2.2-.2.9 0 1.7.6 2.6 1.3 1.9 2.3 4.2 3.2 6.8.1.4.3.9.5 1.4.2.6.5 1.2.6 1.8.6 2 1.6 3.4 2.4 4.4 0 0 3.4 4.1 4.6 9.1.6 2.5 2.9 4.3 5.6 4.3l11.1-.1c1.8-.1 3.3-1.5 3.5-3.2l.3-1.9.1-.4c.2-.6.4-1.4.8-2.2 2.3-3.9 3.5-8.8 4.2-12.3.2-1 0-2-.7-2.9zM47.3 42c-.8 4.5-2.2 8.5-3.8 11.3 0 .1-.1.1-.1.2-.5 1-.7 2-.9 2.8l-.1.5c0 .1 0 .2-.1.2l-.3 2c0 .1-.2.2-.2.2l-11 .1c-1 0-1.9-.7-2.2-1.7-1.4-5.8-5.2-10.3-5.4-10.5-.9-1.1-1.4-2-1.7-3-.2-.7-.5-1.4-.7-2.1-.2-.4-.3-.9-.5-1.3-1-2.9-2.1-5.4-3.5-7.5.2-.1.6-.1.7-.1.8.2 1.4.6 2.3 1.6.2.3 1 1.7 1.4 2.6.5.9.9 1.8 1.3 2.4.8 1.2 1.8 1.4 2.3 1.4 1.5 0 2.5-1.2 3.1-2.2.5-.8.8-1.7 1-2.4v-.1c1-5.2 1.8-10.6 2.7-15.8l.4-2.7c.1-.5.3-.6.6-.6.4 0 .6.3.6.8V31.2c0 .8.5 1.4 1.2 1.7.2-.1 7.7 2.3 12.9 9.1 0-.1 0-.1 0 0 0-.1 0-.1 0 0z"/>
	</g>
</svg>
	);
};

export default Tap;