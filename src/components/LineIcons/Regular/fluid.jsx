import React from 'react';

function Fluid(props) {
	const title = props.title || "fluid";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.8 34c-4.3-.6-8 .5-10.4 3-1.8 1.9-3.6 5.4-2.4 11.7.9 4.5-.2 7.6-3.1 9.1s-9 2.4-13.1-.3c-1.9-1.2-2.7-3-3.1-4.4 3.5 0 6.3-2.9 6.3-6.3v-1.4c4.2-.3 7.5-3.8 7.5-8.1V17.1c0-4.4-3.6-8-8-8.1v-.3c0-4.1-3.3-7.4-7.4-7.4-4.1 0-7.4 3.3-7.4 7.4V9c-4.4.1-8 3.7-8 8.1v20.3c0 4.2 3.2 7.7 7.3 8.1V47c0 3.4 2.8 6.2 6.2 6.3.4 2 1.5 5.2 4.8 7.3 2.5 1.6 5.5 2.2 8.4 2.2 3 0 6-.7 8.2-1.8 2-1 6.6-4.4 4.9-12.9-.8-3.8-.2-6.8 1.5-8.6 1.6-1.7 4.2-2.4 7.4-1.9 1 .1 1.8-.5 2-1.5.1-1.1-.6-2-1.6-2.1zM22.1 4.7c2.2 0 3.9 1.8 3.9 3.9V9h-7.9v-.3c0-2.2 1.8-4 4-4zm-12 32.6V17.1c0-2.5 2.1-4.6 4.6-4.6h14.6c2.5 0 4.6 2.1 4.6 4.6v2.2h-6.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H34v4.6h-3.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H34v6.5c0 2.5-2.1 4.6-4.6 4.6H14.8c-2.6-.2-4.7-2.3-4.7-4.9zm7.4 9.6v-1.4h9v1.4c0 1.6-1.3 2.8-2.8 2.8h-3.3c-1.6 0-2.9-1.3-2.9-2.8z"/>
	</g>
</svg>
	);
};

export default Fluid;