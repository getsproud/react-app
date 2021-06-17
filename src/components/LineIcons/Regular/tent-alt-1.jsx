import React from 'react';

function TentAlt1(props) {
	const title = props.title || "tent alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.4 51.4L47.9 11.7V6.4c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v3.3H19.8V6.4c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v4.7L1.6 51.4c-.7 1.8-.4 3.8.7 5.4s2.9 2.5 4.8 2.5h49.8c1.9 0 3.7-.9 4.8-2.5 1.1-1.6 1.3-3.6.7-5.4zm-29.3 4.4H19.8V19.6l13.3 36.2zm-27.9-1c-.5-.6-.6-1.4-.3-2.2l11.4-31.2v34.4H7.1c-.8 0-1.5-.4-1.9-1zm53.6 0c-.5.6-1.2 1-1.9 1H36.8L21.2 13.2h23.4c0 .1.1.1.1.2L59 52.6c.4.8.3 1.5-.2 2.2z"/>
	</g>
</svg>
	);
};

export default TentAlt1;