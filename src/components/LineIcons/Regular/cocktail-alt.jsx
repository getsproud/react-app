import React from 'react';

function CocktailAlt(props) {
	const title = props.title || "cocktail alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.3 19.7c.8-.9 1-2.2.5-3.4-.5-1.1-1.6-1.8-2.9-1.8H26.6L17.1 1.9c-.6-.8-1.7-.9-2.5-.3-.8.6-.9 1.7-.3 2.5l7.8 10.4h-4.8c-1.2 0-2.3.7-2.9 1.8-.5 1.1-.4 2.4.4 3.4L30.2 38v21.3h-5.6c-1 0-1.7.8-1.8 1.7 0 1 .8 1.8 1.7 1.8h14.7c1 0 1.7-.8 1.8-1.7 0-1-.8-1.8-1.7-1.8h-5.6V38l15.6-18.3zm-24.5-1.8l3.3 4.4c.3.5.9.7 1.4.7.4 0 .7-.1 1.1-.4.8-.6.9-1.7.3-2.5l-1.7-2.3h16.9l-14 16.6-14-16.6 6.7.1z"/>
	</g>
</svg>
	);
};

export default CocktailAlt;