import React from 'react';

function Charging(props) {
	const title = props.title || "charging";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.4 24.4h-2.9v-4.9c0-2.5-2-4.5-4.5-4.5H4.6c-2.5 0-4.5 2-4.5 4.5v24.9c0 2.5 2 4.5 4.5 4.5H52c2.5 0 4.5-2 4.5-4.5v-4.9h2.9c2.5 0 4.5-2 4.5-4.5v-6.1c0-2.5-2-4.5-4.5-4.5zm-5.9 20.1c0 .8-.7 1.5-1.5 1.5H4.6c-.8 0-1.5-.7-1.5-1.5v-25c0-.8.7-1.5 1.5-1.5H52c.8 0 1.5.7 1.5 1.5v25zm7.4-9.4c0 .8-.7 1.5-1.5 1.5h-2.9v-9.2h2.9c.8 0 1.5.7 1.5 1.5v6.2z"/>
		<path d="M33.6 30.7h-7.8l6.4-6.4c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1 0l-8.9 8.9c-.4.4-.6 1.1-.3 1.6.2.6.8.9 1.4.9h7.8l-5.9 5.9c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4s.8-.1 1.1-.4l8.4-8.4c.4-.4.6-1.1.3-1.6s-.9-.9-1.5-.9z"/>
	</g>
</svg>
	);
};

export default Charging;