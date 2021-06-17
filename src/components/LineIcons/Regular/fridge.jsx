import React from 'react';

function Fridge(props) {
	const title = props.title || "fridge";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M46 7H18c-3.2 0-5.8 2.6-5.8 5.8v34.7c0 2.6 1.8 4.9 4.2 5.5v2.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-2h22.9v2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-2c3-.2 5.3-2.7 5.3-5.7V12.8C51.7 9.6 49.1 7 46 7zm2.2 40.5c0 1.2-1 2.3-2.3 2.3H18c-1.2 0-2.3-1-2.3-2.3V12.8c0-1.2 1-2.3 2.3-2.3h28c1.2 0 2.3 1 2.3 2.3v34.7z"/>
		<path d="M41.8 19.6c-1 0-1.8.8-1.8 1.8V26c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-4.6c-.1-1.1-.9-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Fridge;