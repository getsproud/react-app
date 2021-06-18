import React from 'react';

function QuoteAlt2(props) {
	const title = props.title || "quote alt 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M45.8 21.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8c-6.4 0-11.5 5.2-11.5 11.5v14.4c0 1.5 1.2 2.8 2.8 2.8h7.8c1.5 0 2.8-1.2 2.8-2.8v-7.8c0-1.5-1.2-2.8-2.8-2.8h-7v-3.8c-.1-4.3 3.5-7.9 7.9-7.9zm-1.7 21.6h-6.3v-6.3h6.3v6.3z"/>
		<path d="M28 21.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8c-6.4 0-11.5 5.2-11.5 11.5v14.4c0 1.5 1.2 2.8 2.8 2.8H27c1.5 0 2.8-1.2 2.8-2.8v-7.8c0-1.5-1.2-2.8-2.8-2.8h-7v-3.8c-.1-4.3 3.5-7.9 8-7.9zm-1.8 21.6h-6.3v-6.3h6.3v6.3z"/>
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
	</g>
</svg>
	);
};

export default QuoteAlt2;