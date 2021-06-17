import React from 'react';

function GoldBar(props) {
	const title = props.title || "gold bar";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.9 48.1l-5.5-13.9c-.2-.6-.8-.9-1.4-.9h-8c.2-.1.3-.2.5-.4.3-.4.3-.9.2-1.4l-6.3-16.6c-.2-.6-.8-1-1.4-1H22.1c-.6 0-1.2.4-1.4 1l-6.3 16.6c-.2.5-.1 1 .2 1.4.1.2.3.3.5.4H7c-.6 0-1.2.4-1.4.9L.1 48.1c-.2.5-.1 1 .2 1.4.3.4.7.7 1.2.7h28.3c.5 0 1-.2 1.2-.7.3-.4.3-.9.2-1.4l-5.5-13.9c-.1-.3-.3-.6-.6-.7h13.7c-.3.2-.5.4-.6.7l-5.5 13.9c-.2.5-.1 1 .2 1.4.3.4.7.7 1.2.7h28.3c.5 0 1-.2 1.2-.7.4-.4.5-1 .3-1.4zM23.2 16.9h17.7L46 30.5H18l5.2-13.6zm4.5 30.2h-24L8 36.2h15.3l4.4 10.9zm8.6 0l4.3-10.9H56l4.3 10.9h-24z"/>
	</g>
</svg>
	);
};

export default GoldBar;