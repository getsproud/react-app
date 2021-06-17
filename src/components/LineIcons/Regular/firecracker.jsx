import React from 'react';

function Firecracker(props) {
	const title = props.title || "firecracker";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M41.9 24.6h-8.2v-8.7c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v8.7h-8.2c-2.6 0-4.8 2.1-4.8 4.8V58c0 2.6 2.1 4.8 4.8 4.8h19.8c2.6 0 4.8-2.1 4.8-4.8V29.4c.2-2.6-2-4.8-4.6-4.8zM20.8 39.7h22.3v8H20.8v-8zm1.3-11.6h19.8c.7 0 1.3.6 1.3 1.3v6.8H20.8v-6.8c0-.7.6-1.3 1.3-1.3zm19.8 31.2H22.1c-.7 0-1.3-.6-1.3-1.3v-6.8h22.3V58c.1.7-.5 1.3-1.2 1.3z"/>
		<path d="M29.9 8.2h4.2c.3 0 .5-.2.5-.5V3.5c0-.3-.2-.5-.5-.5h-4.2c-.3 0-.5.2-.5.5v4.2c0 .2.2.5.5.5z"/>
		<path d="M40.2 13.3h4.2c.3 0 .5-.2.5-.5V8.7c0-.3-.2-.5-.5-.5h-4.2c-.3 0-.5.2-.5.5v4.2c0 .2.3.4.5.4z"/>
		<path d="M19.6 13.3h4.2c.3 0 .5-.2.5-.5V8.7c0-.3-.2-.5-.5-.5h-4.2c-.3 0-.5.2-.5.5v4.2c0 .2.2.4.5.4z"/>
	</g>
</svg>
	);
};

export default Firecracker;