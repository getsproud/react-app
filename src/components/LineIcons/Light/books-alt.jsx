import React from 'react';

function BooksAlt(props) {
	const title = props.title || "books alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.5 40.7h-4.6V23.3h4.6c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-7V3h4.6c.8 0 1.5-.7 1.5-1.5S54.9 0 54.1 0H20.3C14.1 0 9 5.1 9 11.3v.7c0 4.8 3 8.8 7.1 10.5-2.8 2.1-4.7 5.4-4.7 9.2v.7c0 3.3 1.4 6.3 3.7 8.3H7.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h4.6V61H7.5c-.9 0-1.5.7-1.5 1.5S6.6 64 7.5 64h33.7c6.2 0 11.3-5.1 11.3-11.3V52c0-3.3-1.4-6.3-3.7-8.3H56.5c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.5-1.5zM20.3 20.3c-4.6 0-8.3-3.7-8.3-8.3v-.7C12 6.8 15.8 3 20.3 3h26.1v17.3H20.3zM49.5 52v.7c0 4.6-3.7 8.3-8.3 8.3H15.1V43.7H41.2c4.6 0 8.3 3.7 8.3 8.3zM22.8 40.7c-4.6 0-8.3-3.7-8.3-8.3v-.7c0-4.6 3.7-8.3 8.3-8.3H48.9v17.3H22.8z"/>
	</g>
</svg>
	);
};

export default BooksAlt;