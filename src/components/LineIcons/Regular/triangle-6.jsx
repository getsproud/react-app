import React from 'react';

function Triangle6(props) {
	const title = props.title || "triangle 6";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M35.8 17.8c-.7-2.1-2.7-3.5-4.9-3.5s-4.2 1.4-4.9 3.5l-7.8 22.4c-.6 1.6-.3 3.4.7 4.7 1 1.4 2.6 2.2 4.3 2.2h15.5c1.7 0 3.3-.8 4.3-2.2 1-1.4 1.2-3.1.7-4.7l-7.9-22.4zM40 42.9c-.3.5-.8.7-1.4.7H23.1c-.6 0-1.1-.3-1.4-.7s-.4-1-.2-1.6l7.8-22.4c.4-1.1 1.3-1.2 1.6-1.2s1.3.1 1.6 1.2l7.8 22.4c.1.5 0 1.1-.3 1.6z"/>
		<path d="M32 3C16 3 3 16 3 32s13 29 29 29 29-13 29-29S48 3 32 3zm0 54.5C17.9 57.5 6.5 46.1 6.5 32S17.9 6.5 32 6.5 57.5 17.9 57.5 32 46.1 57.5 32 57.5z"/>
	</g>
</svg>
	);
};

export default Triangle6;