import React from 'react';

function TableLamp(props) {
	const title = props.title || "table lamp";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59 59.3H47.7V7.6c0-3.5-2.8-6.3-6.3-6.3H21.2c-3.5 0-6.3 2.8-6.3 6.3v1.6c-6.6.9-11.7 6.5-11.7 13.3v6c0 1 .8 1.8 1.8 1.8h23.4c1 0 1.8-.8 1.8-1.8v-6c0-6.8-5.1-12.5-11.7-13.3V7.6c0-1.6 1.3-2.8 2.8-2.8h20.1c1.6 0 2.8 1.3 2.8 2.8v51.7H32.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H59c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8zM26.6 22.5v4.3H6.7v-4.3c0-5.5 4.5-9.9 9.9-9.9s10 4.4 10 9.9z"/>
	</g>
</svg>
	);
};

export default TableLamp;