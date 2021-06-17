import React from 'react';

function MessagePlus(props) {
	const title = props.title || "message plus";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.2 11.1H5.8c-3.1 0-5.7 2.5-5.7 5.7v30.4c0 3.1 2.5 5.7 5.7 5.7h29c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-29c-1.5 0-2.7-1.2-2.7-2.7V16.8c0-.7.3-1.4.8-1.9l25 15c1 .6 2 .9 3.1.9s2.2-.3 3.1-.9l25-15c.5.5.8 1.1.8 1.9V32c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V16.8c0-3.1-2.5-5.7-5.7-5.7zM33.6 27.4c-1 .6-2.2.6-3.1 0L8.4 14.1h47.2l-22 13.3z"/>
		<path d="M59.6 41.6h-6.8v-6.8c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v6.8H43c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h6.8v6.8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-6.8h6.8c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default MessagePlus;