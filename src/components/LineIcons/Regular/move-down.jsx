import React from 'react';

function MoveDown(props) {
	const title = props.title || "move down";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M45.8 48.7l-11.5 9.7c-.2.1-.3.2-.5.3V3c0-1-.8-1.8-1.8-1.8S30.3 2 30.3 3v55.8c-.2-.1-.3-.2-.5-.3l-11.5-9.7c-.7-.6-1.8-.5-2.5.2-.6.7-.5 1.8.2 2.5l11.5 9.7c1.3 1.1 2.9 1.6 4.5 1.6s3.2-.5 4.5-1.6L48 51.4c.7-.6.8-1.7.2-2.5s-1.7-.8-2.4-.2z"/>
		<path d="M7.2 1.6c-1 0-1.8.8-1.8 1.8v32.9c0 1 .8 1.8 1.8 1.8S9 37.2 9 36.2V3.3c0-1-.8-1.7-1.8-1.7z"/>
		<path d="M56.8 1.6c-1 0-1.8.8-1.8 1.8v32.9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-33c-.1-1-.9-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default MoveDown;