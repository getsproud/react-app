import React from 'react';

function Bible(props) {
	const title = props.title || "bible";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M48.9 1.3H15.1c-3.6 0-6.6 3-6.6 6.6v48.3c0 3.6 3 6.6 6.6 6.6h33.8c3.6 0 6.6-3 6.6-6.6V7.8c0-3.6-3-6.5-6.6-6.5zM12 56.2V7.8c0-1.7 1.4-3.1 3.1-3.1h4.6v54.5h-4.6c-1.7.1-3.1-1.3-3.1-3zm40 0c0 1.7-1.4 3.1-3.1 3.1H23.2V4.8h25.7c1.7 0 3.1 1.4 3.1 3.1v48.3z"/>
		<path d="M42.9 23.6h-4.3v-3.9c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.7v3.9h-4.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H35v12.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V27.1h4.3c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default Bible;