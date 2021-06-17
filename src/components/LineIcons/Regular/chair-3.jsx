import React from 'react';

function Chair3(props) {
	const title = props.title || "chair 3";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54.4 34.9V7.8c0-3.6-3-6.6-6.6-6.6H16.1c-3.6 0-6.6 3-6.6 6.6v27.1c-.9.1-1.6.8-1.6 1.7V48c0 1 .8 1.8 1.8 1.8H12V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V49.8h33.1V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V49.8h2.3c1 0 1.8-.8 1.8-1.8V36.6c-.3-.9-1-1.6-2-1.7zM50.9 7.8v27h-8v-30h5c1.7 0 3 1.3 3 3zM24.6 34.9V4.8h14.8v30.1H24.6zM16.1 4.8h5v30.1h-8v-27c0-1.8 1.3-3.1 3-3.1zm36.5 41.5H11.4v-7.9h41.2v7.9z"/>
	</g>
</svg>
	);
};

export default Chair3;