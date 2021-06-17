import React from 'react';

function EmptyBattery(props) {
	const title = props.title || "empty battery";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.5 24.4h-2.9v-4.9c0-2.5-2-4.5-4.5-4.5H4.5C2 15 0 17 0 19.5v24.9C0 47 2 49 4.5 49H52c2.5 0 4.5-2 4.5-4.5v-4.9h2.9c2.5 0 4.5-2 4.5-4.5v-6.2c.1-2.5-1.9-4.5-4.4-4.5zm-5.9 20.1c0 .8-.7 1.5-1.5 1.5H4.5c-.8 0-1.5-.7-1.5-1.5v-25c0-.8.7-1.5 1.5-1.5H52c.8 0 1.5.7 1.5 1.5v25zm7.4-9.4c0 .8-.7 1.5-1.5 1.5h-2.9v-9.2h2.9c.8 0 1.5.7 1.5 1.5v6.2z"/>
	</g>
</svg>
	);
};

export default EmptyBattery;