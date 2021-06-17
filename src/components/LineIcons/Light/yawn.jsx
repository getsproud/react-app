import React from 'react';

function Yawn(props) {
	const title = props.title || "yawn";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 0C14.4 0 0 14.4 0 32s14.3 32 32 32c17.6 0 32-14.3 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
		<path d="M32 27.7c-6.9 0-12.6 5.6-12.6 12.6S25.1 52.9 32 52.9c6.9 0 12.6-5.6 12.6-12.6S38.9 27.7 32 27.7zm0 22.2c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6z"/>
		<path d="M24.5 17.2c-.5-.7-1.4-.8-2.1-.4l-8 5.6c-.7.5-.8 1.4-.4 2.1.3.4.8.6 1.2.6.3 0 .6-.1.9-.3l8-5.6c.7-.3.9-1.3.4-2z"/>
		<path d="M49.6 22.5l-8-5.6c-.7-.5-1.6-.3-2.1.4s-.3 1.6.4 2.1l8 5.6c.3.2.6.3.9.3.5 0 .9-.2 1.2-.6.4-.8.2-1.8-.4-2.2z"/>
	</g>
</svg>
	);
};

export default Yawn;