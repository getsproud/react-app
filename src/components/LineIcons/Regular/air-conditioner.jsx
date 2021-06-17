import React from 'react';

function AirConditioner(props) {
	const title = props.title || "air conditioner";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 9.4H6c-2.6 0-4.8 2.1-4.8 4.8v18.1C1.3 36 4.3 39 8 39h48c3.7 0 6.8-3 6.8-6.8v-18c0-2.6-2.2-4.8-4.8-4.8zM6 12.9h52c.7 0 1.3.6 1.3 1.3v12.4H4.8V14.2c0-.7.5-1.3 1.2-1.3zm50 22.6H8c-1.8 0-3.3-1.5-3.3-3.3V30h54.5v2.2c.1 1.9-1.4 3.3-3.2 3.3z"/>
		<path d="M12.7 43.4c-1 0-1.8.8-1.8 1.8v3.9c0 1.1-.9 2-2 2H5.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H9c3 0 5.5-2.5 5.5-5.5v-3.9c0-1.1-.8-1.9-1.8-1.9z"/>
		<path d="M25.2 43.4c-1 0-1.8.8-1.8 1.8v3.9c0 1.1-.9 2-2 2h-3.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.9c3 0 5.5-2.5 5.5-5.5v-3.9c.1-1.1-.7-1.9-1.7-1.9z"/>
		<path d="M58.9 51.1H55c-1.1 0-2-.9-2-2v-3.9c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v3.9c0 3 2.5 5.5 5.5 5.5h3.9c1 0 1.8-.8 1.8-1.8s-.7-1.7-1.7-1.7z"/>
		<path d="M46.4 51.1h-3.9c-1.1 0-2-.9-2-2v-3.9c0-1-.8-1.8-1.8-1.8s-1.7.8-1.7 1.8v3.9c0 3 2.5 5.5 5.5 5.5h3.9c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default AirConditioner;