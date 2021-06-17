import React from 'react';

function Hop(props) {
	const title = props.title || "hop";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.3 25.5c-.3-.3-.8-.5-1.3-.5-2.1.1-4.2.4-6.1 1-.4-5.4-2-10.6-2.9-13.4-.2-.5-.6-.9-1.1-1.1-.5-.2-1.1-.1-1.5.2-1.7 1.1-3.5 2.4-5.4 3.8-2.7-5.9-6.5-11-8.6-13.7-.7-.8-2.1-.8-2.7 0-2.1 2.7-5.9 7.8-8.6 13.7-1.9-1.5-3.7-2.8-5.4-3.8-.5-.3-1-.4-1.5-.2s-.9.6-1.1 1.1c-.9 2.7-2.5 7.9-2.9 13.4-2-.5-4-.8-6.1-1-.5 0-.9.1-1.3.5-.3.3-.5.8-.5 1.3v6.1c-.5 15.4 13 29.3 28.6 29.8h.2c15.6-.5 29.1-14.4 28.7-29.7v-6.2c0-.5-.2-.9-.5-1.3zm-10.9 1.6c-6.8 2.7-12.3 7.6-15.7 13.9v-6.2c0-1.5.3-3.1.9-4.8 2.3-6 7.9-10.7 12.7-14 .9 2.9 1.9 7 2.1 11.1zM32 5.9c2.2 2.9 5.1 7.3 7.2 12.1-2.8 2.6-5.5 5.7-7.2 9.3-1.7-3.6-4.3-6.7-7.2-9.3 2.1-4.8 5-9.2 7.2-12.1zM14.6 27.1c.2-4.1 1.2-8.2 2.1-11.1 4.8 3.3 10.4 8 12.7 13.9.6 1.8.9 3.4.9 4.9v6.1c-3.4-6.2-9-11.1-15.7-13.8zM6.7 33v-4.3C20 30.3 30.2 41.5 30.3 54.8v4.3C17.2 57.7 6.4 46 6.7 33zm50.6 0c.3 13-10.5 24.7-23.6 26.1v-4.3c0-13.3 10.2-24.5 23.6-26.1V33z"/>
	</g>
</svg>
	);
};

export default Hop;