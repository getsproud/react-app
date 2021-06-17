import React from 'react';

function Sofa8(props) {
	const title = props.title || "sofa 8";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.8 41.2V27.7c0-2.8-1.9-5.1-4.5-5.8v-3.3c0-5.7-4.6-10.3-10.3-10.3H16c-5.7 0-10.3 4.6-10.3 10.3v3.3c-2.6.7-4.5 3-4.5 5.8v13.5c0 3.8 2.9 7 6.6 7.4v5.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.3h41.2v5.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.3c3.6-.4 6.6-3.5 6.6-7.4zm-8-22.6v3.1c-3.2.2-5.7 2.8-5.7 6v4.4H33.8V11.8H48c3.7 0 6.8 3.1 6.8 6.8zM16 11.8h14.2v20.4H14.9v-4.4c0-3.2-2.5-5.8-5.7-6v-3.1c0-3.8 3.1-6.9 6.8-6.9zm39.3 33.4H8.7c-2.2 0-4-1.8-4-4V27.7c0-1.4 1.1-2.5 2.5-2.5h1.6c1.4 0 2.5 1.1 2.5 2.5v6.2c0 1 .8 1.8 1.8 1.8h37.7c1 0 1.8-.8 1.8-1.8v-6.2c0-1.4 1.1-2.5 2.5-2.5h1.6c1.4 0 2.5 1.1 2.5 2.5v13.5c.1 2.2-1.7 4-3.9 4z"/>
	</g>
</svg>
	);
};

export default Sofa8;