import React from 'react';

function Laptop(props) {
	const title = props.title || "laptop";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.8 54.5l-4.5-18.7c-.2-.9-.9-1.6-1.7-1.9.2-.4.3-.7.3-1.1V9c0-1.6-1.3-2.8-2.9-2.8H9.1C7.5 6.2 6.2 7.4 6.2 9v23.7c0 .4.1.7.2 1-.9.3-1.6 1-1.8 2L.2 54.5c-.1.8.1 1.6.6 2.2.6.7 1.4 1.1 2.3 1.1H61c.9 0 1.8-.4 2.4-1.1.4-.7.6-1.5.4-2.2zM9.2 9.2h45.7v23.3H9.2V9.2zm-6 45.6l4.3-18.3h48.9l4.4 18.3H3.2z"/>
	</g>
</svg>
	);
};

export default Laptop;