import React from 'react';

function Desk1(props) {
	const title = props.title || "desk 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 10.9H3c-1 0-1.8.8-1.8 1.8S2 14.4 3 14.4h2.6v36.9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V25.2h5.1v20.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V25.2h16.5v16.3c0 1 .8 1.8 1.8 1.8h10.5v2.5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-2.5h5.1v8.1c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-37h2c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zM9.1 14.4h45.8v7.3H9.1v-7.3zm28.5 25.4V25.2h17.3v14.6H37.6z"/>
		<path d="M42.1 30.2c-1 0-1.8.8-1.8 1.8v1c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-1.1c-.1-.9-.9-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default Desk1;