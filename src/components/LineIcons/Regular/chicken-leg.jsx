import React from 'react';

function ChickenLeg(props) {
	const title = props.title || "chicken leg";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.4 30.3c-2.3-1.4-5.1-1.4-7.5-.2l-13.1 7.2 1.7-24.7c.2-2.9-.8-5.9-2.8-8-2-2.2-4.9-3.4-7.8-3.4H12.6c-3 0-5.8 1.2-7.8 3.4s-3 5.1-2.8 8.1l2.6 34.6c.6 5.5 3.8 10.3 9 13 5.4 2.8 11.6 2.9 16.7.2l15-8.1c.9 2.3 2.2 4.3 4 6.1 2.8 2.7 6.4 4.2 10.2 4.2 1.4 0 2.6-1.2 2.6-2.7V36.8c0-2.7-1.4-5.1-3.7-6.5zm.2 28.9c-2.5-.2-4.9-1.3-6.9-3.2-1.9-1.8-3.1-4-3.7-6.5-.1-.5-.5-1-1-1.2-.2-.1-.5-.2-.7-.2-.3 0-.6.1-.8.2l-16.9 9.1c-4.1 2.2-9 2.1-13.4-.2C11.1 55 8.5 51.3 8.1 47L5.4 12.5c-.1-2 .6-4 1.9-5.5 1.4-1.5 3.2-2.3 5.3-2.3h16.2c2 0 3.9.8 5.3 2.3 1.4 1.5 2 3.4 1.9 5.4l-1.9 26.9-4.6 2.5c-.8.5-1.2 1.5-.7 2.4.5.8 1.5 1.2 2.4.7l21.4-11.7c1.3-.7 2.8-.7 4.1.1 1.3.7 2 2.1 2 3.5v22.4z"/>
		<path d="M14.5 13.1h-1.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h1.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M26.4 20.6h-1.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h1.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M19 34h-1.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H19c1 0 1.8-.8 1.8-1.8S20 34 19 34z"/>
	</g>
</svg>
	);
};

export default ChickenLeg;