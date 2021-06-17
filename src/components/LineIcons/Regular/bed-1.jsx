import React from 'react';

function Bed1(props) {
	const title = props.title || "bed 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54 45.3v-.1-.1l-6-24.7V6.6c0-3-2.4-5.4-5.4-5.4H21.4c-3 0-5.4 2.4-5.4 5.4v13.8l-6 24.7c0 .1-.1.3-.1.4V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-2.8c.4-1.1 6.4-3.8 18.6-3.8 12.2 0 18.2 2.8 18.6 3.8V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V45.6c-.2-.1-.3-.2-.3-.3zM19.1 22.4h25.7L50 43.8H13.9l5.2-21.4zm.4-15.8c0-1 .8-1.9 1.9-1.9h21.2c1 0 1.9.8 1.9 1.9v12.3h-25V6.6zM32 50.9c-5.6 0-13.9.7-18.6 3v-6.6h37.1v6.6c-4.6-2.3-12.9-3-18.5-3z"/>
	</g>
</svg>
	);
};

export default Bed1;