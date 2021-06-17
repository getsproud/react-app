import React from 'react';

function PoliceBadge(props) {
	const title = props.title || "police badge";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 27.8c-5.2-8-.7-15.7 1.5-18.6.5-.7.4-1.7-.2-2.3l-5-5.1c-.6-.6-1.6-.7-2.3-.2-3 2.3-6.6 3.6-10.4 3.7-3.1 0-6.1-1.2-8.3-3.3-.7-.6-1.7-.6-2.4 0-2.3 2.2-5.3 3.4-8.3 3.4-3.9-.2-7.5-1.5-10.6-3.8-.7-.5-1.7-.5-2.3.2l-5 5.1c-.6.6-.7 1.6-.2 2.3 2.2 2.9 6.7 10.6 1.4 18.7-3.3 5.1-3.3 12.7-.1 19.3 4.4 8.9 13.8 14.6 26 15.6h.2c12.1-1 21.6-6.7 26-15.6 3.4-6.7 3.3-14.3 0-19.4zm-3 17.8c-3.8 7.8-12.2 12.7-23 13.7-10.8-.9-19.2-5.9-23-13.7-2.7-5.5-2.7-11.7-.1-15.9 5.9-9 1.7-17.6-.7-21.4l3-3c3.3 2.2 7.2 3.4 11.2 3.5 3.5 0 6.9-1.1 9.6-3.3 2.7 2.1 6 3.3 9.6 3.3 4-.2 7.8-1.4 11.1-3.5l3 3c-2.4 3.8-6.6 12.4-.7 21.4 2.7 4.1 2.7 10.3 0 15.9z"/>
		<path d="M38.7 30.1l-3.6-.5-1.6-3.3c-.3-.6-.9-1-1.6-1s-1.3.4-1.6 1l-1.6 3.3-3.6.5c-.7.1-1.2.6-1.4 1.2-.2.6 0 1.3.4 1.8l2.6 2.5-.6 3.6c-.1.7.2 1.3.7 1.7.5.4 1.3.4 1.8.1l3.2-1.7L35 41c.3.1.5.2.8.2.4 0 .7-.1 1-.3.5-.4.8-1.1.7-1.7l-.6-3.6 2.5-2.6c.5-.5.6-1.2.4-1.8s-.4-1-1.1-1.1zM34 33.8c-.3.3-.5.8-.5 1.2v.3l.2 1-.9-.5c-.5-.3-1.1-.3-1.6 0l-.9.5.2-1c.1-.6-.1-1.1-.5-1.5l-.7-.7.6-.1c.8-.1 1.5-.6 1.9-1.4l.2-.5.2.5c.4.7 1.1 1.2 1.9 1.4l.7.1-.8.7z"/>
		<path d="M32 16.5c-9.5 0-17.2 7.7-17.2 17.2S22.5 50.9 32 50.9s17.2-7.7 17.2-17.2c0-9.4-7.7-17.2-17.2-17.2zm0 30.9c-7.6 0-13.7-6.1-13.7-13.7C18.3 26.2 24.5 20 32 20c7.6 0 13.7 6.1 13.7 13.7S39.5 47.4 32 47.4z"/>
	</g>
</svg>
	);
};

export default PoliceBadge;