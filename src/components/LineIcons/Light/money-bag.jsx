import React from 'react';

function MoneyBag(props) {
	const title = props.title || "money bag";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.5 11.5h-51C2.9 11.5 0 14.4 0 18v28c0 3.6 2.9 6.5 6.5 6.5h51c3.6 0 6.5-2.9 6.5-6.5V18c0-3.6-2.9-6.5-6.5-6.5zM61 38.9H49.1c-1 0-1.8-.8-1.8-1.8V26.9c0-1 .8-1.8 1.8-1.8H61v13.8zm-3.5 10.6h-51C4.6 49.5 3 47.9 3 46V18c0-1.9 1.6-3.5 3.5-3.5h51c1.9 0 3.5 1.6 3.5 3.5v4.1H49.1c-2.7 0-4.8 2.2-4.8 4.8V37c0 2.7 2.2 4.8 4.8 4.8H61V46c0 1.9-1.6 3.5-3.5 3.5z"/>
		<path d="M53.7 34.1c1.1 0 2.1-.9 2.1-2.1s-.9-2.1-2.1-2.1c-1.1 0-2.1.9-2.1 2.1s1 2.1 2.1 2.1z"/>
	</g>
</svg>
	);
};

export default MoneyBag;