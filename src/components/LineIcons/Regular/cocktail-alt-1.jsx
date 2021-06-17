import React from 'react';

function CocktailAlt1(props) {
	const title = props.title || "cocktail alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54.7 6.4c.8-1 .9-2.2.4-3.3s-1.6-1.8-2.8-1.8H11.7c-1.2 0-2.3.7-2.8 1.8-.5 1-.4 2.3.4 3.3l21.1 26.4v26.5h-7.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H41c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-7.1V32.5L54.7 6.4zM32 29.2L21.9 16.6l2-1.7c1.1-.9 2.7-.9 3.7 0 2.4 2.1 5.9 2.1 8.4 0 1.1-.9 2.6-.9 3.7 0l2.2 1.9L32 29.2zM51.5 4.8L44.1 14 42 12.2c-2.4-2.1-5.9-2.1-8.3 0-1.1.9-2.7.9-3.7 0-2.4-2.1-5.9-2.1-8.3 0l-1.9 1.6-7.3-9.1h39z"/>
	</g>
</svg>
	);
};

export default CocktailAlt1;