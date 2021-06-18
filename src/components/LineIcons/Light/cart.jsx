import React from 'react';

function Cart(props) {
	const title = props.title || "cart";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M37.4 49.4c-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3-3.3-7.3-7.3-7.3zm0 11.6c-2.3 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3c2.3 0 4.3 1.9 4.3 4.3s-2 4.3-4.3 4.3z"/>
		<path d="M17.2 49.4c-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3-3.3-7.3-7.3-7.3zm0 11.6c-2.3 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3-1.9 4.3-4.3 4.3z"/>
		<path d="M59.8 0h-8.1c-.7 0-1.4.5-1.5 1.3L48 16.7H5.4c-.8 0-1.6.4-2.1 1s-.7 1.5-.5 2.3v.1l6.5 19.8c.3 1.2 1.4 1.9 2.6 1.9H46c.7 0 1.4-.5 1.5-1.3L52.9 3h6.8c.8 0 1.5-.7 1.5-1.5S60.6 0 59.8 0zm-15 38.9H12.2L5.9 19.7h41.7l-2.8 19.2z"/>
	</g>
</svg>
	);
};

export default Cart;