import React from 'react';

function 5gSim(props) {
	const title = props.title || "5g sim";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47 1.3H26.9c-1.7 0-3.3.7-4.4 1.9l-10 10.1c-1.2 1.2-1.8 2.7-1.8 4.4v38.9c0 3.4 2.8 6.2 6.2 6.2h30c3.4 0 6.2-2.8 6.2-6.2v-49c.1-3.6-2.7-6.3-6.1-6.3zm2.7 55.2c0 1.5-1.2 2.7-2.7 2.7H17c-1.5 0-2.7-1.2-2.7-2.7V17.6c0-.7.3-1.4.8-1.9L25 5.6c.5-.5 1.2-.8 2-.8h20c1.5 0 2.7 1.2 2.7 2.7v49z"/>
		<path d="M29.1 32.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-8.3c-1 0-1.8.8-1.8 1.8v7.8c0 1 .8 1.8 1.8 1.8h6.5v4.3h-6.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h7.3c1.5 0 2.8-1.2 2.8-2.8v-5.8c0-1.5-1.2-2.8-2.8-2.8h-5.5v-4.3h6.5z"/>
		<path d="M44.9 32.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-7.3c-1.5 0-2.8 1.2-2.8 2.8v13.6c0 1.5 1.2 2.8 2.8 2.8h6.3c1.5 0 2.8-1.2 2.8-2.8v-4.8c0-1.5-1.2-2.8-2.8-2.8h-.6c-1 0-1.8.8-1.8 1.8 0 .9.7 1.7 1.6 1.7v3.3h-4.8v-12h6.6z"/>
	</g>
</svg>
	);
};

export default 5gSim;