import React from 'react';

function BurgerAlt(props) {
	const title = props.title || "burger alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M3 28.3h58c1 0 1.8-.8 1.8-1.8 0-14-11.4-25.3-25.3-25.3H26.6c-14 0-25.3 11.4-25.3 25.3 0 1 .7 1.8 1.7 1.8zM26.6 4.8h10.9c11.4 0 20.8 8.8 21.7 20.1H4.8C5.7 13.6 15.1 4.8 26.6 4.8z"/>
		<path d="M61 35.7H3c-1 0-1.8.8-1.8 1.8 0 14 11.4 25.3 25.3 25.3h10.9c14 0 25.3-11.4 25.3-25.3.1-1-.7-1.8-1.7-1.8zM37.4 59.3H26.6c-11.4 0-20.8-8.8-21.7-20.1h54.4c-1 11.2-10.4 20.1-21.9 20.1z"/>
	</g>
</svg>
	);
};

export default BurgerAlt;