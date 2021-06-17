import React from 'react';

function CreditCard(props) {
	const title = props.title || "credit card";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.5 10.2h-57c-1.9 0-3.5 1.6-3.5 3.5v36.6c0 1.9 1.6 3.5 3.5 3.5h57c1.9 0 3.5-1.6 3.5-3.5V13.7c0-2-1.6-3.5-3.5-3.5zm-57 3h57c.3 0 .5.2.5.5v9.2H3v-9.2c0-.3.2-.5.5-.5zM61 25.9v4.6H3v-4.6h58zm-.5 24.9h-57c-.3 0-.5-.2-.5-.5V33.5h58v16.8c0 .3-.2.5-.5.5z"/>
	</g>
</svg>
	);
};

export default CreditCard;