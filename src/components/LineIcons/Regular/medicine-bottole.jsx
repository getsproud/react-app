import React from 'react';

function MedicineBottole(props) {
	const title = props.title || "medicine bottole";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.2 21.5l-6.7-7.4V6c0-2.6-2.1-4.8-4.8-4.8H26.3c-2.6 0-4.8 2.1-4.8 4.8v8.1l-6.7 7.4c-2.1 2.3-3.3 5.3-3.3 8.5V58.3c0 2.5 2 4.5 4.5 4.5h32c2.5 0 4.5-2 4.5-4.5V30c0-3.2-1.2-6.2-3.3-8.5zM25 6c0-.7.6-1.3 1.3-1.3h11.4c.7.1 1.3.6 1.3 1.3v7.1H25V6zM15 38.6h14c.7 0 1.3.6 1.3 1.3v10.9c0 .7-.6 1.3-1.3 1.3H15V38.6zm34 19.7c0 .6-.4 1-1 1H16c-.6 0-1-.4-1-1v-2.8h14c2.6 0 4.8-2.1 4.8-4.8V39.8c0-2.6-2.1-4.8-4.8-4.8H15v-5c0-2.3.8-4.4 2.4-6.1l6.7-7.3H40l6.7 7.3c1.5 1.7 2.4 3.8 2.4 6.1v28.3z"/>
	</g>
</svg>
	);
};

export default MedicineBottole;