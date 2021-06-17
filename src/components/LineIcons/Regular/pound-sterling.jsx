import React from 'react';

function PoundSterling(props) {
	const title = props.title || "pound sterling";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M40.2 38.8h-9c.4-.8.6-1.7.6-2.7v-1.6h6.8c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-6.8v-2.4c0-1.9 1.5-3.4 3.4-3.4.9 0 1.7.3 2.3.9.7.7 1.8.6 2.5 0 .7-.7.6-1.8 0-2.5-1.3-1.2-3-1.9-4.7-1.9-3.8 0-6.9 3.1-6.9 6.9V31h-3.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.7v1.6c0 1.5-1.2 2.7-2.7 2.7h-1.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h16.3c1 0 1.8-.8 1.8-1.8s-.9-1.9-1.8-1.9z"/>
		<path d="M58 13H6c-2.6 0-4.8 2.1-4.8 4.8v28.4C1.3 48.8 3.4 51 6 51h52c2.6 0 4.8-2.1 4.8-4.8V17.8c0-2.6-2.2-4.8-4.8-4.8zm1.3 33.2c0 .7-.6 1.3-1.3 1.3H6c-.7 0-1.3-.6-1.3-1.3V17.8c0-.7.6-1.3 1.3-1.3h52c.7 0 1.3.6 1.3 1.3v28.4z"/>
		<path d="M15.1 20.7h-3.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.5c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M52.5 40H49c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.5c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default PoundSterling;