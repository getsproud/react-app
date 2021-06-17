import React from 'react';

function Clipboard(props) {
	const title = props.title || "clipboard";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.9 61.4V10.8c0-1.4-1.1-2.5-2.5-2.5h-5.9v-2c0-1.9-1.6-3.5-3.5-3.5h-7.6V1.5C33.5.7 32.8 0 32 0c-.8 0-1.5.7-1.5 1.5v1.3h-7.6c-1.9 0-3.5 1.6-3.5 3.5v2h-5.9c-1.4 0-2.5 1.1-2.5 2.5v50.7c0 1.4 1.1 2.5 2.5 2.5h37c.7 0 1.4-.3 1.8-.8.5-.5.7-1.2.6-1.8zM22.4 6.3c0-.3.2-.5.5-.5h18.2c.3 0 .5.2.5.5v7.1c0 .3-.2.5-.5.5H22.9c-.3 0-.5-.2-.5-.5V6.3zM49.9 61H14.1V11.3h5.3v2c0 1.9 1.6 3.5 3.5 3.5h18.2c1.9 0 3.5-1.6 3.5-3.5v-2h5.3V61z"/>
	</g>
</svg>
	);
};

export default Clipboard;