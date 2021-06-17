import React from 'react';

function RestaurantTable(props) {
	const title = props.title || "restaurant table";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 6.5H3c-1 0-1.8.8-1.8 1.8 0 7.5 6.1 13.6 13.6 13.6h15.4V36h-8.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h8.1v6.5c0 1-.4 8.1-8.1 8.1-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8c3.4 0 6.2-1 8.2-3.1.7-.7 1.2-1.4 1.7-2.2.4.8 1 1.5 1.7 2.2 2 2 4.8 3.1 8.2 3.1 1 0 1.8-.8 1.8-1.8s-.8-2-1.8-2c-7.9 0-8.1-7.3-8.1-8.1v-6.4H42c1 0 1.8-.8 1.8-1.8s-.9-1.7-1.9-1.7h-8.2V21.8h15.4c7.5 0 13.6-6.1 13.6-13.6 0-1-.7-1.7-1.7-1.7zM49.2 18.3H14.8c-5 0-9.1-3.6-9.9-8.3h54.2c-.8 4.7-5 8.3-9.9 8.3z"/>
	</g>
</svg>
	);
};

export default RestaurantTable;