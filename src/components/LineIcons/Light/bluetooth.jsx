import React from 'react';

function Bluetooth(props) {
	const title = props.title || "bluetooth";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.5 45.3L31.5 32l20-13.3c.9-.7 1.5-1.7 1.5-2.9 0-1.1-.6-2.2-1.5-2.8L32.8.6c-1-.7-2.3-.7-3.3-.2-1.1.6-1.8 1.7-1.8 3v26l-14.4-9.7c-.7-.5-1.6-.3-2.1.4s-.3 1.6.4 2.1L26.3 32l-14.5 9.7c-.7.5-.9 1.4-.4 2.1.3.4.8.7 1.2.7.3 0 .6-.1.8-.3l14.3-9.5v26c0 1.3.7 2.4 1.8 3 .5.3 1 .4 1.5.4.6 0 1.2-.2 1.8-.6L51.5 51c.9-.6 1.5-1.7 1.5-2.8 0-1.2-.6-2.2-1.5-2.9zM30.7 3.4c0-.2.1-.3.2-.3L31 3h.1l18.7 12.5c.1.1.2.2.2.3 0 .1 0 .2-.2.3L30.7 28.9V3.4zm19.1 45.1L31.2 61s-.1.1-.3 0c-.1 0-.2-.1-.2-.3V35.1l19.1 12.7c.1.1.2.2.2.3 0 .2 0 .3-.2.4z"/>
	</g>
</svg>
	);
};

export default Bluetooth;