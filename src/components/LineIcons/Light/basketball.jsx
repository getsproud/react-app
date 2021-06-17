import React from 'react';

function Basketball(props) {
	const title = props.title || "basketball";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 13.4c-4-5.6-9.8-9.9-16.4-11.9C37.3.1 32.7-.3 28 .2c-5.5.7-10.5 2.7-14.7 5.7-4.3 3.2-7.8 7.2-10.1 12-2 4.3-3.2 8.9-3.2 13.2-.1 7 1.9 13.7 6 19.4 4.1 5.8 9.7 9.9 16.4 12 3.2 1 6.4 1.5 9.7 1.5 1.3 0 2.6-.1 3.9-.2 5.5-.7 10.5-2.7 14.7-5.7 4.4-3.2 7.8-7.2 10.2-12 2-4.3 3.2-8.9 3.2-13.2 0-7.1-2-13.7-6.1-19.5zm3 19.3c0 1.7-.2 3.4-.6 5.1-6.4.6-12.5 2.8-17.9 6.3l-8.4-11.7 22.3-15.9c3.1 4.9 4.7 10.5 4.6 16.2zm-6.3-18.6L32.4 30l-8.3-11.7c5.1-4 9.2-9.1 11.9-15 1.6.2 3.2.6 4.8 1.1 5.4 1.7 10.3 5.1 13.9 9.7zM28.4 3.2c1.2-.1 2.3-.2 3.4-.2h1c-2.5 5-6 9.4-10.4 12.8l-6-8.4c3.5-2.2 7.6-3.6 12-4.2zM14 9.2l6 8.4c-4.7 3.1-10 5-15.6 5.7.4-1.4 1-2.8 1.6-4.1 1.8-3.9 4.5-7.2 8-10zm-11 22c0-1.6.2-3.2.5-4.8 6.5-.6 12.7-2.8 18.1-6.4L30 31.7l-22.3 16c-3.2-5-4.8-10.6-4.7-16.5zm6.4 18.9l22.3-15.9 8.4 11.7c-5.1 4-9.2 9-11.9 14.8-1.7-.2-3.3-.6-5-1.1C17.7 58 13 54.7 9.4 50.1zm26.2 10.7c-1.4.2-2.8.2-4.2.2 2.5-4.9 6-9.2 10.4-12.6l5.8 8.1c-3.5 2.2-7.6 3.7-12 4.3zM50 54.7l-5.8-8.1c4.6-3 9.8-4.9 15.3-5.6-.4 1.3-.9 2.5-1.5 3.8-1.8 3.8-4.5 7.2-8 9.9z"/>
	</g>
</svg>
	);
};

export default Basketball;