import React from 'react';

function Cupboard(props) {
	const title = props.title || "cupboard";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M48.6 1.3H15.4c-3.2 0-5.8 2.6-5.8 5.8v44.8c0 3.2 2.6 5.8 5.8 5.8h.1V61c0 1 .8 1.8 1.8 1.8S19 62 19 61v-3.4h26V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-3.4h.1c3.2 0 5.8-2.6 5.8-5.8V7c-.1-3.2-2.7-5.7-5.9-5.7zM13.1 51.8V7c0-1.2 1-2.3 2.3-2.3h14.9v20.9h-.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.9v24.9H15.4c-1.2 0-2.3-1-2.3-2.3zm37.8 0c0 1.2-1 2.3-2.3 2.3H33.8V29.2h.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-.9V4.8h14.9c1.2 0 2.3 1 2.3 2.3v44.7z"/>
	</g>
</svg>
	);
};

export default Cupboard;