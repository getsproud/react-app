import React from 'react';

function ExitUp(props) {
	const title = props.title || "exit up";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M24.1 19.2l6.3-6.4v27.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V12.7l6.4 6.5c.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4.6-.6.6-1.5 0-2.1l-7.8-7.8c-.6-.6-1.4-.9-2.2-.9-.8 0-1.6.3-2.2.9L22 17.1c-.6.6-.6 1.5 0 2.1.5.6 1.5.6 2.1 0z"/>
		<path d="M59.7 30.5H48.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h11.1c.7 0 1.3.6 1.3 1.3v16.6c0 .7-.6 1.3-1.3 1.3H4.3c-.7 0-1.3-.6-1.3-1.3V34.8c0-.7.6-1.3 1.3-1.3h11.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H4.3c-2.4 0-4.3 1.9-4.3 4.3v16.6c0 2.4 1.9 4.3 4.3 4.3h55.5c2.4 0 4.3-1.9 4.3-4.3V34.8c-.1-2.4-2-4.3-4.4-4.3z"/>
	</g>
</svg>
	);
};

export default ExitUp;