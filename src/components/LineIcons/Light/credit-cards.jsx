import React from 'react';

function CreditCards(props) {
	const title = props.title || "credit cards";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.5 16.6h-.3v-5.4c0-1.7-.8-3.4-2.1-4.4-1.4-1.1-3.1-1.5-4.8-1.1L4.9 16.6H2.5c-1.4 0-2.5 1.1-2.5 2.5v36.8c0 1.4 1.1 2.5 2.5 2.5h59c1.4 0 2.5-1.1 2.5-2.5V19.1c0-1.4-1.1-2.5-2.5-2.5zm-6.6-8c.8-.2 1.6 0 2.3.5.6.5 1 1.3 1 2.1v5.4H18.8l36.1-8zM61 55.4H3V39h58v16.4zM61 36H3v-5.3h58V36zm0-8.3H3v-8.1h58v8.1z"/>
	</g>
</svg>
	);
};

export default CreditCards;