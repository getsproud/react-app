import React from 'react';

function WhiteboardAlt(props) {
	const title = props.title || "whiteboard alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.2 1.3H7.8C4.6 1.3 2 3.8 2 7v20.5c0 3.2 2.6 5.8 5.8 5.8h22.9V42l-.1.1-17.1 17.7c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.5 0 .9-.2 1.3-.5L30.7 47v12c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V47.1l13.7 15c.3.4.8.6 1.3.6.4 0 .8-.2 1.2-.5.7-.7.8-1.8.1-2.5L34.4 42.1c-.1-.1-.1-.1-.2-.1v-8.7h22c3.2 0 5.8-2.6 5.8-5.8V7c0-3.2-2.6-5.7-5.8-5.7zm2.3 26.2c0 1.2-1 2.3-2.3 2.3H7.8c-1.2 0-2.3-1-2.3-2.3V7c0-1.2 1-2.3 2.3-2.3h48.4c1.2 0 2.3 1 2.3 2.3v20.5z"/>
	</g>
</svg>
	);
};

export default WhiteboardAlt;