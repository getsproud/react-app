import React from 'react';

function BackwardAlt(props) {
	const title = props.title || "backward alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.6 11.4c-1.9-1-4.2-.8-5.9.5L33.8 26.5v-10c0-2.1-1.2-4.1-3.1-5.1-1.9-1-4.2-.8-5.9.5L3.6 27.4c-1.5 1.1-2.3 2.7-2.3 4.6 0 1.8.8 3.5 2.3 4.6l21.2 15.5c1 .7 2.2 1.1 3.3 1.1.9 0 1.8-.2 2.6-.6 1.9-1 3.1-2.9 3.1-5.1v-10l19.9 14.6c1 .7 2.2 1.1 3.3 1.1.9 0 1.8-.2 2.6-.6 1.9-1 3.1-2.9 3.1-5.1v-31c.1-2.2-1.1-4.1-3.1-5.1zM29.1 49.5c-.7.4-1.6.3-2.3-.2L5.6 33.7c-.6-.4-.9-1.1-.9-1.7 0-.7.3-1.3.9-1.7l21.2-15.5c.7-.5 1.5-.6 2.3-.2.7.4 1.2 1.1 1.2 1.9V47.7c0 .7-.4 1.4-1.2 1.8zm30.2-2c0 .8-.4 1.6-1.2 1.9-.7.4-1.6.3-2.3-.2l-22-16.1v-2.4l22-16.1c.7-.5 1.5-.6 2.3-.2.7.4 1.2 1.1 1.2 1.9v31.2z"/>
	</g>
</svg>
	);
};

export default BackwardAlt;