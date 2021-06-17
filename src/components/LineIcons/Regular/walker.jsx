import React from 'react';

function Walker(props) {
	const title = props.title || "walker";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.2 47.3l-4.3-32.2C46.9 7.2 40 1.3 32.1 1.3c-8 0-14.8 6-15.9 13.9l-4.3 32.2c-3.9.4-7 3.7-7 7.7 0 4.3 3.5 7.7 7.7 7.7s7.7-3.5 7.7-7.7c0-3.3-2.1-6.2-5-7.3l1.1-8h31.3l1.1 8c-3 1.1-5.2 3.9-5.2 7.3 0 4.3 3.5 7.7 7.7 7.7 4.3 0 7.7-3.5 7.7-7.7.1-4.1-2.9-7.3-6.8-7.8zM32.1 4.8c6.2 0 11.6 4.7 12.4 10.8l1.1 8.3h-27l1.1-8.3c.8-6.2 6.1-10.8 12.4-10.8zM16.9 55c0 2.3-1.9 4.2-4.2 4.2S8.4 57.3 8.4 55s1.9-4.2 4.2-4.2 4.3 1.9 4.3 4.2zm0-18.8l1.2-8.9h28l1.2 8.9H16.9zm34.4 23.1c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.8 4.2-4.2 4.2z"/>
	</g>
</svg>
	);
};

export default Walker;