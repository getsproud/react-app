import React from 'react';

function MessageAttachement(props) {
	const title = props.title || "message attachement";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.3 4H5.7C2.6 4 0 6.5 0 9.7v30.4c0 3.1 2.6 5.7 5.7 5.7h20.7c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H5.7c-1.5 0-2.7-1.2-2.7-2.7V9.7c0-.5.2-1 .4-1.5l25.4 15.4c1 .6 2 .9 3.1.9s2.2-.3 3.1-.9L60.5 8.2c.3.4.5.9.5 1.5v15.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V9.7C64 6.5 61.4 4 58.3 4zM33.6 21.1c-1 .6-2.2.6-3.1 0L7.2 7h49.7L33.6 21.1z"/>
		<path d="M54.5 29.2c-1-1-2.6-1-3.5 0l-6.4 6.4c-1 1-1 2.6 0 3.5l2.2 2.2-3.8 3.8-2.2-2.2c-1-1-2.6-1-3.5 0l-6.4 6.4c-1 1-1 2.6 0 3.5l6.4 6.4c.5.5 1.1.7 1.8.7s1.3-.2 1.8-.7l6.4-6.4c1-1 1-2.6 0-3.5L45 47.2l3.8-3.8 2.2 2.2c.5.5 1.1.7 1.8.7s1.3-.2 1.8-.7l6.4-6.4c1-1 1-2.6 0-3.5l-6.5-6.5zM39 56.8l-5.7-5.7 5.7-5.7 5.7 5.7-5.7 5.7zm13.7-13.7L47 37.4l5.7-5.7 5.7 5.7-5.7 5.7z"/>
	</g>
</svg>
	);
};

export default MessageAttachement;