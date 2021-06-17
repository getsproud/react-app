import React from 'react';

function CodeBrowser(props) {
	const title = props.title || "code browser";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 3.2H6C3.4 3.2 1.3 5.4 1.3 8v48c0 2.6 2.1 4.8 4.8 4.8h52c2.6 0 4.8-2.1 4.8-4.8V8c-.1-2.6-2.3-4.8-4.9-4.8zM6 6.7h52c.7 0 1.3.6 1.3 1.3v8.2H4.8V8c0-.7.5-1.3 1.2-1.3zm52 50.6H6c-.7 0-1.3-.6-1.3-1.3V19.7h54.5V56c.1.7-.5 1.3-1.2 1.3z"/>
		<path d="M20.6 47h-.7v-5.8c0-.4-.2-.9-.5-1.2l-1.8-2 1.9-2.1c.3-.3.5-.7.5-1.2v-5.1h.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-2.5c-1 0-1.8.8-1.8 1.8V34l-2.5 2.7c-.6.7-.6 1.7 0 2.3l2.5 2.7v6.9c0 1 .8 1.8 1.8 1.8h2.5c1 0 1.8-.8 1.8-1.8s-.9-1.6-1.9-1.6z"/>
		<path d="M47.6 34.1v-6.2c0-1-.8-1.8-1.8-1.8h-2.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.7v5.1c0 .4.2.9.5 1.2l1.9 2.1-1.9 2.1c-.3.3-.5.7-.5 1.2V47h-.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h2.5c1 0 1.8-.8 1.8-1.8v-6.9l2.5-2.7c.6-.7.6-1.7 0-2.3l-2.5-2.8z"/>
	</g>
</svg>
	);
};

export default CodeBrowser;