import React from 'react';

function CocktailAlt(props) {
	const title = props.title || "cocktail alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.5 16.4c.4-.4.5-1.1.2-1.6-.2-.5-.8-.9-1.4-.9H23.7L13.9.6c-.5-.7-1.4-.8-2.1-.3-.7.5-.8 1.4-.3 2.1L20 13.9h-7.4c-.6 0-1.1.3-1.4.9-.2.5-.2 1.2.2 1.6l19 21.8v22.9h-9.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5L32 64h11c.8 0 1.5-.7 1.5-1.5S43.9 61 43 61h-9.6V38.1l19.1-21.7zm-30.2.5l5.8 7.7c.3.4.7.6 1.2.6.3 0 .6-.1.9-.3.7-.5.8-1.4.3-2.1L26 16.9h22.1L32 35.3 15.9 16.9h6.4z"/>
	</g>
</svg>
	);
};

export default CocktailAlt;