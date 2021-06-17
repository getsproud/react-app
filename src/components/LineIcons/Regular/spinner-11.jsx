import React from 'react';

function Spinner11(props) {
	const title = props.title || "spinner 11";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.3 10.5C51.4 6.1 45.1 3.3 38.1 3v9.1c4.5.3 8.6 2.1 11.7 4.9l6.5-6.5z"/>
		<path d="M38.1 51.9V61c7-.3 13.3-3.1 18.2-7.5L49.8 47c-3.2 2.8-7.2 4.6-11.7 4.9z"/>
		<path d="M23.6 17c3.2-2.8 7.3-4.6 11.7-4.9V3c-7 .3-13.3 3.1-18.2 7.5l6.5 6.5z"/>
		<path d="M17.2 53.5c4.8 4.4 11.2 7.2 18.2 7.5v-9.1c-4.5-.3-8.6-2.1-11.7-4.9l-6.5 6.5z"/>
		<path d="M16.8 33.4H7.7c.3 7 3.1 13.3 7.5 18.2l6.4-6.4c-2.7-3.3-4.5-7.4-4.8-11.8z"/>
		<path d="M21.7 18.9l-6.4-6.4c-4.4 4.8-7.2 11.2-7.5 18.2h9.1c.2-4.5 2-8.6 4.8-11.8z"/>
	</g>
</svg>
	);
};

export default Spinner11;