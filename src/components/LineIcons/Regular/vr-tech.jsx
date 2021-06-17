import React from 'react';

function VrTech(props) {
	const title = props.title || "vr tech";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54.2 59.4l-5.1-5.6 2.8-1.6c1.5-.8 2.4-2.4 2.4-4.1V25.6c0-1.8-1.1-3.5-2.8-4.3L34 13.2c-.1 0-.2-.1-.2-.1V2.9c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v10.2c-.1 0-.2 0-.2.1l-17.5 8.1c-1.7.8-2.8 2.5-2.8 4.3V48c0 1.7.9 3.3 2.4 4.1l2.8 1.6-5.1 5.6c-.6.7-.6 1.8.1 2.5.3.3.8.5 1.2.5.5 0 1-.2 1.3-.6l5.6-6.2 11.6 6.7c.7.4 1.6.6 2.4.6s1.6-.2 2.4-.6L46 55.5l5.6 6.2c.3.4.8.6 1.3.6.4 0 .8-.1 1.2-.5.7-.6.7-1.7.1-2.4zM30.3 16.9v4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-4l14.7 6.8L32 31.3l-16.5-7.5 14.8-6.9zm-9.9 36l3.3-3.6c.6-.7.6-1.8-.1-2.5-.7-.6-1.8-.6-2.5.1l-3.8 4.2-3.5-2c-.4-.2-.6-.6-.6-1.1V26.6l17 7.8v24.2l-9.8-5.7zm13.4 5.6V34.3l17-7.8V48c0 .4-.2.9-.6 1.1l-3.5 2-3.8-4.2c-.6-.7-1.8-.8-2.5-.1s-.8 1.8-.1 2.5l3.3 3.6-9.8 5.6z"/>
	</g>
</svg>
	);
};

export default VrTech;