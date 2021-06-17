import React from 'react';

function Tent(props) {
	const title = props.title || "tent";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 52.3h-2.1L34.2 19.2l6.1-8.2c.6-.8.4-1.9-.4-2.4-.8-.6-1.9-.4-2.4.4L32 16.2l-5.5-7.3c-.5-.8-1.6-.9-2.4-.3-.8.6-.9 1.7-.4 2.4l6.1 8.1L5.1 52.3H3c-1 0-1.8.8-1.8 1.8S2 55.8 3 55.8h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zM32 22.1l22.6 30.2H39.5v-7.6c0-3.2-2.6-5.8-5.8-5.8h-3.3c-3.2 0-5.8 2.6-5.8 5.8v7.6H9.4L32 22.1zm-4 30.2v-7.6c0-1.3 1-2.3 2.3-2.3h3.3c1.3 0 2.3 1 2.3 2.3v7.6H28z"/>
	</g>
</svg>
	);
};

export default Tent;