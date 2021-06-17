import React from 'react';

function Shield(props) {
	const title = props.title || "shield";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 64c-.9 0-1.7-.2-2.5-.5C14.8 57.7 5.3 44 5.3 28.5V12.6c0-3.2 2.1-6 5.2-6.8L30 .3c1.3-.4 2.6-.4 3.8 0l19.7 5.5c3.1.9 5.2 3.7 5.2 6.8v15.9c0 15.4-9.5 29.2-24.1 35-.8.3-1.7.5-2.6.5zm-.1-61c-.4 0-.7.1-1.1.2L11.3 8.6c-1.8.5-3 2.1-3 3.9v15.9c0 14.3 8.8 26.9 22.3 32.2.9.4 1.9.4 2.8 0 13.5-5.4 22.2-18 22.2-32.2V12.6c0-1.8-1.2-3.5-3-3.9L33 3.2c-.4-.1-.7-.2-1.1-.2z"/>
	</g>
</svg>
	);
};

export default Shield;