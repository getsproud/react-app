import React from 'react';

function EmojiCool(props) {
	const title = props.title || "emoji cool";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm0 3c10.8 0 20.2 5.9 25.2 14.6H6.8C11.8 8.9 21.2 3 32 3zm0 58C16 61 3 48 3 32c0-4 .8-7.9 2.3-11.4h12.4V27c0 1.2.9 2.1 2.1 2.1h7.5c1.2 0 2.1-.9 2.1-2.1v-6.3H34V27c0 1.2.9 2.1 2.1 2.1h7.5c1.2 0 2.1-.9 2.1-2.1v-6.3h12.5c.1 0 .3 0 .4-.1C60.2 24.1 61 27.9 61 32c0 16-13 29-29 29z"/>
		<path d="M44.8 39.3c-3.5 3.2-8 5-12.7 5-4.7 0-9.3-1.8-12.7-5-.6-.6-1.6-.5-2.1.1-.6.6-.5 1.6.1 2.1 4 3.7 9.2 5.8 14.8 5.8 5.5 0 10.7-2 14.8-5.8.6-.6.6-1.5.1-2.1-.8-.7-1.7-.7-2.3-.1z"/>
	</g>
</svg>
	);
};

export default EmojiCool;