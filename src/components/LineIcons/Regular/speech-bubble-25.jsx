import React from 'react';

function SpeechBubble25(props) {
	const title = props.title || "speech bubble 25";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 56.5l-8.6-15.2c1.1-3 1.7-6.1 1.7-9.3 0-15-12.2-27.2-27.1-27.2C13.4 4.8 1.3 17 1.3 32s12.2 27.2 27.2 27.2H61c.6 0 1.2-.3 1.5-.9.3-.5.3-1.2 0-1.8zm-34.1-.8C15.4 55.7 4.8 45 4.8 32S15.4 8.3 28.4 8.3C41.4 8.3 52 18.9 52 32c0 3-.6 6-1.7 8.8-.2.5-.2 1.1.1 1.5L58 55.7H28.4z"/>
		<path d="M14.1 28.9H14c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M27.9 28.9h-.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M41.7 28.9h-.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default SpeechBubble25;