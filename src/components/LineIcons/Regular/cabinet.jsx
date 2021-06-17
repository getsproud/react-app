import React from 'react';

function Cabinet(props) {
	const title = props.title || "cabinet";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.9 1.3H7.1c-1 0-1.7.7-1.7 1.7s.8 1.8 1.8 1.8h3v49.9c0 1 .8 1.8 1.8 1.8h.6V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-4.6h32.1V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-4.6h.6c1 0 1.8-.8 1.8-1.8V4.8h3c1 0 1.8-.8 1.8-1.8s-1.2-1.7-2.2-1.7zm-6.5 51.6H13.6V31h36.9v21.9zm0-25.4H13.6V4.8h36.9v22.7z"/>
		<path d="M27.4 17.4h9.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-9.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8z"/>
		<path d="M27.4 43.5h9.2c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7h-9.2c-1 0-1.8.8-1.8 1.8s.8 1.7 1.8 1.7z"/>
	</g>
</svg>
	);
};

export default Cabinet;