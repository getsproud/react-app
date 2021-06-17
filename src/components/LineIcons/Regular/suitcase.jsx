import React from 'react';

function Suitcase(props) {
	const title = props.title || "suitcase";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 17.1H44.9C44.4 11.2 39.7 6.6 34 6.6h-3.9c-5.8 0-10.5 4.7-10.9 10.5H7c-3.2 0-5.8 2.6-5.8 5.8v28.9c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8v-29c0-3.2-2.6-5.7-5.8-5.7zm-33.1 3.5V54h-6.3V20.6h6.3zm3.5 0h8.9V54h-8.9V20.6zm12.5 0h6.4V54h-6.4V20.6zM30.1 10H34c3.8 0 7 3.1 7.4 7H22.7c.4-3.9 3.5-7 7.4-7zM4.8 51.7V22.8c0-1.2 1-2.3 2.3-2.3h7.2V54H7c-1.2 0-2.2-1-2.2-2.3zm54.5 0c0 1.2-1 2.3-2.3 2.3h-7.2V20.6H57c1.2 0 2.3 1 2.3 2.3v28.8z"/>
	</g>
</svg>
	);
};

export default Suitcase;