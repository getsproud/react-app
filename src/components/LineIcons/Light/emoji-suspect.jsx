import React from 'react';

function EmojiSuspect(props) {
	const title = props.title || "emoji suspect";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
		<path d="M45.9 44.4H18.1c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h27.7c.8 0 1.5-.7 1.5-1.5.1-.9-.6-1.5-1.4-1.5z"/>
		<path d="M28 20.9c0-.8-.7-1.5-1.5-1.5H15.4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h11.1c.8 0 1.5-.7 1.5-1.5z"/>
		<path d="M48.6 19.4H37.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h11.1c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default EmojiSuspect;