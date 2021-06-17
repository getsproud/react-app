import React from 'react';

function WebsiteBrowser(props) {
	const title = props.title || "website browser";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 3.2H6C3.4 3.2 1.3 5.4 1.3 8v48c0 2.6 2.1 4.8 4.8 4.8h52c2.6 0 4.8-2.1 4.8-4.8V8c-.1-2.6-2.3-4.8-4.9-4.8zM6 6.7h52c.7 0 1.3.6 1.3 1.3v8.2H4.8V8c0-.7.5-1.3 1.2-1.3zm52 50.6H6c-.7 0-1.3-.6-1.3-1.3V19.7h54.5V56c.1.7-.5 1.3-1.2 1.3z"/>
		<path d="M40.4 25.5H23.6c-2.6 0-4.8 2.1-4.8 4.8v7.9c0 2.6 2.1 4.8 4.8 4.8h16.7c2.6 0 4.8-2.1 4.8-4.8v-7.9c0-2.7-2.1-4.8-4.7-4.8zm1.2 12.7c0 .7-.6 1.3-1.3 1.3H23.6c-.7 0-1.3-.6-1.3-1.3v-7.9c0-.7.6-1.3 1.3-1.3h16.7c.7 0 1.3.6 1.3 1.3v7.9z"/>
		<path d="M39.9 48.4H24.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H40c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.9-1.8z"/>
	</g>
</svg>
	);
};

export default WebsiteBrowser;