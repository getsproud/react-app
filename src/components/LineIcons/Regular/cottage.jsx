import React from 'react';

function Cottage(props) {
	const title = props.title || "cottage";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.9 27.7L36.1 3.1C35 1.9 33.6 1.3 32 1.3c-1.6 0-3 .6-4.1 1.8L5.1 27.7c-.5.5-.6 1.3-.3 1.9.3.6.9 1 1.6 1h3.4V57c0 3.2 2.6 5.8 5.8 5.8h33c3.2 0 5.8-2.6 5.8-5.8V30.7h3.4c.7 0 1.3-.4 1.6-1 .1-.7 0-1.5-.5-2zM37.5 59.3h-11V53c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5v6.3zm15-32.1c-1 0-1.8.8-1.8 1.8v28c0 1.2-1 2.3-2.3 2.3H41V53c0-4.9-4-9-9-9-4.9 0-9 4-9 9v6.3h-7.5c-1.2 0-2.3-1-2.3-2.3V28.9c0-1-.8-1.8-1.8-1.8h-1.1L30.5 5.4c.4-.5 1-.7 1.5-.7.6 0 1.1.2 1.5.7l20.1 21.7h-1.1z"/>
	</g>
</svg>
	);
};

export default Cottage;