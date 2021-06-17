import React from 'react';

function LaptopTimer(props) {
	const title = props.title || "laptop timer";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 36c7.4 0 13.5-6.1 13.5-13.5S39.4 9 32 9s-13.5 6.1-13.5 13.5S24.6 36 32 36zm0-23.5c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10z"/>
		<path d="M32.6 27c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.7.7-1.8 0-2.5l-1.9-1.9v-3.4c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v4.1c0 .5.2.9.5 1.2l2.6 2.5z"/>
		<path d="M61 51.5h-3V26c0-2.9-2.4-5.3-5.3-5.3H50c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h2.7c1 0 1.8.8 1.8 1.8v25.5h-45V26c0-1 .8-1.8 1.8-1.8H14c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7h-2.7c-3 0-5.3 2.4-5.3 5.3v25.5H3c-1 0-1.8.8-1.8 1.8S2 55 3 55h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default LaptopTimer;