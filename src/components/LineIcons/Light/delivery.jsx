import React from 'react';

function Delivery(props) {
	const title = props.title || "delivery";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.5 10.7H26.7c-2.5 0-4.5 2-4.5 4.5v1.1H7.4c-.8 0-1.6.5-1.9 1.2L.2 28.1c-.1.3-.2.6-.2 1v16.5c0 .7.7 1.4 1.5 1.4h3.4c.4 3.7 3.6 6.7 7.4 6.7s7-2.9 7.4-6.7h23.1c.4 3.7 3.6 6.7 7.4 6.7s7-2.9 7.4-6.7h4.2c1.2 0 2.2-1 2.2-2.2V15.2c0-2.5-2-4.5-4.5-4.5zM7.9 19.3h14.3v8.1H3.9l4-8.1zm4.4 31.4c-2.5 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4 4.4 2 4.4 4.4-2 4.4-4.4 4.4zm0-11.9C9 38.8 6.1 41 5.2 44H3V30.4h19.2V44h-2.8c-1-3-3.8-5.2-7.1-5.2zm37.9 11.9c-2.5 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4 4.4 2 4.4 4.4-2 4.4-4.4 4.4zM61 44h-3.7c-.9-3-3.8-5.2-7.1-5.2S44 41 43.1 44H25.2V15.2c0-.8.7-1.5 1.5-1.5h32.9c.8 0 1.5.7 1.5 1.5V44z"/>
	</g>
</svg>
	);
};

export default Delivery;