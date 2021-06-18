import React from 'react';

function Thunder(props) {
	const title = props.title || "thunder";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.9 16.6c-2.9-3.1-6.9-5.3-11.1-5.9-2.2-3.8-5.7-6.6-9.7-8-1.8-.7-3.8-1-6-1-10.1 0-18.4 8.1-18.5 18.1C6 20.3 0 26.6 0 34.3c0 8.1 6.4 14.5 14.5 14.5H18c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-3.5C8 45.8 3 40.7 3 34.3s5.1-11.5 11.6-11.5h.5c.8 0 1.5-.7 1.5-1.5v-1.1c0-8.5 6.9-15.4 15.5-15.4 1.8 0 3.5.3 4.9.9 3.6 1.3 6.6 3.8 8.5 7.3.2.4.7.7 1.2.8 3.8.4 7.5 2.2 10 5 2.8 3 4.3 6.9 4.3 11C61 38.7 53.7 46 44.7 46c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5C55.3 49 64 40.4 64 29.8c0-5-1.8-9.6-5.1-13.2z"/>
		<path d="M51.3 29.3c-.2-.5-.8-.9-1.4-.9h-8.1l3.5-6.5c.3-.5.2-1 0-1.5-.3-.5-.8-.7-1.3-.7H28.9c-.6 0-1.1.3-1.4.9L19.7 38c-.2.5-.2 1 .1 1.4.3.4.8.7 1.3.7h8.5l-6.1 20.2c-.2.7.1 1.4.7 1.8.2.1.5.2.7.2.4 0 .9-.2 1.2-.6l25.1-30.8c.3-.4.3-1.1.1-1.6zM28.5 54L33 39.1c.1-.5.1-.9-.2-1.3-.3-.4-.7-.6-1.2-.6h-8.2l6.4-14.4h11.7L38 29.3c-.3.5-.2 1 0 1.5.3.5.8.7 1.3.7h7.5L28.5 54z"/>
	</g>
</svg>
	);
};

export default Thunder;