import React from 'react';

function Graduate(props) {
	const title = props.title || "graduate";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63 18.1l-30.4-11c-.3-.1-.7-.1-1 0L1 18.1c-.6.2-1 .8-1 1.4s.4 1.2 1 1.4L9.7 24v19.6c0 .6.4 1.2 1 1.4 9 3 15.8 4.3 22 4.3 3.3 0 6.4-.4 9.6-1v1.2c-2 .6-3.5 2.5-3.5 4.7 0 2.7 2.2 5 5 5s5-2.2 5-5c0-2.2-1.5-4.1-3.5-4.7v-1.9c2.6-.7 5.2-1.6 8.1-2.6.6-.2 1-.8 1-1.4V24l8.6-3.1c.6-.2 1-.8 1-1.4s-.5-1.2-1-1.4zM43.8 56.3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM12.7 42.5V25.1l18.8 6.8c.2.1.3.1.5.1s.3 0 .5-.1l9.8-3.5v16.9c-8.7 1.9-16.9 1.4-29.6-2.8zm38.6.1c-2.1.7-4.1 1.4-6.1 1.9V27.3l6.1-2.2v17.5zm-7.2-18.1l-8-3c-.8-.3-1.6.1-1.9.9-.3.8.1 1.6.9 1.9l4.7 1.7-7.8 2.9-26-9.4 26-9.4 26 9.4-13.9 5z"/>
	</g>
</svg>
	);
};

export default Graduate;