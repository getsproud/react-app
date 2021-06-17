import React from 'react';

function CartAlt(props) {
	const title = props.title || "cart alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.4 35.4L64 10.5c.1-.4 0-.9-.3-1.3s-.7-.6-1.2-.6h-48l-.4-6.8c0-.8-.7-1.4-1.5-1.4H1.5C.7.5 0 1.2 0 2s.7 1.5 1.5 1.5h9.7l2.7 44c0 .8.7 1.4 1.5 1.4H57c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H16.8l-.6-9.4H57c.7 0 1.3-.5 1.4-1.1zM16 33.5l-1.3-21.8h45.9l-4.9 21.8H16z"/>
		<path d="M21.9 52c-3.2 0-5.8 2.6-5.8 5.8 0 3.2 2.6 5.8 5.8 5.8s5.8-2.6 5.8-5.8c-.1-3.3-2.7-5.8-5.8-5.8zm0 8.5c-1.5 0-2.8-1.2-2.8-2.8 0-1.5 1.2-2.8 2.8-2.8s2.8 1.2 2.8 2.8c-.1 1.5-1.3 2.8-2.8 2.8z"/>
		<path d="M50 52c-3.2 0-5.8 2.6-5.8 5.8 0 3.2 2.6 5.8 5.8 5.8 3.2 0 5.8-2.6 5.8-5.8 0-3.3-2.6-5.8-5.8-5.8zm0 8.5c-1.5 0-2.8-1.2-2.8-2.8 0-1.5 1.2-2.8 2.8-2.8 1.5 0 2.8 1.2 2.8 2.8 0 1.5-1.2 2.8-2.8 2.8z"/>
	</g>
</svg>
	);
};

export default CartAlt;