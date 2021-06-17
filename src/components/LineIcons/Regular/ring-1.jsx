import React from 'react';

function Ring1(props) {
	const title = props.title || "ring 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M34.4 17.5l4.5-2.6c.5-.3.9-.9.9-1.5v-7c0-.6-.3-1.2-.9-1.5l-6-3.5c-.5-.3-1.2-.3-1.8 0l-6 3.5c-.5.3-.9.9-.9 1.5v7c0 .6.3 1.2.9 1.5l4.5 2.6C18.2 18.7 9.3 28.4 9.3 40.1c0 12.5 10.2 22.7 22.7 22.7s22.7-10.2 22.7-22.7c0-11.7-8.9-21.4-20.3-22.6zm-6.7-10L32 5l4.3 2.5v4.9L32 14.9l-4.3-2.5V7.5zM32 59.3c-10.6 0-19.2-8.6-19.2-19.2S21.4 20.9 32 20.9s19.2 8.6 19.2 19.2S42.6 59.3 32 59.3z"/>
	</g>
</svg>
	);
};

export default Ring1;