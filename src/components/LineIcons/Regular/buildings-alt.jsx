import React from 'react';

function BuildingsAlt(props) {
	const title = props.title || "buildings alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 16H16.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H32c1 0 1.8-.8 1.8-1.8S33 16 32 16z"/>
		<path d="M32 29.6H16.1c-1 0-1.8.8-1.8 1.8s.8 1.7 1.8 1.7H32c1 0 1.8-.8 1.8-1.7s-.8-1.8-1.8-1.8z"/>
		<path d="M55.4 8H45.3v-.9c0-3.2-2.6-5.8-5.8-5.8H8.6c-3.2 0-5.8 2.6-5.8 5.8V57c0 3.2 2.6 5.8 5.8 5.8h30.8c3.2 0 5.8-2.6 5.8-5.8v-1.3h10.1c3.2 0 5.8-2.6 5.8-5.8v-36c.1-3.3-2.5-5.9-5.7-5.9zM41.8 56.9c0 1.3-1 2.3-2.3 2.3H8.6c-1.3 0-2.3-1-2.3-2.3V7.1c0-1.3 1-2.3 2.3-2.3h30.8c1.3 0 2.3 1 2.3 2.3v49.8zm15.9-7.1c0 1.3-1 2.3-2.3 2.3H45.3V40.3h5.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-5.4v-10h5.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-5.4V11.5h10.1c1.3 0 2.3 1 2.3 2.3v36z"/>
		<path d="M32 43.1H16.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H32c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default BuildingsAlt;