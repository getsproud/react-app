import React from 'react';

function Sun(props) {
	const title = props.title || "sun";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 18.1c-7.7 0-13.9 6.2-13.9 13.9S24.3 45.9 32 45.9 45.9 39.7 45.9 32 39.7 18.1 32 18.1zm0 24.8c-6 0-10.9-4.9-10.9-10.9S26 21.1 32 21.1 42.9 26 42.9 32 38 42.9 32 42.9z"/>
		<path d="M32 8.5c.8 0 1.5-.7 1.5-1.5V1.5C33.5.7 32.8 0 32 0s-1.5.7-1.5 1.5V7c0 .9.7 1.5 1.5 1.5z"/>
		<path d="M32 55.5c-.8 0-1.5.7-1.5 1.5v5.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V57c0-.9-.7-1.5-1.5-1.5z"/>
		<path d="M52.1 9.8l-3.5 3.5c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4s.8-.1 1.1-.4l3.5-3.5c.6-.6.6-1.5 0-2.1-.7-.6-1.6-.6-2.2 0z"/>
		<path d="M13.2 48.6l-3.5 3.5c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4s.8-.1 1.1-.4l3.5-3.5c.6-.6.6-1.5 0-2.1-.6-.5-1.6-.5-2.2 0z"/>
		<path d="M62.5 30.5H57c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M7 30.5H1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5H7c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.5-1.5z"/>
		<path d="M50.8 48.6c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l3.5 3.5c.3.3.7.4 1.1.4s.8-.1 1.1-.4c.6-.6.6-1.5 0-2.1l-3.6-3.5z"/>
		<path d="M11.9 9.8c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l3.5 3.5c.3.3.7.4 1.1.4s.8-.1 1.1-.4c.6-.6.6-1.5 0-2.1l-3.6-3.5z"/>
	</g>
</svg>
	);
};

export default Sun;