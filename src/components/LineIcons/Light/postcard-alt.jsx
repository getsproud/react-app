import React from 'react';

function PostcardAlt(props) {
	const title = props.title || "postcard alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.8 12.5H2.2c-1.2 0-2.2 1-2.2 2.2v34.7c0 1.2 1 2.2 2.2 2.2h59.7c1.2 0 2.2-1 2.2-2.2V14.6c-.1-1.2-1.1-2.1-2.3-2.1zm-.8 36H3v-33h58v33z"/>
		<path d="M32 40.4c.8 0 1.5-.7 1.5-1.5V22.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v16.6c0 .9.7 1.5 1.5 1.5z"/>
		<path d="M9.8 32.1h11.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H9.8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
		<path d="M43.5 34.9h10.3c1 0 1.9-.8 1.9-1.9V22.7c0-1-.8-1.9-1.9-1.9H43.5c-1 0-1.9.8-1.9 1.9V33c0 1 .8 1.9 1.9 1.9zm1.1-11.1h8.1v8.1h-8.1v-8.1z"/>
		<path d="M9.8 40.4h13.9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H9.8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
	</g>
</svg>
	);
};

export default PostcardAlt;