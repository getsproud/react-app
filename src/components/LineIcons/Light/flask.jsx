import React from 'react';

function Flask(props) {
	const title = props.title || "flask";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.6 61.7L40.2 28V3h5.2c.8 0 1.5-.7 1.5-1.5S46.3 0 45.4 0H19.6c-.8 0-1.5.7-1.5 1.5S18.8 3 19.6 3h4.2v25L3.4 61.7c-.3.5-.3 1 0 1.5.2.5.7.8 1.2.8h54.7c.5 0 1-.3 1.3-.8s.3-1 0-1.5zM7.3 61l19.3-31.8c.1-.2.2-.5.2-.8V3h10.4v25.4c0 .3.1.5.2.8L56.7 61H7.3z"/>
	</g>
</svg>
	);
};

export default Flask;