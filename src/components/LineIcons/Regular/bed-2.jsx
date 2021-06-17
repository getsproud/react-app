import React from 'react';

function Bed2(props) {
	const title = props.title || "bed 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 25.9H23c1.4-1.6 2.2-3.8 2.2-6 0-5.3-4.3-9.5-9.5-9.5s-9.5 4.3-9.5 9.5c0 2.3.8 4.4 2.2 6H6c-2.6 0-4.8 2.1-4.8 4.8v13c0 1 .8 1.8 1.8 1.8h1.6v3.4c0 2.6 2.1 4.8 4.8 4.8h45.4c2.6 0 4.8-2.1 4.8-4.8v-3.4H61c1 0 1.8-.8 1.8-1.8v-13c0-2.6-2.2-4.8-4.8-4.8zm-48.4-6c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zM4.8 30.7c0-.7.6-1.3 1.3-1.3h52c.7 0 1.3.6 1.3 1.3V42H4.8V30.7zm51.1 18.2c0 .7-.6 1.3-1.3 1.3H9.3c-.7 0-1.3-.6-1.3-1.3v-3.4h47.9v3.4z"/>
	</g>
</svg>
	);
};

export default Bed2;