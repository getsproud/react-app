import React from 'react';

function DollarCard(props) {
	const title = props.title || "dollar card";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.4 4.2H7.6c-4.2 0-7.6 3.2-7.6 7v30.5c0 3.9 3.4 7 7.6 7h27.2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H7.6c-2.5 0-4.6-1.8-4.6-4V26.6h58V39c0 .8.7 1.5 1.5 1.5S64 39.8 64 39V11.2c0-3.9-3.4-7-7.6-7zm-48.8 3h48.8c2.5 0 4.6 1.8 4.6 4v4H3v-4c0-2.2 2.1-4 4.6-4zM3 23.6v-5.3h58v5.3H3z"/>
		<path d="M52.7 45.7h-5.4c-1.5 0-2.8-1.2-2.8-2.7s1.2-2.7 2.8-2.7h6.9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-4V36c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v1.3c-3.1.1-5.6 2.6-5.6 5.6 0 3.1 2.6 5.7 5.8 5.7h5.4c1.5 0 2.8 1.2 2.8 2.7S54.4 54 52.8 54h-9.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h4v1.3c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V57h2.6c3.2 0 5.8-2.5 5.8-5.7s-2.7-5.6-5.9-5.6z"/>
	</g>
</svg>
	);
};

export default DollarCard;