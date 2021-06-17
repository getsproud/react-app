import React from 'react';

function Sketchbook(props) {
	const title = props.title || "sketchbook";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 13.4H11.3c-2.6 0-4.8 2.1-4.8 4.8v3.6H3c-1 0-1.8.8-1.8 1.8S2 25.3 3 25.3h3.6v5.4H3c-1 0-1.8.8-1.8 1.8S2 34.3 3 34.3h3.6v5.4H3c-1 0-1.8.8-1.8 1.8S2 43.2 3 43.2h3.6v2.6c0 2.6 2.1 4.8 4.8 4.8H58c2.6 0 4.8-2.1 4.8-4.8V18.2c0-2.6-2.2-4.8-4.8-4.8zm1.3 32.4c0 .7-.6 1.3-1.3 1.3H11.3c-.7 0-1.3-.6-1.3-1.3v-2.6h1.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H10v-5.4h1.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H10v-5.4h1.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H10V18c0-.7.6-1.3 1.3-1.3H58c.7 0 1.3.6 1.3 1.3v27.8z"/>
	</g>
</svg>
	);
};

export default Sketchbook;