import React from 'react';

function RestaurantMenu(props) {
	const title = props.title || "restaurant menu";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M48.1 25.1h-1.4c-.8-5.9-5.5-10.6-11.4-11.4v-1.6c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v1.6c-5.9.8-10.6 5.5-11.4 11.4h-1.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h29.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8zm-14.6-8c4.8 0 8.8 3.5 9.6 8H23.9c.8-4.5 4.8-8 9.6-8z"/>
		<path d="M55 1.3H12C9.4 1.3 7.2 3.4 7.2 6v10.4H6c-1 0-1.8.8-1.8 1.8S5 19.9 6 19.9h1.3v10.4H6c-1 0-1.8.8-1.8 1.8S5 33.9 6 33.9h1.3v10.4H6c-1 0-1.8.8-1.8 1.8S5 47.6 6 47.6h1.3V58c0 2.6 2.1 4.8 4.8 4.8H55c2.6 0 4.8-2.1 4.8-4.8V6c0-2.6-2.1-4.7-4.8-4.7zM56.3 58c0 .7-.6 1.3-1.3 1.3H12c-.7 0-1.3-.6-1.3-1.3V6c0-.7.6-1.3 1.3-1.3h43c.7 0 1.3.6 1.3 1.3v52z"/>
		<path d="M39.6 36.5H27.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h12.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.7-1.8z"/>
		<path d="M39.6 44.8H27.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h12.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.7-1.8z"/>
	</g>
</svg>
	);
};

export default RestaurantMenu;