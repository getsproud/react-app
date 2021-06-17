import React from 'react';

function PizzaAlt(props) {
	const title = props.title || "pizza alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.5 6.2C49.3 3 41 1.3 32 1.3s-17.3 1.8-23.5 5c-2.3 1.2-3.3 3.9-2.2 6.2L27.6 60c.8 1.8 2.5 2.8 4.4 2.8 1.9 0 3.6-1.1 4.4-2.8L49 32l4.9-11.1 3.8-8.4c1-2.4 0-5.1-2.2-6.3zm-9.7 24.3l-12.6 28c-.3.7-.9.8-1.2.8-.3 0-.9-.1-1.2-.8L14.4 22c8.9-2.1 21.5-3.5 35.1-.1l-3.7 8.6zM54.5 11L51 18.6c-14.9-3.8-28.6-2.2-38.1.1L9.5 11c-.3-.6 0-1.4.6-1.7C15.7 6.4 23.7 4.8 32 4.8c8.3 0 16.3 1.7 21.9 4.6.6.2.9 1 .6 1.6z"/>
	</g>
</svg>
	);
};

export default PizzaAlt;