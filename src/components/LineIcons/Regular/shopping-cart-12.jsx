import React from 'react';

function ShoppingCart12(props) {
	const title = props.title || "shopping cart 12";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.5 2.4c-.3-.9-1.3-1.4-2.2-1l-7.6 2.8c-.7.3-1.2.9-1.2 1.6v11.9H11.9c-3.6 0-6.5 2.9-6.5 6.5v11.3c0 3.4 2.6 6.2 6 6.4l36.1 2.7v1.2c0 2.1-1.7 3.8-3.8 3.8H14.5c-3.6 0-6.6 3-6.6 6.6 0 3.6 3 6.6 6.6 6.6s6.6-3 6.6-6.6c0-1.1-.3-2.2-.8-3.1h12.1c-.5.9-.8 2-.8 3.1 0 3.6 3 6.6 6.6 6.6 3.6 0 6.6-3 6.6-6.6 0-1.1-.3-2.2-.8-3.1 3.8-.2 6.9-3.4 6.9-7.2V7l6.4-2.3c1-.4 1.5-1.4 1.2-2.3zM34.2 21.2v18.9L22 39.2v-18h12.2zM8.9 35.5V24.1c0-1.6 1.3-3 3-3h6.6v17.7l-6.9-.5c-1.5 0-2.7-1.3-2.7-2.8zm38.6 5.6l-9.8-.7V21.2h9.8v19.9zM17.6 56.2c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1 1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1zm20.7 3.1c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1z"/>
	</g>
</svg>
	);
};

export default ShoppingCart12;