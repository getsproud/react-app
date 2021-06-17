import React from 'react';

function Stopwatch(props) {
	const title = props.title || "stopwatch";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M33.8 11.3V4.8h4.5C39.2 4.8 40 4 40 3s-.8-1.8-1.8-1.8H25.7C24.8 1.3 24 2 24 3s.8 1.8 1.8 1.8h4.5v6.5c-13.4.9-24 12.1-24 25.7 0 14.2 11.6 25.8 25.8 25.8 14.2 0 25.8-11.6 25.8-25.8-.1-13.6-10.8-24.8-24.1-25.7zm-1.8 48c-12.3 0-22.3-10-22.3-22.3s10-22.3 22.3-22.3 22.3 10 22.3 22.3-10 22.3-22.3 22.3z"/>
		<path d="M33.8 31.2v-8.5c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v8.5c-2.5.8-4.4 3.1-4.4 5.9 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-2.8-1.9-5.1-4.4-5.9zM32 39.8c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7 2.7 1.2 2.7 2.7-1.2 2.7-2.7 2.7z"/>
	</g>
</svg>
	);
};

export default Stopwatch;