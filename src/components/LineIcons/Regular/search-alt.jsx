import React from 'react';

function SearchAlt(props) {
	const title = props.title || "search alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.1 57L44.5 42.8c7.3-9.5 6.6-23.1-2.1-31.8-4.6-4.6-10.6-7.1-17.1-7.1S12.9 6.4 8.3 11c-9.4 9.4-9.4 24.8 0 34.2 4.6 4.6 10.6 7.1 17.1 7.1 6.3 0 12.3-2.4 16.8-6.8l17.7 14.4c.3.3.7.4 1.1.4.5 0 1-.2 1.4-.6.6-1 .5-2.1-.3-2.7zm-36.7-8.3c-5.5 0-10.7-2.2-14.6-6.1-8.1-8.1-8.1-21.2 0-29.2 3.9-3.9 9.1-6.1 14.6-6.1S36.1 9.4 40 13.4c8.1 8.1 8.1 21.2 0 29.2-3.9 4-9.1 6.1-14.6 6.1z"/>
	</g>
</svg>
	);
};

export default SearchAlt;