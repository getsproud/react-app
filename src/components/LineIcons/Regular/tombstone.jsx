import React from 'react';

function Tombstone(props) {
	const title = props.title || "tombstone";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M37.8 20.1h-4v-3.5c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v3.5h-4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4v9.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-9.7h4c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M55.8 59.3H52V11c0-5.4-4.4-9.8-9.8-9.8H21.8C16.4 1.3 12 5.6 12 11v48.3H8.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h47.7c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.9-1.8zM15.5 11c0-3.4 2.8-6.3 6.3-6.3h20.4c3.4 0 6.3 2.8 6.3 6.3v48.3h-33V11z"/>
	</g>
</svg>
	);
};

export default Tombstone;