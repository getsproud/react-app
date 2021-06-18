import React from 'react';

function CreditCards(props) {
	const title = props.title || "credit cards";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.7 25.6L49.4 5.7c-.7-1.5-1.9-2.6-3.4-3.1-1.5-.6-3.1-.5-4.6.2L4.7 19.9c-3 1.4-4.3 5-2.9 8l8.4 18v9.9c0 3.3 2.7 6 6 6h40.5c3.3 0 6-2.7 6-6V31.2c0-2.6-1.6-4.8-4-5.6zm.5 7.8H13.7v-2.2c0-1.4 1.1-2.5 2.5-2.5h40.9c1.2.2 2.1 1.3 2.1 2.5v2.2zm0 8.2c-.1 0-.3-.1-.5-.1h-45v-4.6h45.5v4.7zm-4.5-16.4H20.9l27.7-12.9 6.1 12.9zM6.2 23L42.9 5.9c.6-.3 1.3-.3 1.9-.1.6.2 1.1.7 1.4 1.3l.9 2L5.9 28.4l-.9-2c-.6-1.3-.1-2.8 1.2-3.4zm1.2 8.5l2.9-1.4c-.1.3-.1.7-.1 1.1v6.4l-2.8-6.1zm49.3 26.8H16.2c-1.4 0-2.5-1.1-2.5-2.5V45h45.1c.2 0 .3 0 .5-.1v10.8c-.1 1.5-1.2 2.6-2.6 2.6z"/>
	</g>
</svg>
	);
};

export default CreditCards;