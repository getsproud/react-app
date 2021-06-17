import React from 'react';

function HeartrateMonitor(props) {
	const title = props.title || "heartrate monitor";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 40.8h-2.1V11.2c0-.8-.7-1.5-1.5-1.5H5.1c-.8 0-1.5.7-1.5 1.5v29.6H1.5c-.8 0-1.5.7-1.5 1.5v10.4c0 .8.7 1.5 1.5 1.5h60.9c.8 0 1.5-.7 1.5-1.5V42.3c.1-.8-.6-1.5-1.4-1.5zm-5.1-28.1v10.9H32.9c-.5 0-1 .2-1.2.7l-3.5 5.3-7-12.4c-.3-.4-.7-.7-1.2-.8-.5 0-1 .2-1.3.6l-5.5 7.7H6.6v-12h50.8zm-50.8 15h7.3c.5 0 .9-.2 1.2-.6l4.6-6.4 7 12.5c.3.5.7.7 1.2.8h.1c.5 0 1-.2 1.2-.7l4.5-6.6H57.3v14.2H6.6V27.7zM61 51.3H3v-7.4H61v7.4z"/>
	</g>
</svg>
	);
};

export default HeartrateMonitor;