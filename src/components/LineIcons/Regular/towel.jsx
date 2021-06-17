import React from 'react';

function Towel(props) {
	const title = props.title || "towel";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.1 1.9H10c-4.8 0-8.8 3.9-8.8 8.8v31.1c0 2.6 2.1 4.8 4.8 4.8h15.1v9.6c0 3.3 2.7 6 6 6h29.6c3.3 0 6-2.7 6-6V13.6c.1-6.5-5.2-11.7-11.6-11.7zm8.2 11.7v34.2H24.6V10.6c0-2-.7-3.8-1.8-5.3H51c4.6.1 8.3 3.8 8.3 8.3zM6 43c-.7 0-1.3-.6-1.3-1.3V10.6c0-2.9 2.4-5.3 5.3-5.3h5.8c2.9 0 5.3 2.4 5.3 5.3V43H6zm50.7 15.6H27.1c-1.4 0-2.5-1.1-2.5-2.5v-4.8h34.7v4.8c0 1.4-1.2 2.5-2.6 2.5z"/>
	</g>
</svg>
	);
};

export default Towel;