import React from 'react';

function Plate2(props) {
	const title = props.title || "plate 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
		<path d="M32 13.7c-10.1 0-18.3 8.2-18.3 18.3 0 10.1 8.2 18.3 18.3 18.3 10.1 0 18.3-8.2 18.3-18.3 0-10.1-8.2-18.3-18.3-18.3zm0 33.1c-8.1 0-14.8-6.6-14.8-14.8S23.9 17.2 32 17.2 46.8 23.9 46.8 32 40.1 46.8 32 46.8z"/>
	</g>
</svg>
	);
};

export default Plate2;