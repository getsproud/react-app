import React from 'react';

function WhiteboardAlt1(props) {
	const title = props.title || "whiteboard alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 6.2H33.8V4c0-1-.8-1.8-1.8-1.8S30.3 3 30.3 4v2.2H7c-3.2 0-5.8 2.6-5.8 5.8v20.5c0 3.2 2.6 5.8 5.8 5.8h23.7V47L13.3 58.6c-.8.5-1 1.6-.5 2.4.3.5.9.8 1.5.8.3 0 .7-.1 1-.3l15.5-10.4v7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-6.9l14.4 10.3c.3.2.7.3 1 .3.5 0 1.1-.3 1.4-.7.6-.8.4-1.9-.4-2.4L34.2 46.9v-8.7H57c3.2 0 5.8-2.6 5.8-5.8V11.9c0-3.2-2.6-5.7-5.8-5.7zm2.3 26.2c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3V11.9c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3v20.5z"/>
	</g>
</svg>
	);
};

export default WhiteboardAlt1;