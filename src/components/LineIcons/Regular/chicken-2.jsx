import React from 'react';

function Chicken2(props) {
	const title = props.title || "chicken 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.3 20.3H46c-1.7-9.5-9.9-16.4-19.6-16.4-10 0-18.4 7.2-19.6 16.4H3c-1 0-1.8.8-1.8 1.8S2 23.8 3 23.8h3.7L6.6 32c0 9.5 4.6 18.1 12.7 23.5 3 2 6.4 3.4 9.9 4.1 1.8.3 3.7.5 5.5.5 8.2 0 15.9-3.5 21.4-9.9 4.3-5 6.7-11.7 6.7-18.7v-7.7c0-1.9-1.6-3.5-3.5-3.5zm0 11.2c0 6.2-2.1 12-5.8 16.4-5.8 6.8-14.6 9.9-23.6 8.2-3.1-.6-6-1.8-8.6-3.5-7.1-4.8-11.2-12.3-11.2-20.6l.1-9.9c.2-8.1 7.5-14.7 16.3-14.7 8 0 14.8 5.8 16.1 13.7.3 1.6 1.6 2.7 3.2 2.7h13.5v7.7z"/>
	</g>
</svg>
	);
};

export default Chicken2;