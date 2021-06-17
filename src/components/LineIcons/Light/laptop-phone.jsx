import React from 'react';

function LaptopPhone(props) {
	const title = props.title || "laptop phone";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.7 22.2h-8.8V5.5c0-1.5-1.2-2.8-2.8-2.8H8.3C6.7 2.8 5.6 4 5.6 5.6V28c-.7.4-1.3 1.1-1.5 2L0 49.6c-.2.8.1 1.7.6 2.3.5.6 1.3 1 2.1 1h36v6c0 1.3 1 2.3 2.3 2.3h20.6c1.3 0 2.3-1 2.3-2.3V24.5c.1-1.3-.9-2.3-2.2-2.3zM3 49.9l4-19.2H38.9v19.2H3zm35.8-25.4v3.3H8.6v-22H50v16.4h-8.8c-1.3 0-2.4 1-2.4 2.3zM61 58.2H41.8v-33H61v33z"/>
		<circle cx="51.4" cy="53.4" r="2.8"/>
		<path d="M50 30h2.8c.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4H50c-.8 0-1.4.6-1.4 1.4 0 .8.7 1.4 1.4 1.4z"/>
	</g>
</svg>
	);
};

export default LaptopPhone;