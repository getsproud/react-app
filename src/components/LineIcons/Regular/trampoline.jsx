import React from 'react';

function Trampoline(props) {
	const title = props.title || "trampoline";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 6.8C15 6.8 1.3 16.3 1.3 28v16.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-6.4C9.6 44.1 19 48.6 30 49.1v6.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-6.3c11.2-.4 20.8-4.9 25.8-11.3v6.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V28C62.8 16.3 49 6.8 32 6.8zm0 38.8C17 45.6 4.8 37.7 4.8 28S17 10.3 32 10.3s27.3 7.9 27.3 17.6S47 45.6 32 45.6z"/>
		<path d="M32 17.7c-8.2 0-14.6 4.5-14.6 10.3S23.8 38.3 32 38.3 46.6 33.8 46.6 28 40.2 17.7 32 17.7zm0 17.1c-6 0-11.1-3.1-11.1-6.8 0-3.7 5.1-6.8 11.1-6.8s11.1 3.1 11.1 6.8c0 3.7-5.1 6.8-11.1 6.8z"/>
	</g>
</svg>
	);
};

export default Trampoline;