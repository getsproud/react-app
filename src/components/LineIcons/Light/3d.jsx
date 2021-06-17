import React from 'react';

function 3d(props) {
	const title = props.title || "3d";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.9 48.6v-.1c0-.1.1-.3.1-.4V15.9c0-.5-.3-1.1-.8-1.3L32.7.2c-.1 0-.1 0-.2-.1-.1 0-.1-.1-.2-.1h-.8c-.1 0-.1 0-.2.1-.1 0-.1 0-.2.1L4.8 14.6c-.5.2-.8.8-.8 1.3v32.2c0 .1 0 .3.1.4v.1c0 .1.1.2.1.3l.1.1c0 .1.1.1.2.2l.1.1c.1 0 .1.1.2.1l26.5 14.4c.2.1.5.2.7.2s.5-.1.7-.2l26.5-14.4c.1 0 .1-.1.2-.1l.1-.1.2-.2.1-.1c0-.1.1-.2.1-.3zm-2.9-3L33.5 32.8V4L57 16.8v28.8zM7 16.8L30.5 4v28.8L7 45.6V16.8zm25 44L8.7 48.1 32 35.4l23.3 12.7L32 60.8z"/>
	</g>
</svg>
	);
};

export default 3d;