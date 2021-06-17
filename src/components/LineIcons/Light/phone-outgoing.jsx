import React from 'react';

function PhoneOutgoing(props) {
	const title = props.title || "phone outgoing";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.1 46.1L52.5 40c-1.8-1.2-4.2-.7-5.5 1l-2.7 3.7c-.3.4-1 .5-1.5.2-12.9-7.7-21-18.5-23.9-22.8-.2-.2-.2-.5-.1-.6 0-.2.2-.4.4-.5l3.9-2.6c.9-.6 1.5-1.5 1.7-2.5.2-1 0-2.1-.6-2.9l-6.4-9.2c-1.2-1.7-3.6-2.2-5.4-1.2l-8.9 5c-.4.2-.7.5-1 .7-6.5 6.9.3 23.5 15.4 37.8C29.1 56.7 41.6 63 50.2 63c3 0 5.4-.7 7.3-2.3.3-.2.6-.6.8-.9l5.2-8.4c1-1.8.5-4.1-1.4-5.3zm-1.2 3.7l-5.2 8.4c-.1.1-.1.2-.2.2-5.8 4.9-22.1-1.7-35.5-14.5C6.5 31.2-.4 15.8 4.7 10.4l.2-.2 8.9-5c.2-.1.4-.1.5-.1.4 0 .7.2.9.5l6.4 9.2c.2.3.2.5.1.6 0 .2-.2.4-.4.5l-3.9 2.6c-.9.6-1.5 1.5-1.7 2.5-.2 1 0 2 .6 2.9 3 4.4 11.4 15.6 24.8 23.7 1.8 1.1 4.2.6 5.4-1l2.7-3.7c.3-.4 1-.5 1.5-.2l9.6 6.1c.7.1.8.6.6 1z"/>
		<path d="M40.7 11.9l6.5-6.1v20.7c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V6l6.2 5.9c.3.3.7.4 1 .4.4 0 .8-.2 1.1-.5.6-.6.5-1.6-.1-2.1l-8.9-8.4c-.6-.5-1.5-.5-2.1 0l-8.9 8.4c-.6.6-.6 1.5-.1 2.1.7.7 1.7.7 2.3.1z"/>
	</g>
</svg>
	);
};

export default PhoneOutgoing;