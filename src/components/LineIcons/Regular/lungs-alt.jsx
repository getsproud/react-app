import React from 'react';

function LungsAlt(props) {
	const title = props.title || "lungs alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M6.6 59.2v-1z"/>
		<path d="M49.2 17.5c-2-.9-4.4-.8-6.3.4-1.9 1.2-3 3.3-3 5.6v8.8l-6.2-3.6c0-.1.1-.3.1-.4v-23c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v23c0 .1 0 .3.1.4l-6.2 3.6v-8.8c0-2.3-1.1-4.4-3.1-5.6-1.9-1.2-4.2-1.4-6.3-.4C6.6 21.3 1.3 29.6 1.3 38.7v9.9c0 2.1 1 4.1 2.7 5.3 1.1.8 2.5 1.3 3.9 1.3.6 0 1.3-.1 1.9-.3l6.9-2.1c4.4-1.4 7.4-5.4 7.4-10.1v-6.4l7.9-4.5 7.9 4.5v6.4c0 4.7 3 8.7 7.4 10.1l6.9 2.1c.6.2 1.3.3 1.9.3 1.4 0 2.8-.4 3.9-1.3 1.7-1.3 2.7-3.2 2.7-5.3v-9.9c.1-9.1-5.3-17.4-13.5-21.2zM20.6 42.7c0 3.1-2 5.8-4.9 6.7l-6.9 2.1c-.9.3-1.9.1-2.7-.5-.8-.6-1.3-1.5-1.3-2.5v-9.9c0-7.7 4.5-14.8 11.5-18 .4-.2.9-.3 1.3-.3.6 0 1.2.2 1.7.5.9.6 1.4 1.6 1.4 2.6v10.8l-3 1.8c-.8.5-1.1 1.6-.6 2.4.5.8 1.6 1.1 2.4.6l1.2-.7v4.4zm38.7 5.9c0 1-.5 1.9-1.3 2.5-.8.6-1.8.8-2.7.5l-6.9-2.1c-3-.9-5-3.6-5-6.7v-4.4l1.2.7c.3.2.6.2.9.2.6 0 1.2-.3 1.5-.9.5-.8.2-1.9-.6-2.4l-2.9-1.7V23.5c0-1.1.5-2.1 1.4-2.6.5-.3 1.1-.5 1.7-.5.4 0 .9.1 1.3.3 7 3.2 11.5 10.3 11.5 18v9.9z"/>
	</g>
</svg>
	);
};

export default LungsAlt;