import React from 'react';

function Ai(props) {
	const title = props.title || "ai";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54 10.6L39 .3c-.3-.2-.6-.3-.9-.3H10.8C10 0 9.3.7 9.3 1.5v61c0 .8.7 1.5 1.5 1.5h42.4c.8 0 1.5-.7 1.5-1.5V11.8c0-.5-.3-1-.7-1.2zM51.7 61H12.3V3h25.3l14 9.6V61z"/>
		<path d="M28.1 28.7c-.3-.5-.8-.8-1.3-.8s-1 .3-1.3.8l-8.3 14.5c-.4.7-.2 1.6.6 2 .7.4 1.6.2 2-.6l1.9-3.4h10.1l1.9 3.4c.3.5.8.8 1.3.8.3 0 .5-.1.7-.2.7-.4 1-1.3.6-2l-8.2-14.5zm-4.6 9.6l3.3-5.8 3.3 5.8h-6.6z"/>
		<path d="M42.9 33.1c-.8 0-1.5.7-1.5 1.5v9.3c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-9.3c0-.8-.7-1.5-1.5-1.5z"/>
		<path d="M42.9 31c.9 0 1.6-.7 1.6-1.6s-.7-1.6-1.6-1.6-1.6.7-1.6 1.6.7 1.6 1.6 1.6z"/>
	</g>
</svg>
	);
};

export default Ai;