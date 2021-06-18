import React from 'react';

function DollarValueUp(props) {
	const title = props.title || "dollar value up";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M16.5 34.7h5.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-1.9v-1c0-1-.8-1.8-1.8-1.8s-1.7.9-1.7 1.9v1h-.5c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9h2.7c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4h-5.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H17v1c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-1.2c2.1-.6 3.6-2.5 3.6-4.7 0-2.7-2.2-4.9-4.9-4.9h-2.7c-.8 0-1.4-.6-1.4-1.4-.1-.9.5-1.5 1.3-1.5z"/>
		<path d="M17.9 22.6c-9.2 0-16.6 7.5-16.6 16.6 0 9.2 7.5 16.6 16.6 16.6 9.2 0 16.6-7.5 16.6-16.6 0-9.1-7.5-16.6-16.6-16.6zm0 29.7c-7.2 0-13.1-5.9-13.1-13.1s5.9-13.1 13.1-13.1S31 32 31 39.2s-5.9 13.1-13.1 13.1z"/>
		<path d="M62.2 18.2l-9.5-9.5c-.3-.3-.8-.5-1.2-.5s-.9.2-1.2.5l-9.5 9.5c-.7.7-.7 1.8 0 2.5s1.8.7 2.5 0l6.5-6.5v28.4c0 4.4-3.6 8-8 8h-.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.5c6.3 0 11.5-5.1 11.5-11.5V14.1l6.5 6.5c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.6.7-1.7 0-2.4z"/>
	</g>
</svg>
	);
};

export default DollarValueUp;