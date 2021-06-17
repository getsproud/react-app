import React from 'react';

function BuildingsAlt2(props) {
	const title = props.title || "buildings alt 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 16.2H45.5V7.7h2.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H16.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h2.1v8.5H6c-2.6 0-4.8 2.1-4.8 4.8v34c0 2.6 2.1 4.8 4.8 4.8h52c2.6 0 4.8-2.1 4.8-4.8V21c0-2.7-2.2-4.8-4.8-4.8zM42 7.7V43H22V7.7h20zM4.8 55V21c0-.7.6-1.3 1.3-1.3h12.5v36.6H6c-.7 0-1.2-.6-1.2-1.3zM22 46.5h20v9.8H22v-9.8zM59.3 55c0 .7-.6 1.3-1.3 1.3H45.5V19.7H58c.7 0 1.3.6 1.3 1.3v34z"/>
	</g>
</svg>
	);
};

export default BuildingsAlt2;