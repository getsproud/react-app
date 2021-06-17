import React from 'react';

function MessageEdit(props) {
	const title = props.title || "message edit";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M34.7 47.1H5.8c-1.5 0-2.7-1.2-2.7-2.6V14c0-.4.1-.7.2-1l24.2 14.4c1 .6 2 .9 3.1.9s2.1-.3 3.1-.9l26-15.5c.7.5 1.1 1.2 1.1 2.1v15.3c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V14c0-3.1-2.6-5.6-5.7-5.6H5.8C2.7 8.4.1 10.9.1 14v30.5c0 3.1 2.6 5.6 5.7 5.6h28.9c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.5-1.5zm-2.5-22.3c-1 .6-2.2.6-3.1 0L6.6 11.4h48.2L32.2 24.8z"/>
		<path d="M63.1 39.1l-5-5c-.5-.5-1.2-.8-1.9-.8s-1.4.3-1.9.8L43.7 44.8c-.4.4-.6.8-.7 1.3l-1.4 6.4c-.2.9.1 1.8.7 2.4.5.5 1.2.8 1.8.8.2 0 .4 0 .6-.1l6.4-1.4c.5-.1.9-.4 1.3-.7l10.7-10.7c1.1-1 1.1-2.7 0-3.7zM50.4 51.3l-5.7 1.2 1.2-5.7 10.3-10.3 4.5 4.5-10.3 10.3z"/>
	</g>
</svg>
	);
};

export default MessageEdit;