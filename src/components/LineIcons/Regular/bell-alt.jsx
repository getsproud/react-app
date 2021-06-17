import React from 'react';

function BellAlt(props) {
	const title = props.title || "bell alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.7 37.2v-9.7c0-9.2-7-16.7-15.9-17.6V5.1c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V10c-8.9.9-15.9 8.4-15.9 17.6v9.6s-.3 4.3-1.7 7.9c-.8 1.9-.5 4 .6 5.6 1.1 1.7 3 2.6 5 2.6h5.5c.5 4.1 4.1 7.3 8.3 7.3 4.3 0 7.8-3.2 8.3-7.3h5.5c2 0 3.9-1 5-2.6 1.1-1.7 1.3-3.8.6-5.6-1.5-3.7-1.7-7.9-1.7-7.9zM32 57.1c-2.3 0-4.3-1.6-4.8-3.8h9.5c-.4 2.2-2.4 3.8-4.7 3.8zm15.9-8.4c-.5.7-1.2 1.1-2.1 1.1H18.2c-.8 0-1.6-.4-2.1-1.1-.5-.7-.6-1.6-.2-2.3 1.7-4.2 2-8.9 2-9.2v-9.7c0-7.8 6.4-14.2 14.2-14.2s14.2 6.4 14.2 14.2v9.8c0 .2.3 4.9 2 9.1.2.8.1 1.6-.4 2.3z"/>
		<path d="M11.9 7.1c-.7-.7-1.8-.6-2.5.1-5.3 5.7-8.2 13.1-8.2 20.9 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-6.9 2.6-13.5 7.3-18.5.6-.7.6-1.8-.2-2.5z"/>
		<path d="M54.5 7.2c-.7-.7-1.8-.8-2.5-.1-.7.7-.8 1.8-.1 2.5 4.7 5.1 7.3 11.6 7.3 18.5 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-7.8-3-15.2-8.3-20.9z"/>
	</g>
</svg>
	);
};

export default BellAlt;