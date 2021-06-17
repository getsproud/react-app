import React from 'react';

function MessageMinus(props) {
	const title = props.title || "message minus";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.3 11.1H5.7c-3.1 0-5.7 2.5-5.7 5.6v30.6c0 3.1 2.6 5.6 5.7 5.6h29c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-29c-1.5 0-2.7-1.2-2.7-2.6V16.7c0-.3.1-.7.2-.9L28.9 31c1 .6 2 .9 3.1.9s2.2-.3 3.1-.9l25.7-15.3c.1.3.2.6.2.9V32c0 .8.7 1.5 1.5 1.5S64 32.8 64 32V16.7c0-3.1-2.6-5.6-5.7-5.6zM33.6 28.4c-1 .6-2.2.6-3.2 0L6.3 14.1h51.3l-24 14.3z"/>
		<path d="M62.5 41.6H43.1c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h19.4c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default MessageMinus;