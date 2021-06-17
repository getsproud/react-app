import React from 'react';

function Desk(props) {
	const title = props.title || "desk";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.6 1.3H3.4c-.9 0-1.7.7-1.7 1.7v11.6c0 .8.5 1.5 1.3 1.7V61c0 1 .8 1.8 1.8 1.8S6.5 62 6.5 61v-5h51.1v5c0 1 .8 1.8 1.8 1.8S61 62 61 61V16.3c.7-.2 1.3-.9 1.3-1.7V3c0-1-.8-1.7-1.7-1.7zM5.2 4.8h53.6v8.1H5.2V4.8zm1.3 11.6h51.1v36.2H6.5V16.4z"/>
		<path d="M14 32h12.4c1.5 0 2.8-1.2 2.8-2.7v-5.5c0-1.5-1.2-2.8-2.8-2.8H14c-1.5 0-2.8 1.2-2.8 2.8v5.5c0 1.5 1.2 2.7 2.8 2.7zm.7-7.5h10.9v4H14.7v-4z"/>
		<path d="M50 36H14c-1.5 0-2.8 1.2-2.8 2.8v5.5c0 1.5 1.2 2.8 2.8 2.8h36c1.5 0 2.8-1.2 2.8-2.8v-5.5c0-1.6-1.2-2.8-2.8-2.8zm-.7 7.5H14.7v-4h34.6v4z"/>
		<path d="M50 20.9H37.6c-1.5 0-2.8 1.2-2.8 2.8v5.5c0 1.5 1.2 2.8 2.8 2.8H50c1.5 0 2.8-1.2 2.8-2.8v-5.5c0-1.5-1.2-2.8-2.8-2.8zm-.7 7.5H38.4v-4h10.9v4z"/>
	</g>
</svg>
	);
};

export default Desk;