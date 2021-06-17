import React from 'react';

function SpeechBubble21(props) {
	const title = props.title || "speech bubble 21";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 8C14.8 8 1.3 16.6 1.3 27.6c0 10.7 12 17.3 23.5 19.1l4.5 7.7c.6 1 1.6 1.5 2.7 1.5s2.1-.6 2.7-1.5l4.5-7.7c6.1-.9 11.6-3 15.7-5.9 5-3.6 7.8-8.3 7.8-13.2C62.8 16.6 49.2 8 32 8zm20.9 30c-3.8 2.7-9.2 4.6-15 5.4-.5.1-1 .4-1.3.9L32 52.1l-4.6-7.9c-.3-.5-.7-.8-1.3-.9C15.5 42 4.8 36.1 4.8 27.6 4.8 18.8 17 11.5 32 11.5s27.3 7.2 27.3 16.1c0 3.8-2.3 7.5-6.4 10.4z"/>
		<path d="M22 25h18.3c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H22c-1 0-1.8.8-1.8 1.8S21.1 25 22 25z"/>
		<path d="M44.7 30H22c-1 0-1.8.8-1.8 1.8s.8 1.7 1.8 1.7h22.7c1 0 1.8-.8 1.8-1.7s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default SpeechBubble21;