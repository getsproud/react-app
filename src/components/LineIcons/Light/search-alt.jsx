import React from 'react';

function SearchAlt(props) {
	const title = props.title || "search alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.4 58.6L44.7 43.4c3.5-4.4 5.4-9.8 5.4-15.5 0-6.7-2.6-13-7.3-17.7C33 .4 17.1.4 7.3 10.2 2.6 14.9 0 21.1 0 27.8c0 6.7 2.6 13 7.3 17.7 4.9 4.9 11.3 7.3 17.7 7.3 6.4 0 12.8-2.4 17.7-7.3l18.8 15.3c.3.2.6.3.9.3.4 0 .9-.2 1.2-.6.6-.5.5-1.4-.2-1.9zM9.5 43.4C5.3 39.3 3 33.7 3 27.8s2.3-11.4 6.5-15.6c4.3-4.3 10-6.5 15.6-6.5 5.7 0 11.3 2.2 15.6 6.5 4.2 4.2 6.5 9.7 6.5 15.6s-2.3 11.4-6.5 15.6c-8.6 8.6-22.6 8.6-31.2 0z"/>
	</g>
</svg>
	);
};

export default SearchAlt;