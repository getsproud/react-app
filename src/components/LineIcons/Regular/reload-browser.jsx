import React from 'react';

function ReloadBrowser(props) {
	const title = props.title || "reload browser";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 3.2H6C3.4 3.2 1.3 5.4 1.3 8v48c0 2.6 2.1 4.8 4.8 4.8h52c2.6 0 4.8-2.1 4.8-4.8V8c-.1-2.6-2.3-4.8-4.9-4.8zM6 6.7h52c.7 0 1.3.6 1.3 1.3v8.2H4.8V8c0-.7.5-1.3 1.2-1.3zm52 50.6H6c-.7 0-1.3-.6-1.3-1.3V19.7h54.5V56c.1.7-.5 1.3-1.2 1.3z"/>
		<path d="M31.1 35c0-1-.8-1.8-1.8-1.8h-5.6c1.6-2.7 4.7-4.5 8.1-4.5 3.2 0 6.1 1.5 7.8 4 .5.8 1.6 1 2.4.5s1-1.6.5-2.4c-2.4-3.4-6.4-5.5-10.7-5.5-5.8 0-10.9 3.8-12.4 9.3-.1.5 0 1.1.3 1.5.3.4.8.7 1.4.7h8.2c1-.1 1.8-.9 1.8-1.8z"/>
		<path d="M42.8 39.2h-7.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4.7c-1.6 3.1-4.8 5-8.4 5-2.6 0-5.1-1.1-6.9-3.1-.7-.7-1.8-.8-2.5-.1-.7.7-.8 1.8-.1 2.5 2.4 2.7 5.9 4.2 9.5 4.2 5.9 0 11.1-4.1 12.6-9.9.1-.5 0-1.1-.3-1.5-.2-.4-.7-.7-1.3-.7z"/>
	</g>
</svg>
	);
};

export default ReloadBrowser;