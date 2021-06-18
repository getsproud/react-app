import React from 'react';

function Pipe(props) {
	const title = props.title || "pipe";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.5 15.3h-5.1c-2.5 0-4.5 2-4.5 4.5v1h-5.3v-6.6c0-2.5-2-4.5-4.5-4.5H35c-2.5 0-4.5 2-4.5 4.5v6.6H14.1v-1c0-2.5-2-4.5-4.5-4.5H4.5c-2.5 0-4.5 2-4.5 4.5V36c0 2.5 2 4.5 4.5 4.5h5.1c2.5 0 4.5-2 4.5-4.5v-1h16.4v14.9c0 2.5 2 4.5 4.5 4.5h5.1c2.5 0 4.5-2 4.5-4.5v-15h5.3v1c0 2.5 2 4.5 4.5 4.5h5.1c2.5 0 4.5-2 4.5-4.5V19.8c0-2.5-2-4.5-4.5-4.5zm-26-1.1c0-.8.7-1.5 1.5-1.5h5.1c.8 0 1.5.7 1.5 1.5v6.6h-8.1v-6.6zM11.1 35.9c0 .8-.7 1.5-1.5 1.5H4.5c-.8 0-1.5-.7-1.5-1.5V19.8c0-.8.7-1.5 1.5-1.5h5.1c.8 0 1.5.7 1.5 1.5v16.1zm30.5 13.9c0 .8-.7 1.5-1.5 1.5H35c-.8 0-1.5-.7-1.5-1.5V34.9h8.1v14.9zM14.1 31.9v-8.1h35.8v8.1H14.1zm46.9 4c0 .8-.7 1.5-1.5 1.5h-5.1c-.8 0-1.5-.7-1.5-1.5V19.8c0-.8.7-1.5 1.5-1.5h5.1c.8 0 1.5.7 1.5 1.5v16.1z"/>
	</g>
</svg>
	);
};

export default Pipe;