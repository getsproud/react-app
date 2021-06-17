import React from 'react';

function ShoppingCart1(props) {
	const title = props.title || "shopping cart 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.5 2.4c-.3-.9-1.3-1.4-2.2-1l-7.6 2.8c-.7.3-1.2.9-1.2 1.6v28.6c0 2.1-1.7 3.8-3.8 3.8h-31c-2.1 0-3.8-1.7-3.8-3.8v-15c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v14.9c0 4 3.3 7.3 7.3 7.3h31c1.4 0 2.7-.4 3.8-1.1v5.3c0 2.1-1.7 3.8-3.8 3.8H14.5c-3.6 0-6.6 3-6.6 6.6 0 3.6 3 6.6 6.6 6.6s6.6-3 6.6-6.6c0-1.1-.3-2.2-.8-3.1h12.1c-.5.9-.8 2-.8 3.1 0 3.6 3 6.6 6.6 6.6 3.6 0 6.6-3 6.6-6.6 0-1.1-.3-2.2-.8-3.1 3.8-.2 6.9-3.4 6.9-7.2V7l6.4-2.3c1-.4 1.5-1.4 1.2-2.3zM17.6 56.2c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1 1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1zm20.7 3c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1-1.5 3.1-3.1 3.1z"/>
		<path d="M26.1 30c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.4-5.4c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0L29 24.5V10.4c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v14.1L23.1 22c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l5.5 5.5z"/>
	</g>
</svg>
	);
};

export default ShoppingCart1;