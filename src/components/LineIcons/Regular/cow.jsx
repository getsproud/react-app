import React from 'react';

function Cow(props) {
	const title = props.title || "cow";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.7 3c0-1-.8-1.8-1.8-1.8S59.2 2 59.2 3c0 8.2-6.6 14.8-14.8 14.8H19.6C11.4 17.8 4.8 11.2 4.8 3 4.8 2 4 1.3 3 1.3S1.3 2 1.3 3c0 8.4 5.6 15.4 13.3 17.6l4.8 35.8c.5 3.6 3.6 6.3 7.2 6.3h12.2c3.8 0 6.9-2.8 7.2-6.6l3.6-35.6c7.6-2.2 13.1-9.2 13.1-17.5zM38.8 59.3H26.5c-1.9 0-3.5-1.4-3.7-3.3l-.6-4.3h20.7l-.4 4.1c-.2 2-1.8 3.5-3.7 3.5zm7.2-38l-2.7 26.9H21.8l-3.6-26.9H46z"/>
		<path d="M25.5 31.3c1.5 0 2.8-1.2 2.8-2.8 0-1.5-1.2-2.8-2.8-2.8-1.5 0-2.8 1.2-2.8 2.8 0 1.6 1.2 2.8 2.8 2.8z"/>
		<path d="M39.3 31.3c1.5 0 2.8-1.2 2.8-2.8 0-1.5-1.2-2.8-2.8-2.8-1.5 0-2.8 1.2-2.8 2.8 0 1.6 1.2 2.8 2.8 2.8z"/>
	</g>
</svg>
	);
};

export default Cow;