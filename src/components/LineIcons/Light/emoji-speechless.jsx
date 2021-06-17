import React from 'react';

function EmojiSpeechless(props) {
	const title = props.title || "emoji speechless";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
		<path d="M45.9 44.4H18.1c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h27.7c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.4-1.5z"/>
		<path d="M25.2 22.3c0-3.1-2.5-5.7-5.7-5.7-3.1 0-5.7 2.5-5.7 5.7 0 3.1 2.5 5.7 5.7 5.7 3.1 0 5.7-2.6 5.7-5.7zm-8.3 0c0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7z"/>
		<path d="M44.5 16.6c-3.1 0-5.7 2.5-5.7 5.7 0 3.1 2.5 5.7 5.7 5.7s5.7-2.5 5.7-5.7c-.1-3.1-2.6-5.7-5.7-5.7zm0 8.4c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7c-.1 1.5-1.3 2.7-2.7 2.7z"/>
	</g>
</svg>
	);
};

export default EmojiSpeechless;