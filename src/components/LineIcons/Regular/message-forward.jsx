import React from 'react';

function MessageForward(props) {
	const title = props.title || "message forward";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.7 42.5l-5.1-5.1c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l3.3 3.3H42.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h15.3l-3.4 3.3c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l5.1-5.1c.7-.7 1-1.6 1.1-2.5.1-1-.3-1.9-1-2.5z"/>
		<path d="M34.1 49.7H7c-1.2 0-2.3-1-2.3-2.3V16.7L28.4 31c1 .6 2.1.9 3.1.9 1.1 0 2.2-.3 3.1-.9l23.7-14.3v14c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V16.5c0-3.2-2.6-5.8-5.8-5.8H7c-3.2 0-5.8 2.6-5.8 5.8v30.9c0 3.2 2.6 5.8 5.8 5.8h27.1c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zm-1.2-21.6c-.8.5-1.8.5-2.7 0L7.5 14.3h48.1L32.9 28.1z"/>
	</g>
</svg>
	);
};

export default MessageForward;