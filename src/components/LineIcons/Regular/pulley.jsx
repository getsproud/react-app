import React from 'react';

function Pulley(props) {
	const title = props.title || "pulley";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.2 11.9c-.7-.7-1.8-.7-2.5 0L48.9 22.7c-.8-1.6-1.9-3.1-3.2-4.4-1.3-1.3-2.8-2.4-4.4-3.2L52.1 4.2c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0l-12 12c-1.3-.3-2.7-.5-4.1-.5-4.6 0-8.9 1.8-12.2 5-7.6 7.6-6.7 24.1-6.3 28.1l-3.5 3.5c-1.4 1.4-1.8 3.5-1.1 5.4.4 1.3-.1 2.7-1.3 3.5-.9.6-2.1.6-3 0-1.6-1-1.7-2.8-1.1-3.9.5-.8.2-1.9-.7-2.4-.8-.5-1.9-.2-2.4.7-1.7 3-.7 6.8 2.3 8.6 1 .6 2.2.9 3.3.9 1.2 0 2.3-.3 3.4-1 2.6-1.6 3.7-4.7 2.7-7.6-.2-.7-.1-1.4.3-1.8l3.5-3.5c3.9.4 20.5 1.4 28.2-6.3 4.4-4.4 5.9-10.6 4.5-16.3l12-12c.8-.4.8-1.5.1-2.2zM43.3 40.1c-6.2 6.2-20.2 5.7-24.7 5.3-.3-4.5-.9-18.5 5.3-24.7 2.6-2.6 6-4 9.7-4 3.7 0 7.1 1.4 9.7 4 5.3 5.4 5.3 14.1 0 19.4z"/>
		<path d="M27.8 23.7c-3.5 3.5-3.5 9.1 0 12.6 1.7 1.7 4 2.6 6.3 2.6s4.6-.9 6.3-2.6c3.5-3.5 3.5-9.1 0-12.6s-9.2-3.5-12.6 0zm10.1 10.1c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.6 1.1-1.1 2.4-1.6 3.8-1.6s2.8.5 3.8 1.6c2.1 2 2.1 5.5 0 7.6z"/>
	</g>
</svg>
	);
};

export default Pulley;