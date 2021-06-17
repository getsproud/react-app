import React from 'react';

function ShoppingBasket(props) {
	const title = props.title || "shopping basket";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.7 19.4h-3.4L48 .9c-.3-.8-1.2-1.1-1.9-.8-.8.3-1.1 1.2-.8 1.9l6.9 17.4H11.9L18.8 2c.3-.8-.1-1.6-.8-1.9-.8-.3-1.7.1-2 .9L8.7 19.4H5.3c-1.4 0-2.5 1.1-2.5 2.5V31c0 1.4 1.1 2.5 2.5 2.5h.5l2.8 24.2c.4 3.6 3.4 6.3 7 6.3h32.9c3.6 0 6.6-2.7 7-6.2l2.8-24.2h.5c1.4 0 2.5-1.1 2.5-2.5V22c-.1-1.5-1.2-2.6-2.6-2.6zm-6.3 38c-.2 2-2 3.6-4 3.6H15.6c-2.1 0-3.8-1.5-4-3.6L8.8 33.5h46.4l-2.8 23.9zm5.8-26.9H5.8v-8.1h52.4v8.1z"/>
		<path d="M20.9 52.9c.8 0 1.5-.7 1.5-1.5V40.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v11.1c0 .8.7 1.5 1.5 1.5z"/>
		<path d="M43.1 52.9c.8 0 1.5-.7 1.5-1.5V40.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v11.1c0 .8.7 1.5 1.5 1.5z"/>
	</g>
</svg>
	);
};

export default ShoppingBasket;