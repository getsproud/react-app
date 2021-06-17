import React from 'react';

function Mustache(props) {
	const title = props.title || "mustache";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.2 4.6c-.3-1.4-1.4-2.4-2.8-2.7-1.4-.3-2.8.4-3.5 1.5-3.4 5.3-9.4 4.7-13.8 3.2-3.6-1.2-7.5-.4-10.3 1.9-2.8-2.4-6.7-3.1-10.3-1.9C17 8.1 11 8.7 7.6 3.5c-.6-1-1.7-1.6-2.9-1.6-1.9 0-3.4 1.5-3.5 3.4v55.1c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V21.8c3.1 3.4 8.7 7.9 17 8.9 4 .3 7.5-.6 10-2.6 4.2 3.2 10.3 3 15 1.6C56.2 26.9 65 17.9 62.2 4.6zM45.8 26.4c-4 1.2-9.7 1.4-12.7-1.8-.3-.4-.8-.6-1.3-.6s-1 .2-1.3.6c-2.4 2.6-6.3 2.8-8.4 2.6C10.5 26 4.9 16.2 4.8 16.1V5.5c3.5 5.4 10 7.1 17.8 4.5 2.8-.9 6 0 7.9 2.2.7.8 2 .8 2.7 0C35 10 38.2 9.1 41 10c7.8 2.5 14.3.8 17.8-4.7 2.4 11.2-4.8 18.7-13 21.1z"/>
	</g>
</svg>
	);
};

export default Mustache;