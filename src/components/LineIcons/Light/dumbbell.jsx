import React from 'react';

function Dumbbell(props) {
	const title = props.title || "dumbbell";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.4 29.3h-1.2V25c0-1.4-1.1-2.5-2.5-2.5H49c-1.4 0-2.5 1.1-2.5 2.5v5.5h-29V25c0-1.4-1.1-2.5-2.5-2.5H6.3c-1.4 0-2.5 1.1-2.5 2.5v4.3H2.6c-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6h1.2V39c0 1.4 1.1 2.5 2.5 2.5H15c1.4 0 2.5-1.1 2.5-2.5v-5.5h29V39c0 1.4 1.1 2.5 2.5 2.5h8.7c1.4 0 2.5-1.1 2.5-2.5v-4.3h1.2c1.4 0 2.6-1.2 2.6-2.6v-.2c0-1.4-1.2-2.6-2.6-2.6zm-46.9 9.2H6.8v-13h7.7v13zm42.7 0h-7.7v-13h7.7v13z"/>
	</g>
</svg>
	);
};

export default Dumbbell;