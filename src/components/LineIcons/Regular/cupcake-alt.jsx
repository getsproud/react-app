import React from 'react';

function CupcakeAlt(props) {
	const title = props.title || "cupcake alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.1 33.2c-.8-1.2-2.2-1.9-3.7-1.9h-3.6v-.2c0-6.1-3-11.5-7.5-14.9 1.9-1.1 3.2-3.1 3.2-5.4 1.8-.6 5.9-2.5 8-7 .4-.9 0-1.9-.8-2.3-.9-.4-1.9 0-2.3.8-1.5 3.1-4.3 4.5-5.8 5.1-1.1-1.8-3.1-3-5.4-3-3.5 0-6.3 2.8-6.3 6.3 0 .6.1 1.3.3 1.8-.7-.1-1.4-.1-2.1-.1-10.4 0-18.8 8.4-18.8 18.7v.2H9.6c-1.5 0-2.8.7-3.7 1.9-.8 1.2-1 2.7-.6 4.1l8.1 22.5c.6 1.8 2.3 3 4.2 3h28.7c1.9 0 3.6-1.2 4.2-3l8.1-22.5c.5-1.4.3-2.9-.5-4.1zM40.2 7.8c1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8s-2.8-1.3-2.8-2.8c-.1-1.5 1.2-2.8 2.8-2.8zm-5.9 51.5V34.8H44l-3.8 24.4h-5.9zm-9.5 0L21 34.8h9.7v24.4h-5.9zm-8.1-28.2c0-8.4 6.9-15.2 15.3-15.2s15.3 6.8 15.3 15.2v.2H16.7v-.2zm0 27.5l-8-22.5c-.1-.4 0-.7.1-.9s.4-.4.8-.4h7.8l3.8 24.4h-3.6c-.3.1-.7-.2-.9-.6zm38.6-22.5l-8.1 22.5c-.1.4-.5.7-.9.7h-2.6l3.8-24.4h6.8c.4 0 .7.3.8.4s.4.4.2.8z"/>
	</g>
</svg>
	);
};

export default CupcakeAlt;