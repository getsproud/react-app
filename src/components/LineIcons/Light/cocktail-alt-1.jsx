import React from 'react';

function CocktailAlt1(props) {
	const title = props.title || "cocktail alt 1";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.2 2.5c.4-.4.4-1.1.2-1.6-.3-.5-.8-.9-1.4-.9H5.9c-.6 0-1.1.4-1.3.9-.3.5-.2 1.1.2 1.6l24.8 30.2V61H20c-.8 0-1.5.7-1.5 1.5S19.2 64 20 64h22.2c.8 0 1.5-.7 1.5-1.5S43 61 42.2 61h-9.6V32.4L57.2 2.5zM19.6 15.8l2.4-2c1.3-1.1 3.3-1.1 4.6 0 2.4 2.1 6 2.1 8.5 0 1.3-1.1 3.2-1.1 4.6 0l2.6 2.2L31 29.6 19.6 15.8zM52.8 3l-8.7 10.6-2.6-2.2c-2.5-2.1-6-2.1-8.5 0-1.3 1.1-3.3 1.1-4.6 0-2.5-2.1-6-2.1-8.5 0l-2.4 2L9.1 3h43.7z"/>
	</g>
</svg>
	);
};

export default CocktailAlt1;