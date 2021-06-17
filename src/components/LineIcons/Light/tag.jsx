import React from 'react';

function Tag(props) {
	const title = props.title || "tag";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.4 9.7c-.3-.3-.8-.5-1.3-.4l-15.3 2.1c-4-6-11.4-12.9-23.4-11.1-.8.1-1.4.9-1.3 1.7.1.8.9 1.4 1.7 1.3 9.8-1.5 16 3.5 19.7 8.5L31.7 13c-.3 0-.6.2-.8.4l-27.3 26c-.3.3-.5.7-.5 1.1s.2.8.5 1.1l23.3 22c.3.3.7.4 1 .4s.7-.1 1-.4l27.4-25.9c.2-.2.4-.5.5-.9l4-25.8c.1-.5 0-1-.4-1.3zM54 35.8L28 60.4l-21.1-20L32.7 16l9.7-1.4c1.7 3 2.5 5.4 2.6 5.7.2.6.8 1.1 1.4 1.1.1 0 .3 0 .4-.1.8-.2 1.2-1.1 1-1.9 0-.1-.7-2.3-2.3-5.2l12-1.7L54 35.8z"/>
	</g>
</svg>
	);
};

export default Tag;