import React from 'react';

function Crown(props) {
	const title = props.title || "crown";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.1 22.7c-.6-.4-1.4-.3-2 .2L46.6 33.4s-.1.1-.2 0c-.1 0-.1 0-.1-.1L34 14.1c2.3-.8 4-3.1 4-5.7 0-3.4-2.7-6.1-6.1-6.1-3.4 0-6.1 2.7-6.1 6.1 0 2.6 1.7 4.9 4 5.7L17.6 33.4l-.1.1h-.2L4.9 22.9c-.6-.5-1.4-.6-2-.2s-1 1.1-.8 1.8L7 50.4c0 .3.2.5.3.7v9c0 1 .8 1.8 1.8 1.8H55c1 0 1.8-.8 1.8-1.8v-9c.1-.2.3-.4.3-.7L62 24.6c.1-.8-.3-1.5-.9-1.9zM32 5.8c1.4 0 2.6 1.2 2.6 2.6S33.4 11 32 11c-1.4 0-2.6-1.2-2.6-2.6s1.2-2.6 2.6-2.6zM10.8 58.3v-6.5h42.4v6.5H10.8zm43-10H10.2L6.4 28.8l8.6 7.3c.8.7 1.9 1 2.9.8 1.1-.2 2-.8 2.6-1.7L32 17.4l11.4 17.9c.6.9 1.5 1.5 2.6 1.7 1.1.2 2.1-.1 2.9-.8l8.6-7.3-3.7 19.4z"/>
		<path d="M32.2 31.5c0-.1-.1-.1-.2-.1s-.1 0-.2.1c-.9 1.4-1.9 3.1-2.8 4.4-.6 1-.6 2.2 0 3.2.9 1.4 1.9 3 2.8 4.4.1.1.2.1.3 0 .9-1.4 1.9-3.1 2.8-4.4.6-1 .6-2.2 0-3.2-.8-1.4-1.8-3-2.7-4.4z"/>
	</g>
</svg>
	);
};

export default Crown;