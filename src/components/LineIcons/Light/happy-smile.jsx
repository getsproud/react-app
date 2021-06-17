import React from 'react';

function HappySmile(props) {
	const title = props.title || "happy smile";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M18.1 25.2H28c.6 0 1.2-.4 1.4-1 .2-.6 0-1.3-.5-1.7l-9.2-6.9c-.7-.5-1.6-.4-2.1.3s-.4 1.6.3 2.1l5.6 4.2h-5.4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
		<path d="M36 25.2h9.9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-5.4l5.6-4.2c.7-.5.8-1.4.3-2.1-.5-.7-1.4-.8-2.1-.3l-9.2 6.9c-.5.4-.7 1.1-.5 1.7.1.6.7 1 1.4 1z"/>
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
		<path d="M46.3 36H17.7c-.8 0-1.6.4-2.1 1s-.7 1.4-.6 2.2c1.6 8.1 8.7 14 17 14s15.5-5.9 17-14c.2-.8-.1-1.6-.6-2.2-.5-.6-1.2-1-2.1-1zM32 50.3c-6.7 0-12.6-4.7-14-11.2h28c-1.4 6.5-7.3 11.2-14 11.2z"/>
	</g>
</svg>
	);
};

export default HappySmile;