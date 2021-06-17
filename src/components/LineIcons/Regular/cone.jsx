import React from 'react';

function Cone(props) {
	const title = props.title || "cone";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 46.7h-3.4L36.2 6c-.8-1.7-2.4-2.7-4.2-2.7-1.8 0-3.4 1-4.2 2.7L9.4 46.7H6c-2.6 0-4.8 2.1-4.8 4.8V56c0 2.6 2.1 4.8 4.8 4.8h52c2.6 0 4.8-2.1 4.8-4.8v-4.5c0-2.7-2.2-4.8-4.8-4.8zM22.4 26.4h19.2l4.4 9.7H18l4.4-9.7zm8.6-19c.3-.6.8-.6 1-.6.2 0 .7.1 1 .6l7 15.5H24l7-15.5zM16.4 39.6h31.1l3.2 7H13.3l3.1-7zM59.3 56c0 .7-.6 1.3-1.3 1.3H6c-.7 0-1.3-.6-1.3-1.3v-4.5c0-.7.6-1.3 1.3-1.3h52c.7 0 1.3.6 1.3 1.3V56z"/>
	</g>
</svg>
	);
};

export default Cone;