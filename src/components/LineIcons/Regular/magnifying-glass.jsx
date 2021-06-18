import React from 'react';

function MagnifyingGlass(props) {
	const title = props.title || "magnifying glass";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54.7 9.3C44-1.4 26.5-1.4 15.8 9.3c-5.2 5.2-8.1 12.1-8.1 19.4 0 6.8 2.4 13.1 6.9 18.2L1.8 59.8c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5s.9-.2 1.2-.5l12.9-12.9c5 4.4 11.4 6.9 18.2 6.9 7.3 0 14.3-2.9 19.4-8.1 10.7-10.7 10.7-28.2 0-38.9zm-36.4 2.5c4.7-4.7 10.8-7 17-7 5.6 0 11.1 1.9 15.6 5.8l-7.1 5.8c-2.4 2-5.8 1.8-8.1-.5-1.1-1.1-2.6-1.3-3.5-1.1-.5.1-2 .4-2.9 1.8l-1.5 2.3c-1.9 2.8-5.5 3.6-8.3 1.8-1.5-.9-2.9-1.8-4.2-2.7l-1.1-.7c1.1-2.1 2.5-3.9 4.1-5.5zm7 38.8c-2.6-1.2-5-2.8-7-4.9-2.6-2.6-4.6-5.7-5.7-9.2l7.4-1.1c3.6-.5 7.2 1.6 8.6 5 1.2 3 .4 6.5-1.9 8.8l-1.4 1.4zm3.6 1.3l.2-.2c3.3-3.3 4.3-8.2 2.7-12.6-2.1-5-7.1-7.9-12.4-7.1l-7.8 1.1c-.3-1.4-.4-2.9-.4-4.4 0-2.9.5-5.7 1.5-8.3l.7.4c1.3.9 2.8 1.8 4.3 2.7 1.6 1 3.3 1.5 5.1 1.5 3.1 0 6.1-1.5 8-4.3l1.5-2.3c.1-.1.2-.2.5-.2 0 0 .3 0 .4.2 3.5 3.5 9 3.8 12.8.7l7.3-6c1.8 2 3.2 4.3 4.1 6.6l-8.7 4.5C44 26.7 41 31.6 41 36.9c0 3.8 1.5 7.5 4.3 10.3.4.4 1.6 1.2 2.6 2-3.8 2.3-8.1 3.6-12.6 3.6-2.2-.1-4.3-.3-6.4-.9zm23.3-6.2c-.4.4-.9.8-1.3 1.2-1.3-.8-2.8-1.9-3.2-2.2-2.1-2.1-3.3-4.9-3.3-7.8 0-4.1 2.3-7.8 5.9-9.8l8.1-4.2c2 8 0 16.7-6.2 22.8z"/>
	</g>
</svg>
	);
};

export default MagnifyingGlass;