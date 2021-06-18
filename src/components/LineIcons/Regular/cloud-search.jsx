import React from 'react';

function CloudSearch(props) {
	const title = props.title || "cloud search";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M50 20.9c-1.3 0-2.6.2-3.8.6C45.5 13.4 38.8 7 30.6 7c-5.8 0-11.1 3.2-13.8 8.4-8.6 0-15.6 7-15.6 15.7 0 8.6 7 15.7 15.6 15.7 1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8c-6.7 0-12.1-5.5-12.1-12.2 0-6.7 5.4-12.2 12.1-12.2h1c.8 0 1.4-.4 1.7-1.1 1.9-4.5 6.3-7.4 11.1-7.4 6.6 0 12 5.5 12 12.2 0 .5 0 .9-.1 1.3-.1.7.2 1.3.8 1.7.6.4 1.3.4 1.9.1 1.5-.9 3.1-1.3 4.8-1.3 5.1 0 9.3 4.2 9.3 9.4s-4.2 9.4-9.3 9.4h-2.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H50c7.1 0 12.8-5.8 12.8-12.9 0-7.1-5.8-12.9-12.8-12.9z"/>
		<path d="M39.7 48.7c1.3-1.6 1.9-3.6 1.9-5.7 0-2.5-1-4.9-2.8-6.7-3.8-3.7-9.9-3.7-13.6 0-1.8 1.8-2.8 4.2-2.8 6.7s1 4.9 2.8 6.7c1.9 1.8 4.3 2.8 6.8 2.8 1.8 0 3.6-.5 5.1-1.4l5.6 5.5c.3.3.8.5 1.2.5.5 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5l-5.4-5.4zm-12.1-1.5c-1.2-1.1-1.8-2.6-1.8-4.2s.6-3.1 1.8-4.2c1.2-1.2 2.8-1.8 4.4-1.8 1.6 0 3.2.6 4.4 1.8 1.2 1.1 1.8 2.6 1.8 4.2s-.6 3.1-1.8 4.2c-2.4 2.3-6.4 2.3-8.8 0z"/>
	</g>
</svg>
	);
};

export default CloudSearch;