import React from 'react';

function PlaneAlt(props) {
	const title = props.title || "plane alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.6 36L39 20V7c0-3.8-3.2-7-7-7s-7 3.1-7 7v13L3.4 36c-.4.3-.6.7-.6 1.2v8.7c0 .5.2.9.6 1.2.4.3.8.4 1.3.3L25 42.2v8.5l-5.1 5.1c-.3.3-.4.7-.4 1.1v5.5c0 .5.2.9.6 1.2.4.3.8.4 1.3.3L32 61.3 42.7 64h.4c.3 0 .7-.1.9-.3.4-.3.6-.7.6-1.2V57c0-.4-.2-.8-.4-1.1L39 50.8v-8.5l20.3 5.1c.5.1.9 0 1.3-.3s.6-.7.6-1.2v-8.7c0-.5-.2-.9-.6-1.2zm-2.4 7.9l-20.3-5.1c-.5-.1-.9 0-1.3.3s-.6.8-.6 1.2v11.1c0 .4.2.8.4 1.1l5.1 5.1v3l-9.2-2.3h-.8l-9.2 2.3v-3l5.1-5.1c.3-.3.4-.7.4-1.1V40.3c0-.5-.2-.9-.6-1.2-.4-.3-.8-.4-1.3-.3L5.8 43.9v-6l21.5-16c.4-.3.6-.7.6-1.2V7c0-2.2 1.8-4 4-4s4 1.8 4 4v13.8c0 .5.2.9.6 1.2L58 38v5.9z"/>
	</g>
</svg>
	);
};

export default PlaneAlt;