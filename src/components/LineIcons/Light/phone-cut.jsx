import React from 'react';

function PhoneCut(props) {
	const title = props.title || "phone cut";

	return (
		<svg height="64" id="Layer_2" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.1 45.6l-9.6-6.1c-1.8-1.2-4.2-.7-5.5 1l-2.7 3.7c-.3.4-1 .5-1.5.2-2-1.2-4-2.5-5.9-3.9-.7-.5-1.6-.4-2.1.3s-.4 1.6.3 2.1c2 1.5 4 2.9 6.1 4.1 1.8 1.1 4.2.6 5.4-1l2.7-3.7c.3-.4 1-.5 1.5-.2l9.6 6.1c.4.3.6.8.3 1.2l-5.2 8.5c-.1.1-.1.2-.2.2-4.6 4-16.1.7-27.8-8-.7-.5-1.6-.4-2.1.3s-.4 1.6.3 2.1c9 6.6 17.7 10.2 24.2 10.2 3 0 5.5-.8 7.3-2.3.3-.3.6-.6.8-.9l5.2-8.5c1.3-1.9.8-4.3-1.1-5.4z"/>
		<path d="M57.9 7.3c-.6-.6-1.5-.6-2.1 0l-27.1 26c-4.9-4.9-8.1-9.4-9.7-11.6-.2-.2-.2-.5-.1-.6 0-.2.2-.4.4-.5l3.9-2.6c.9-.6 1.5-1.5 1.7-2.5.2-1 0-2.1-.6-2.9l-6.4-9.2c-1.2-1.7-3.6-2.2-5.4-1.2l-8.9 5c-.6-.1-.9.2-1.2.4-6.3 6.7 0 22.7 14.3 36.9L6.1 54.6c-.6.6-.6 1.5 0 2.1.3.3.7.5 1.1.5.4 0 .7-.1 1-.4L57.8 9.4c.6-.6.6-1.5.1-2.1zM4.6 9.7l.2-.2 8.9-5c.5-.3 1.1-.1 1.4.3l6.4 9.2c.1.2.2.4.1.6 0 .2-.2.4-.4.6l-3.9 2.6c-.9.6-1.5 1.5-1.7 2.5-.2 1 0 2 .6 2.9 1.6 2.4 5 7 10 12l-7.5 7.2C6.1 29.8-.4 15 4.6 9.7z"/>
	</g>
</svg>
	);
};

export default PhoneCut;