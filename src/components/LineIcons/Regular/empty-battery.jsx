import React from 'react';

function EmptyBattery(props) {
	const title = props.title || "empty battery";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 24.6h-3.5v-3c0-3.2-2.6-5.8-5.8-5.8H7c-3.2 0-5.8 2.6-5.8 5.8v20.7c0 3.2 2.6 5.8 5.8 5.8h41.7c3.2 0 5.8-2.6 5.8-5.8v-3H58c2.6 0 4.8-2.1 4.8-4.8v-5.3c0-2.5-2.2-4.6-4.8-4.6zm-7 17.8c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3V21.6c0-1.2 1-2.3 2.3-2.3h41.7c1.2 0 2.3 1 2.3 2.3v20.8zm8.3-7.7c0 .7-.6 1.3-1.3 1.3h-3.5v-7.8H58c.7 0 1.3.6 1.3 1.3v5.2z"/>
	</g>
</svg>
	);
};

export default EmptyBattery;