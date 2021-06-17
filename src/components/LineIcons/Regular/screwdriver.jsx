import React from 'react';

function Screwdriver(props) {
	const title = props.title || "screwdriver";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 30.3H36.4v-8.8c0-1-.8-1.8-1.8-1.8h-5.3c-1 0-1.8.8-1.8 1.8 0 1.9-1.6 3.5-3.5 3.5s-3.5-1.6-3.5-3.5c0-1-.8-1.8-1.8-1.8H8.3c-3.9 0-7 3.2-7 7v10.5c0 3.9 3.2 7 7 7h10.5c1 0 1.8-.8 1.8-1.8 0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5c0 1 .8 1.8 1.8 1.8h5.3c1 0 1.8-.8 1.8-1.8v-8.8H61c1 0 1.8-.8 1.8-1.8s-.8-1.5-1.8-1.5zM32.9 40.8h-2c-.8-3-3.5-5.3-6.8-5.3s-6 2.2-6.8 5.3h-9c-1.9 0-3.5-1.6-3.5-3.5V26.7c0-1.9 1.6-3.5 3.5-3.5h9c.8 3 3.5 5.3 6.8 5.3s6-2.2 6.8-5.3h2v17.6z"/>
	</g>
</svg>
	);
};

export default Screwdriver;