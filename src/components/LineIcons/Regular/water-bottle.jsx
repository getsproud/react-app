import React from 'react';

function WaterBottle(props) {
	const title = props.title || "water bottle";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47.1 27.3V14.2c0-2.6-2.1-4.8-4.8-4.8H38V4.8h2.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-17c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h2.4v4.7h-4.3c-2.6 0-4.8 2.1-4.8 4.8v13.1c0 2.2 1.5 4.1 3.6 4.6v8.5c-2 .5-3.6 2.4-3.6 4.6V58c0 2.6 2.1 4.8 4.8 4.8h20.7c2.6 0 4.8-2.1 4.8-4.8V44.9c0-2.2-1.5-4.1-3.6-4.6v-8.5c2.2-.5 3.7-2.3 3.7-4.5zM29.4 4.8h5.1v4.7h-5.1V4.8zm-9 9.4c0-.7.6-1.3 1.3-1.3h20.7c.7 0 1.3.6 1.3 1.3v13.1c0 .7-.6 1.3-1.3 1.3H21.7c-.7 0-1.3-.6-1.3-1.3V14.2zm3.6 26V32h16v8.1H24zM43.6 58c0 .7-.6 1.3-1.3 1.3H21.7c-.7 0-1.3-.6-1.3-1.3V44.9c0-.7.6-1.3 1.3-1.3h20.7c.7 0 1.3.6 1.3 1.3V58z"/>
	</g>
</svg>
	);
};

export default WaterBottle;