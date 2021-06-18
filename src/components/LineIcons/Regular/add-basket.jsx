import React from 'react';

function AddBasket(props) {
	const title = props.title || "add basket";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.6 18.5H46l-8.8-8.8c.3-.8.6-1.7.6-2.7 0-3.2-2.6-5.8-5.8-5.8-3.2 0-5.8 2.6-5.8 5.8 0 1 .2 1.8.6 2.6L18 18.5H7.4c-2.5 0-4.5 2-4.5 4.5v2.1c0 2.2 1.6 4.1 3.7 4.5l6 22.6c.2.8.9 1.3 1.7 1.3h4.9c1.8 5.4 6.9 9.3 12.9 9.3s11.1-3.9 12.9-9.3h4.9c.8 0 1.5-.5 1.7-1.3l6-22.6c2.1-.4 3.7-2.2 3.7-4.5V23c-.1-2.5-2.2-4.5-4.7-4.5zM32 4.8c1.2 0 2.3 1 2.3 2.3 0 .6-.2 1.2-.6 1.6-.4.4-1 .6-1.6.6-.6 0-1.2-.2-1.6-.6-.4-.4-.6-1-.6-1.6-.2-1.3.9-2.3 2.1-2.3zm-2.6 7.3c.8.4 1.7.6 2.6.6 1 0 1.8-.2 2.6-.6l6.4 6.4H23l6.4-6.4zM6.3 23c0-.6.5-1 1-1h49.2c.6 0 1 .5 1 1v2.1c0 .6-.5 1-1 1H7.4c-.6 0-1-.5-1-1V23zM32 59.3c-4.8 0-8.8-3.4-9.9-7.8v-.1c-.2-.7-.2-1.4-.2-2.2 0-5.6 4.6-10.2 10.2-10.2s10.2 4.6 10.2 10.2c0 .8-.1 1.5-.3 2.2-1.2 4.5-5.2 7.9-10 7.9zM48.4 50h-2.8v-.9c0-7.5-6.1-13.7-13.7-13.7-7.5 0-13.7 6.1-13.7 13.7v.9h-2.8L10 29.7h43.6L48.4 50z"/>
		<path d="M36 47.3h-2.2v-2.2c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v2.2H28c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h2.2v2.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-2.2H36c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default AddBasket;