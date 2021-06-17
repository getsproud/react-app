import React from 'react';

function CottageAlt1(props) {
	const title = props.title || "cottage alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.9 27.7L36.1 3.1C35 1.9 33.6 1.3 32 1.3c-1.6 0-3 .6-4.1 1.8L5.1 27.7c-.5.5-.6 1.3-.3 1.9.3.6.9 1 1.6 1h3.4v23.1c0 4.9 4 9 9 9h26.5c4.9 0 9-4 9-9v-23h3.4c.7 0 1.3-.4 1.6-1 .2-.7.1-1.5-.4-2zM30.5 5.4c.4-.5 1-.7 1.5-.7.6 0 1.1.2 1.5.7l20.1 21.7H10.4L30.5 5.4zm7 53.9h-11V53c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5v6.3zm13.2-5.5c0 3-2.5 5.5-5.5 5.5H41V53c0-4.9-4-9-9-9-4.9 0-9 4-9 9v6.3h-4.3c-3 0-5.5-2.5-5.5-5.5V30.7h37.5v23.1z"/>
	</g>
</svg>
	);
};

export default CottageAlt1;