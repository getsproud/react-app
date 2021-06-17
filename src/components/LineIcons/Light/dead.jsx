import React from 'react';

function Dead(props) {
	const title = props.title || "dead";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M23.3 27.5c.3.3.7.4 1 .4.4 0 .8-.2 1.1-.5.6-.6.5-1.6-.1-2.1l-3.3-3 3.3-3.1c.6-.6.6-1.5.1-2.1-.6-.6-1.5-.6-2.1-.1l-3.4 3.2-3.5-3.2c-.6-.6-1.6-.5-2.1.1-.6.6-.5 1.6.1 2.1l3.3 3.1-3.3 3.1c-.6.6-.6 1.5-.1 2.1.3.3.7.5 1.1.5.4 0 .7-.1 1-.4l3.4-3.2 3.5 3.1z"/>
		<path d="M49.7 17.1c-.6-.6-1.5-.6-2.1-.1l-3.4 3.2-3.5-3.2c-.6-.6-1.6-.5-2.1.1-.6.6-.5 1.6.1 2.1l3.3 3.1-3.3 3.1c-.6.6-.6 1.5-.1 2.1.3.3.7.5 1.1.5.4 0 .7-.1 1-.4l3.4-3.2 3.4 3.2c.3.3.7.4 1 .4.4 0 .8-.2 1.1-.5.6-.6.5-1.6-.1-2.1l-3.3-3.1 3.3-3.1c.7-.6.7-1.5.2-2.1z"/>
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
		<path d="M32 41.7c-5.5 0-10.8 2.1-14.9 5.8-.6.6-.6 1.5-.1 2.1.3.3.7.5 1.1.5.4 0 .7-.1 1-.4 3.5-3.2 8-5 12.8-5 4.8 0 9.3 1.8 12.8 5 .6.6 1.6.5 2.1-.1.6-.6.5-1.6-.1-2.1-3.9-3.8-9.1-5.8-14.7-5.8z"/>
	</g>
</svg>
	);
};

export default Dead;