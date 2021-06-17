import React from 'react';

function Lolipop(props) {
	const title = props.title || "lolipop";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.7 21.9c0-11.4-9.3-20.7-20.7-20.7s-20.7 9.3-20.7 20.7c0 10.8 8.4 19.7 19 20.6V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V42.6c10.5-1 18.8-9.8 18.8-20.7zM32 39.1c-9.5 0-17.2-7.7-17.2-17.2S22.5 4.8 32 4.8 49.2 12.5 49.2 22 41.5 39.1 32 39.1z"/>
		<path d="M32 12.3c-5.3 0-9.7 4.3-9.7 9.7s4.3 9.7 9.7 9.7c5.3 0 9.7-4.3 9.7-9.7s-4.4-9.7-9.7-9.7zm0 15.8c-3.4 0-6.2-2.8-6.2-6.2 0-3.4 2.8-6.2 6.2-6.2 3.4 0 6.2 2.8 6.2 6.2 0 3.4-2.8 6.2-6.2 6.2z"/>
	</g>
</svg>
	);
};

export default Lolipop;