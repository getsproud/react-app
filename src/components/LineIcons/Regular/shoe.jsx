import React from 'react';

function Shoe(props) {
	const title = props.title || "shoe";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.2 23.2c-.3-.4-.8-.7-1.4-.7-.5 0-1 .3-1.4.7-2.4 3.2-5.3 6-9.8 4.5-3.3-1.1-5.8-4.6-7.5-7.1-.5-.8-1.5-1-2.3-.6-1.1.6-8.7 4.9-17.2 9.7-5 2.8-10.2 5.7-14.6 8.2-1.4.8-2 2.3-1.6 3.8.4 1.5 1.7 2.5 3.2 2.5h52.2c3.3 0 6-2.7 6-6.1-.4-8.1-2.2-10.7-5.6-14.9zm-.4 17.5H5.2c3.6-2 8.3-4.7 13-7.3l2.4 1.9c.3.3.7.4 1.1.4.5 0 1-.2 1.4-.7.6-.8.5-1.9-.3-2.5l-1.3-1c1.3-.7 2.5-1.4 3.7-2.1l2.6 2.1c.3.3.7.4 1.1.4.5 0 1-.2 1.4-.7.6-.8.5-1.9-.3-2.5l-1.5-1.2c2.8-1.6 5.2-2.9 6.6-3.7 1.9 2.7 4.7 5.9 8.3 7.2 6.1 2 10.1-1.3 12.4-3.9 2.1 2.7 3.1 5 3.4 11.1 0 1.4-1.1 2.5-2.4 2.5z"/>
	</g>
</svg>
	);
};

export default Shoe;