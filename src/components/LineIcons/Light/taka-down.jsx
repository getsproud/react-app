import React from 'react';

function TakaDown(props) {
	const title = props.title || "taka down";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M9.7 25.1c.8 0 1.5-.7 1.5-1.5C11.2 12.2 20.6 3 32 3s20.8 9.2 20.8 20.6c0 6.2-2.8 12.1-7.7 16-.6.5-.8 1.5-.2 2.1.3.4.7.6 1.2.6.3 0 .7-.1.9-.3 5.6-4.5 8.8-11.2 8.8-18.3C55.8 10.6 45.1 0 32 0 18.9 0 8.2 10.6 8.2 23.6c0 .8.7 1.5 1.5 1.5z"/>
		<path d="M51.5 49.9c-.8 0-1.5.7-1.5 1.5v8.2c-.1-.1-.2-.3-.4-.4L36 50.1c-.9-.6-1.9-.9-3-.9H19.5c-.7 0-1.3-.3-1.7-.7l-6.9-7.1c-.6-.6-1.5-.6-2.1 0s-.6 1.5 0 2.1l6.9 7.1c1 1.1 2.4 1.7 3.9 1.7H33c.5 0 .9.1 1.3.4L46.9 61h-6.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h11.1c.8 0 1.5-.7 1.5-1.5V51.4c0-.8-.7-1.5-1.5-1.5z"/>
		<path d="M39.5 19.2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H29.2V11c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v5.2h-1.7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h1.7v10c0 3.8 3.1 6.8 6.9 6.8 3.8 0 6.9-3.1 6.9-6.8 0-2.8-1.7-5.2-4.2-6.3-.8-.3-1.6 0-2 .8-.3.8 0 1.6.8 2 1.4.6 2.4 2 2.4 3.5 0 2.1-1.7 3.8-3.9 3.8-2.1 0-3.9-1.7-3.9-3.8v-10h10.3z"/>
	</g>
</svg>
	);
};

export default TakaDown;