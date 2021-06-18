import React from 'react';

function ShipStar(props) {
	const title = props.title || "ship star";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M43.3 56.5c-.1-.1-.3-.2-.4-.3l4.4-15.6c.8-2.9-.7-5.9-3.4-7.1L41 32.3v-4.4c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v2.9l-8.7-3.6c-1.4-.6-3.1-.6-4.6 0l-8.8 3.6v-6.3c0-1.3 1.1-2.4 2.4-2.4h13.6c1 0 1.7-.8 1.7-1.8s-.8-1.8-1.7-1.8H20.5v-5.2c0-1.3 1.1-2.4 2.4-2.4h8c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-2.7V3c0-1-.8-1.8-1.8-1.8S24.8 2 24.8 3v4.5h-1.9c-3.3 0-5.9 2.7-5.9 5.9v5.3c-2.8.5-5 2.9-5 5.8v7.7l-2.8 1.2c-2.8 1.2-4.2 4.2-3.4 7.1l4.4 15.6c-.1.1-.3.2-.4.3l-3.7 3.2c-.7.6-.8 1.7-.2 2.5.6.7 1.7.8 2.5.2l3.7-3.2c.9-.8 2.3-.8 3.2 0l1 .8c2.2 1.9 5.5 1.9 7.8 0l1-.8c.9-.8 2.3-.8 3.2 0l1 .8c2.2 1.9 5.5 1.9 7.8 0l1-.8c.9-.8 2.3-.8 3.2 0l3.7 3.2c.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6.6-.7.6-1.8-.2-2.5l-3.9-3.1zm-7.8 0l-1 .8c-.9.8-2.3.8-3.2 0l-1-.8c-2.2-1.9-5.5-1.9-7.8 0l-1 .8c-.9.8-2.3.8-3.2 0l-1-.8c-1.1-1-2.6-1.5-4-1.4L9.2 39.6c-.3-1.2.3-2.4 1.4-2.9l3.7-1.6c.1 0 .2-.1.2-.1l11.1-4.6c.6-.2 1.3-.2 1.9 0l11 4.6c.1 0 .1.1.2.1l3.8 1.6c1.1.5 1.7 1.7 1.4 2.9L39.5 55c-1.4 0-2.8.5-4 1.5z"/>
		<path d="M58.5 9.7c-.2-.5-.6-.9-1.1-1.1l-4.2-1.4-2.6-3.5c-.7-.9-2.1-.9-2.8 0l-2.6 3.5L41 8.6c-.5.2-.9.6-1.1 1.1-.2.5-.1 1.1.2 1.6l2.6 3.6v4.4c0 .6.3 1.1.7 1.4.3.2.7.3 1 .3.2 0 .4 0 .5-.1l4.2-1.3 4.2 1.3c.5.2 1.1.1 1.6-.3.4-.3.7-.8.7-1.4v-4.4l2.6-3.6c.3-.4.4-1 .3-1.5zm-6 3.5c-.2.3-.3.6-.3 1v2.6l-2.5-.8h-.6c-.2 0-.4 0-.5.1l-2.5.8v-2.6c0-.4-.1-.7-.3-1l-1.5-2.1 2.5-.8c.3-.1.6-.3.8-.6l1.6-2.1 1.6 2.1c.2.3.5.5.8.6l2.5.8-1.6 2z"/>
	</g>
</svg>
	);
};

export default ShipStar;