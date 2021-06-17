import React from 'react';

function Triangle9(props) {
	const title = props.title || "triangle 9";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.6 50.7l-15-43.4C39.3 3.6 36 1.2 32 1.2c-3.9 0-7.3 2.4-8.6 6.1l-15 43.4c-1 2.8-.5 5.8 1.2 8.2 1.7 2.4 4.4 3.8 7.4 3.8h30c3 0 5.7-1.4 7.4-3.8 1.7-2.4 2.2-5.4 1.2-8.2zm-4 6.2c-1.1 1.5-2.7 2.3-4.5 2.3H17c-1.8 0-3.5-.8-4.5-2.3-1.1-1.5-1.3-3.3-.7-5l15-43.4c1-2.8 3.3-3.7 5.2-3.7s4.3 1 5.2 3.7l15 43.4c.7 1.7.4 3.5-.6 5z"/>
	</g>
</svg>
	);
};

export default Triangle9;