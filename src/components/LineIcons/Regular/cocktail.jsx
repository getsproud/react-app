import React from 'react';

function Cocktail(props) {
	const title = props.title || "cocktail";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M50.5 3.9c-5.3 0-9.7 4.3-9.7 9.7v.9H22.9l-1.7-8.4c-.6-2.8-3-4.8-5.9-4.8H5.6c-.9 0-1.7.7-1.7 1.7s.8 1.8 1.8 1.8h9.7c1.2 0 2.2.8 2.4 2l1.5 7.7H14c-1.3 0-2.4.7-2.9 1.9-.5 1.1-.3 2.4.5 3.4l16 18.3v21.3h-6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H37c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-6V37.9l14.2-16.2c1.5 1 3.3 1.5 5.1 1.5 5.3 0 9.7-4.3 9.7-9.7s-4.2-9.6-9.5-9.6zm-29.1 14c.1 0 .1 0 0 0 .1 0 .1 0 0 0H44L29.4 34.6 14.8 17.9h6.6zm29.1 1.8c-1 0-2-.3-2.9-.8.4-.8.4-1.8 0-2.7-.5-1.1-1.6-1.9-2.9-1.9h-.3c0-.3-.1-.6-.1-.9 0-3.4 2.8-6.2 6.2-6.2 3.4 0 6.2 2.8 6.2 6.2s-2.8 6.3-6.2 6.3z"/>
	</g>
</svg>
	);
};

export default Cocktail;