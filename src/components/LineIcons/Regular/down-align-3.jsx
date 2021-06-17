import React from 'react';

function DownAlign3(props) {
	const title = props.title || "down align 3";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.9 58.3H14.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h35.8c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M19.2 51.2h25.6c3.4 0 6.1-2.7 6.1-6.1v-1.9c0-3.4-2.7-6.1-6.1-6.1H19.2c-3.4 0-6.1 2.7-6.1 6.1V45c0 3.4 2.7 6.2 6.1 6.2zm-2.6-8.1c0-1.4 1.2-2.6 2.6-2.6h25.6c1.4 0 2.6 1.2 2.6 2.6V45c0 1.4-1.2 2.6-2.6 2.6H19.2c-1.4 0-2.6-1.2-2.6-2.6v-1.9z"/>
		<path d="M56.7 2.2H7.4C4 2.2 1.3 5 1.3 8.3V59c0 1 .8 1.8 1.8 1.8S4.9 60 4.9 59V8.3c0-1.4 1.2-2.6 2.6-2.6h49.3c1.4 0 2.6 1.2 2.6 2.6V59c0 1 .8 1.8 1.8 1.8S63 60 63 59V8.3c-.2-3.3-3-6.1-6.3-6.1z"/>
	</g>
</svg>
	);
};

export default DownAlign3;