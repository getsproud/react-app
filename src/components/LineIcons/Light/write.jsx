import React from 'react';

function Write(props) {
	const title = props.title || "write";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.3 7.7h-.2c-1.1 0-2.1 0-3.2-.1v-5c0-1.5-1.1-2.6-2.6-2.6H8.1C6.6 0 5.5 1.1 5.5 2.6v39.5c0 .4.2.8.4 1.1l1.1 1 .4.4L25 62.1l.4.4 1.1 1.1c.3.3.7.4 1.1.4h22.8c1.5 0 2.6-1.1 2.6-2.5v-4.3l5.4-10.9c.1-.2.2-.4.2-.7l.1-35.7c-.2-1.2-1.2-2.2-2.4-2.2zM24.9 57.9L11.6 44.6h13.3v13.3zm25 3.1h-22V43.8c0-1.2-1-2.2-2.2-2.2H8.5V3h41.4v4.6h-3.2c-1.3 0-2.4 1-2.4 2.2l-.1 35.8c0 .2.1.5.2.7l5.5 10.9V61zm5.6-15.7l-4.1 8.2-4.1-8.2V19.6h8.2v25.7zm0-28.7h-8.2v-6c2.7 0 5.4 0 8.2.1v5.9z"/>
	</g>
</svg>
	);
};

export default Write;