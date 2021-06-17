import React from 'react';

function Hat5(props) {
	const title = props.title || "hat 5";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.2 59.2h-.6L34.3 17.4c3.4-1 6-4.2 6-7.9 0-4.6-3.7-8.3-8.3-8.3S23.7 5 23.7 9.5c0 3.8 2.5 6.9 6 7.9L8.4 59.2h-.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h48.5c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.9-1.8zm-29-49.7c0-2.6 2.1-4.8 4.8-4.8s4.8 2.1 4.8 4.8c0 2.6-2.1 4.8-4.8 4.8s-4.8-2.2-4.8-4.8zM32 20.6l19.7 38.6H12.3L32 20.6z"/>
	</g>
</svg>
	);
};

export default Hat5;