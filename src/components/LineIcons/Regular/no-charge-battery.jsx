import React from 'react';

function NoChargeBattery(props) {
	const title = props.title || "no charge battery";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M11.4 5c-.5-.8-1.6-1.2-2.4-.7-.9.5-1.2 1.5-.7 2.4l5 9.2H8.5c-4 0-7.3 3.3-7.3 7.3v17.7c0 4 3.3 7.3 7.3 7.3h22.2L36.6 59c.3.6.9.9 1.5.9.3 0 .6-.1.8-.2.9-.5 1.2-1.5.7-2.4L11.4 5zM8.5 44.6c-2.1 0-3.8-1.7-3.8-3.8V23.1c0-2.1 1.7-3.8 3.8-3.8h6.7l13.7 25.2H8.5z"/>
		<path d="M58 24.6h-3.5v-1.4c0-4-3.3-7.3-7.3-7.3H27.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h19.4c2.1 0 3.8 1.7 3.8 3.8V41c0 2.1-1.7 3.8-3.8 3.8h-5.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h5.7c4 0 7.3-3.3 7.3-7.3v-1.4H58c2.6 0 4.8-2.1 4.8-4.8v-5.3c0-2.9-2.2-5-4.8-5zm1.3 10.1c0 .7-.6 1.3-1.3 1.3h-3.5v-7.8H58c.7 0 1.3.6 1.3 1.3v5.2z"/>
	</g>
</svg>
	);
};

export default NoChargeBattery;