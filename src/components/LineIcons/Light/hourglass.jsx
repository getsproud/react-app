import React from 'react';

function Hourglass(props) {
	const title = props.title || "hourglass";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M39.9 64H24.1c-3.5 0-6.7-1.7-8.6-4.4-1.8-2.6-2.2-5.8-1.1-8.8L21.6 32l-7.2-18.8c-1.1-3-.7-6.1 1.1-8.8C17.4 1.7 20.6 0 24.1 0H40c3.5 0 6.7 1.7 8.6 4.4 1.8 2.6 2.2 5.8 1.1 8.8L42.4 32l7.2 18.8c1.1 3 .7 6.2-1.1 8.8-1.9 2.7-5.1 4.4-8.6 4.4zM24.1 3c-2.5 0-4.8 1.2-6.1 3.1-1.2 1.8-1.5 4-.7 6L24.6 31c.2.6.2 1.3 0 1.9l-7.3 18.9c-.8 2-.5 4.2.7 6 1.3 2 3.6 3.1 6.1 3.1H40c2.5 0 4.8-1.2 6.1-3.1 1.2-1.8 1.5-4 .7-6l-7.3-18.9c-.2-.6-.2-1.3 0-1.9l7.3-18.9c.8-2 .5-4.2-.7-6C44.8 4.1 42.5 3 40 3H24.1zm18.2 29.1zm-20.6 0zm20.6-.2z"/>
	</g>
</svg>
	);
};

export default Hourglass;