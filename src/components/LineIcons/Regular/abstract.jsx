import React from 'react';

function Abstract(props) {
	const title = props.title || "abstract";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.2 1.3H44.9c-8.1 0-14.7 6.6-14.7 14.7v14.3H15.9C7.8 30.3 1.2 36.9 1.2 45v11.2c0 3.6 3 6.6 6.6 6.6H19c8.1 0 14.7-6.6 14.7-14.7V33.8H48c8.1 0 14.7-6.6 14.7-14.7V7.8c.1-3.6-2.9-6.5-6.5-6.5zM30.3 48.1c0 6.2-5 11.2-11.2 11.2H7.8c-1.7 0-3.1-1.4-3.1-3.1V44.9c0-6.2 5-11.2 11.2-11.2h14.3v14.4zm29-29c0 6.2-5 11.2-11.2 11.2H33.8V15.9c0-6.2 5-11.2 11.2-11.2h11.2c1.7 0 3.1 1.4 3.1 3.1v11.3z"/>
	</g>
</svg>
	);
};

export default Abstract;