import React from 'react';

function Dna(props) {
	const title = props.title || "dna";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M42.8.1c-.8 0-1.5.7-1.5 1.5v5.7H22.7V1.6c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v19.1c0 5.1 3.1 9.5 7.6 11.4-4.5 1.9-7.6 6.3-7.6 11.4v19.1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-3.7h18.7v3.7c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V43.4c0-5.1-3.1-9.5-7.6-11.4 4.5-1.9 7.6-6.3 7.6-11.4v-19C44.3.7 43.7.1 42.8.1zm-1.5 10.2v7.3H22.7v-7.3h18.6zM22.7 55.8v-7.3h18.7v7.3H22.7zm18.6-12.4v2.1H22.7v-2.1c0-5.1 4.2-9.3 9.3-9.3 5.1-.1 9.3 4.1 9.3 9.3zM32 30c-5.1 0-9.3-4.2-9.3-9.3h18.7c-.1 5.1-4.3 9.3-9.4 9.3z"/>
	</g>
</svg>
	);
};

export default Dna;