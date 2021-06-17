import React from 'react';

function DropAlt(props) {
	const title = props.title || "drop alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32.3 62.7c-6.3 0-12.6-2.8-17.1-7.6-5.2-5.6-6.8-12.9-4.4-20.4 1.1-3.4 2.8-6.4 4.3-8.8.6-1 1.3-2 1.9-3L30.5 2.1c.3-.5.9-.8 1.5-.8s1.1.3 1.5.8l12.7 19.7c.4.7.9 1.4 1.4 2.1 2.5 3.7 5.1 7.6 6.1 12.2 1.3 5.8.2 11.8-2.9 16.6-3.7 5.6-9.8 9.4-16.4 10h-2.1zM32 6.2L20 24.8c-.6 1-1.3 2-1.9 3-1.4 2.2-2.9 4.9-3.9 8-2 6.3-.7 12.3 3.7 17 4.2 4.5 10.4 7 16.2 6.4 5.6-.6 10.7-3.7 13.8-8.5 2.6-3.9 3.5-9.1 2.4-13.9-.9-3.9-3.3-7.5-5.6-11-.5-.7-.9-1.4-1.4-2.1L32 6.2zM16.6 26.9z"/>
	</g>
</svg>
	);
};

export default DropAlt;