import React from 'react';

function Archway(props) {
	const title = props.title || "archway";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.9 16.9h-.5v-6.7c0-3.2-2.6-5.8-5.8-5.8h-7.9c-3.2 0-5.8 2.6-5.8 5.8v6.7h-9.8v-6.7c0-3.2-2.6-5.8-5.8-5.8h-7.9c-3.2 0-5.8 2.6-5.8 5.8v6.7h-.5c-3.2 0-5.8 2.6-5.8 5.8v31c0 3.2 2.6 5.8 5.8 5.8h12.1c3.2 0 5.8-2.6 5.8-5.8v-7.4c0-3.8 3.1-7 7-7 1.9 0 3.6.7 4.9 2 1.3 1.3 2 3.1 2 4.9v7.4c0 3.2 2.6 5.8 5.8 5.8h12.1c3.2 0 5.8-2.6 5.8-5.8v-31c.2-3.1-2.5-5.7-5.7-5.7zm-16.5-6.7c0-1.3 1-2.3 2.3-2.3h7.9c1.3 0 2.3 1 2.3 2.3v6.7H40.4v-6.7zm-29.3 0c0-1.3 1-2.3 2.3-2.3h7.9c1.3 0 2.3 1 2.3 2.3v6.7H11.1v-6.7zm48.2 43.6c0 1.3-1 2.3-2.3 2.3H44.8c-1.3 0-2.3-1-2.3-2.3v-7.4c0-2.8-1.1-5.4-3.1-7.4s-4.6-3.1-7.4-3.1c-5.8 0-10.5 4.7-10.5 10.5v7.4c0 1.3-1 2.3-2.3 2.3H7.1c-1.3 0-2.3-1-2.3-2.3v-31c0-1.3 1-2.3 2.3-2.3H57c1.3 0 2.3 1 2.3 2.3v31z"/>
	</g>
</svg>
	);
};

export default Archway;