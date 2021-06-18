import React from 'react';

function TreeAlt3(props) {
	const title = props.title || "tree alt 3";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.2 31c-.8-1.1-1.9-2-3-2.7.2-1 .3-2 .3-3 0-3.6-1.3-7.2-3.7-9.9-1.8-2-4-3.6-6.5-4.5-.5-2.3-1.7-4.4-3.4-6-2.4-2.3-5.5-3.6-8.8-3.6s-6.5 1.3-8.8 3.6c-1.7 1.7-2.9 3.7-3.4 6-2.5.9-4.8 2.4-6.5 4.5-2.4 2.8-3.7 6.3-3.7 9.9 0 1 .1 2 .3 3-1.1.7-2.2 1.6-3 2.7-1.7 2.1-2.6 4.7-2.6 7.4 0 6.6 5.3 11.9 11.9 11.9h14.1v8.9h-6.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h17.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H34v-8.9h14.1C54.7 50.3 60 45 60 38.4c-.2-2.6-1.2-5.3-2.8-7.4zm-9.3 15.8H33.8v-5.2l6.1-3.7c.8-.5 1.1-1.6.6-2.4-.5-.8-1.6-1.1-2.4-.6l-4.3 2.6V32l6.1-3.7c.8-.5 1.1-1.6.6-2.4-.5-.8-1.6-1.1-2.4-.6L33.8 28v-5.1c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v8.9l-6-2c-.9-.3-1.9.2-2.2 1.1-.3.9.2 1.9 1.1 2.2l7.2 2.4v11.3H16.1c-4.6 0-8.4-3.8-8.4-8.4 0-1.9.7-3.8 1.8-5.2.8-1 1.9-1.8 3.1-2.4.8-.4 1.2-1.3.9-2.1-.3-1.1-.5-2.2-.5-3.4 0-2.8 1-5.5 2.8-7.7 1.5-1.8 3.6-3.1 5.8-3.7.7-.2 1.2-.7 1.3-1.4.3-2 1.2-3.7 2.6-5.1 1.7-1.7 4-2.6 6.4-2.6 2.4 0 4.7.9 6.4 2.6 1.4 1.4 2.3 3.2 2.6 5.1.1.7.6 1.3 1.3 1.4 2.3.6 4.3 1.9 5.8 3.7 1.8 2.1 2.8 4.9 2.8 7.7 0 1.2-.2 2.3-.5 3.4-.3.8.1 1.7.9 2.1 1.2.5 2.2 1.4 3.1 2.4 1.2 1.5 1.8 3.3 1.8 5.2.2 4.7-3.6 8.4-8.2 8.4z"/>
	</g>
</svg>
	);
};

export default TreeAlt3;