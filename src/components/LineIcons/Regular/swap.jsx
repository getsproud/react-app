import React from 'react';

function Swap(props) {
	const title = props.title || "swap";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M5.5 17.8H45c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7H5.5l7.7-9.2c.6-.7.5-1.8-.2-2.5-.7-.6-1.8-.5-2.5.2l-7.8 9.3c-1.9 2.2-1.9 5.5 0 7.7l7.8 9.3c.3.4.8.6 1.3.6.4 0 .8-.1 1.1-.4.7-.6.8-1.7.2-2.5l-7.6-9z"/>
		<path d="M61.3 44.2l-7.8-9.3c-.6-.7-1.7-.8-2.5-.2-.7.6-.8 1.7-.2 2.5l7.7 9.2H19c-1 0-1.8.8-1.8 1.8S18 50 19 50h39.5l-7.7 9.2c-.6.7-.5 1.8.2 2.5.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6l7.8-9.3c2-2.6 2-5.8.1-8z"/>
	</g>
</svg>
	);
};

export default Swap;