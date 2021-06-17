import React from 'react';

function Bolt(props) {
	const title = props.title || "bolt";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.2 22.2c-.2-.5-.8-.9-1.4-.9H34.6V1.5c0-.6-.4-1.2-1-1.4-.6-.2-1.3 0-1.7.5L5 36.6c-.3.5-.4 1.1-.1 1.6.2.5.7.8 1.3.8h21.7l-4.4 23.2c-.1.7.2 1.3.8 1.6.2.2.4.2.7.2.4 0 .9-.2 1.2-.5L59 23.8c.3-.5.4-1.1.2-1.6zM27.5 57.1l3.6-19.3c.1-.4 0-.9-.3-1.2-.3-.3-.7-.5-1.2-.5H9.2L31.6 6v16.8c0 .8.7 1.5 1.5 1.5h21.5L27.5 57.1z"/>
	</g>
</svg>
	);
};

export default Bolt;