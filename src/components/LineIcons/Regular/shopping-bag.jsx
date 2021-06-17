import React from 'react';

function ShoppingBag(props) {
	const title = props.title || "shopping bag";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M48.8 16.4h-8.3C39.9 8.8 37.1 1.3 32 1.3s-7.9 7.6-8.5 15.2h-8.3c-2.6 0-4.8 2.1-4.8 4.8V58c0 2.6 2.1 4.8 4.8 4.8h33.6c2.6 0 4.8-2.1 4.8-4.8V21.2c0-2.7-2.2-4.8-4.8-4.8zM32 4.8c1.8 0 4.4 4.4 5 11.7H27c.6-7.4 3.2-11.7 5-11.7zM50.1 58c0 .7-.6 1.3-1.3 1.3H15.2c-.7 0-1.3-.6-1.3-1.3V21.2c0-.7.6-1.3 1.3-1.3h33.6c.7 0 1.3.6 1.3 1.3V58z"/>
	</g>
</svg>
	);
};

export default ShoppingBag;