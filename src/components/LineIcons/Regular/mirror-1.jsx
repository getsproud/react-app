import React from 'react';

function Mirror1(props) {
	const title = props.title || "mirror 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.8 59.3h-4.6v-12-.4c4.6-4.7 7.5-11.9 7.5-19.9 0-14.2-9.2-25.8-20.6-25.8S11.4 12.8 11.4 27.1c0 8 2.9 15.1 7.5 19.9v12.3h-4.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h35.6c1 0 1.8-.8 1.8-1.8s-1-1.8-1.9-1.8zM32 4.8c9.4 0 17.1 10 17.1 22.3S41.4 49.4 32 49.4s-17.1-10-17.1-22.3S22.6 4.8 32 4.8zm-9.7 45c2.9 1.9 6.2 3 9.7 3 3.5 0 6.8-1.1 9.7-3v9.4H22.3v-9.4z"/>
	</g>
</svg>
	);
};

export default Mirror1;