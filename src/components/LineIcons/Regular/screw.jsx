import React from 'react';

function Screw(props) {
	const title = props.title || "screw";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.9 16.2c0-6.6-11.3-15-23.9-15-12.7 0-23.9 8.4-23.9 15 0 4.8 5.8 8.8 14.4 10.5v25.7c0 2 .8 3.9 2.3 5.3l4.1 3.9c.9.8 2 1.2 3.1 1.2s2.2-.4 3.1-1.2l4.1-3.9c1.5-1.4 2.3-3.3 2.3-5.3V26.7C50.2 25 55.9 21 55.9 16.2zM26 40l12-4v6.6l-12 4V40zm12-7.7l-12 4v-8.7h12v4.7zm-1.2 22.8L32.7 59c-.4.4-1 .4-1.4 0l-4.1-3.9c-.8-.7-1.2-1.7-1.2-2.7v-2l12-4v6c0 1-.4 2-1.2 2.7zM32 24c-12 0-20.4-4.1-20.4-7.8 0-3.9 8.6-11.5 20.4-11.5s20.4 7.5 20.4 11.5C52.4 19.9 44 24 32 24z"/>
	</g>
</svg>
	);
};

export default Screw;