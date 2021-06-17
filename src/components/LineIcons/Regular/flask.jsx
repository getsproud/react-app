import React from 'react';

function Flask(props) {
	const title = props.title || "flask";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.2 51.2l-14-23.1V4.8h3.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H20.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h2.7v23.3l-14 23.1c-1.4 2.4-1.5 5.2-.1 7.7 1.4 2.4 3.8 3.9 6.6 3.9h33.3c2.8 0 5.3-1.4 6.6-3.9 1.3-2.4 1.3-5.3-.1-7.7zm-3 6c-.7 1.3-2.1 2.1-3.6 2.1H15.3c-1.5 0-2.8-.8-3.6-2.1-.7-1.3-.7-2.9.1-4.1l14.3-23.6c.2-.3.3-.6.3-.9V4.8h11.2v23.8c0 .3.1.6.3.9L52.2 53c.7 1.3.8 2.9 0 4.2z"/>
	</g>
</svg>
	);
};

export default Flask;