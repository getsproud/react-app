import React from 'react';

function BurgerAlt2(props) {
	const title = props.title || "burger alt 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.1 23.1C56.3 13.9 48.5 6.5 39 6.5H25c-4.9 0-9.4 1.9-12.9 5.3-3.1 3.1-4.9 7-5.2 11.3-3.3 1.5-5.6 4.7-5.6 8.4v.8c0 3.7 2.3 7 5.6 8.4.8 9.3 8.6 16.7 18.1 16.7h14c4.9 0 9.4-1.9 12.9-5.3 3.1-3 4.9-7 5.3-11.3 3.3-1.5 5.6-4.7 5.6-8.4v-.7c0-3.8-2.4-7.1-5.7-8.6zm-42.5-8.8C17.3 11.5 21 10 25 10h14c7.3 0 13.4 5.4 14.5 12.3h-43c.5-3 1.9-5.8 4.1-8zm-3.8 11.5h42.6c2.9 0 5.3 2.1 5.7 4.8H4.8c.5-2.7 3-4.8 6-4.8zm38.6 23.9C46.7 52.5 43 54 39 54H25c-7.3 0-13.4-5.4-14.5-12.3H19.2c.6 0 1.2.5 1.2 1.2 0 2.6 2.1 4.7 4.7 4.7h2.4c2.6 0 4.7-2.1 4.7-4.7v-.6c0-.6.5-1.2 1.2-1.2H35c.6 0 1.2.5 1.2 1.2v4.2c0 2.6 2.1 4.7 4.7 4.7h.5c2.6 0 4.7-2.1 4.7-4.7v-3.6c0-.3.1-.6.3-.8.2-.2.5-.3.8-.3h6.5c-.6 2.9-2 5.7-4.3 7.9zm3.8-11.5H47c-1.2 0-2.4.5-3.3 1.4-.9.9-1.4 2.1-1.4 3.3v3.6c0 .6-.5 1.2-1.2 1.2h-.5c-.6 0-1.2-.5-1.2-1.2v-4.2c0-2.6-2.1-4.7-4.7-4.7h-1.6c-2.6 0-4.7 2.1-4.7 4.7v.6c0 .6-.5 1.2-1.2 1.2h-2.4c-.6 0-1.2-.5-1.2-1.2 0-2.6-2.1-4.7-4.7-4.7h-8.4c-2.7 0-5-1.7-5.8-4H59c-.8 2.3-3.1 4-5.8 4z"/>
	</g>
</svg>
	);
};

export default BurgerAlt2;