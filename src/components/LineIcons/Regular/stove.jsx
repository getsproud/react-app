import React from 'react';

function Stove(props) {
	const title = props.title || "stove";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 1.3H6C3.4 1.3 1.3 3.4 1.3 6v52c0 2.6 2.1 4.8 4.8 4.8h52c2.6 0 4.8-2.1 4.8-4.8V6c-.1-2.6-2.3-4.7-4.9-4.7zM59.3 58c0 .7-.6 1.3-1.3 1.3H6c-.7 0-1.3-.6-1.3-1.3V6c0-.7.6-1.3 1.3-1.3h52c.7 0 1.3.6 1.3 1.3v52z"/>
		<path d="M19.4 10.4c-4.2 0-7.7 3.5-7.7 7.7s3.5 7.7 7.7 7.7 7.7-3.5 7.7-7.7c0-4.3-3.5-7.7-7.7-7.7zm0 11.9c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2z"/>
		<path d="M44.6 10.4c-4.2 0-7.7 3.5-7.7 7.7s3.5 7.7 7.7 7.7 7.7-3.5 7.7-7.7c0-4.3-3.4-7.7-7.7-7.7zm0 11.9c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2z"/>
		<path d="M19.4 32.7c-4.2 0-7.7 3.5-7.7 7.7s3.5 7.7 7.7 7.7 7.7-3.5 7.7-7.7-3.5-7.7-7.7-7.7zm0 11.9c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2z"/>
		<path d="M44.6 32.7c-4.2 0-7.7 3.5-7.7 7.7s3.5 7.7 7.7 7.7 7.7-3.5 7.7-7.7-3.4-7.7-7.7-7.7zm0 11.9c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2z"/>
		<path d="M39.7 51.9h-1.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h1.5c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M49 51.9h-1.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H49c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Stove;