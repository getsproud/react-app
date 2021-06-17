import React from 'react';

function BaloonAlt2(props) {
	const title = props.title || "baloon alt 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.5 20.7C51.5 10 42.7 1.3 32 1.3S12.5 10 12.5 20.8c0 20.6 13.3 26.5 17.7 27.9V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V48.7c4.4-1.4 17.7-7.4 17.7-28zM32 45.6c-2.3-.6-16-4.7-16-24.8 0-8.8 7.2-16 16-16s16 7.2 16 16C48 40.9 34.3 45 32 45.6z"/>
		<path d="M35.7 11.4c-.7.6-.8 1.8-.1 2.5.8.9 3.1 4.1 2.7 6.6-.2 1.1-.9 2-2.3 2.8-.8.5-1.1 1.5-.7 2.4.3.6.9.9 1.5.9.3 0 .6-.1.8-.2 2.9-1.6 3.8-3.7 4-5.3.8-4.6-3.1-9-3.6-9.5-.5-.8-1.6-.9-2.3-.2z"/>
	</g>
</svg>
	);
};

export default BaloonAlt2;