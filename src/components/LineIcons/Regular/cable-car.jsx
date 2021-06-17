import React from 'react';

function CableCar(props) {
	const title = props.title || "cable car";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.7 2.7c-.2-1-1.1-1.6-2-1.4l-58 9.6c-1 .2-1.6 1.1-1.4 2 .1.9.9 1.5 1.7 1.5h.3l26.9-4.5v9.8H16.6c-7 0-12.8 5.7-12.8 12.8V50c0 7 5.7 12.8 12.8 12.8h30.7c7 0 12.8-5.7 12.8-12.8V32.4c0-7-5.7-12.8-12.8-12.8H33.7V9.3l27.5-4.6c1-.1 1.7-1 1.5-2zM47.4 59.3H16.6c-5.1 0-9.3-4.1-9.3-9.3v-5.7h49.2V50c.1 5.1-4 9.3-9.1 9.3zm9.2-26.9v8.3H7.4v-8.3c0-5.1 4.1-9.3 9.3-9.3h30.7c5.1.1 9.2 4.2 9.2 9.3z"/>
	</g>
</svg>
	);
};

export default CableCar;