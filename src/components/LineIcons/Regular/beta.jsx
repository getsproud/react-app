import React from 'react';

function Beta(props) {
	const title = props.title || "beta";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.9 17.3v-5.7c0-5.7-4.6-10.3-10.3-10.3H28.3c-2.6 0-4.8 2.1-4.8 4.8v50.1c0 1.6-1.3 3-3 3-1.6 0-3-1.3-3-3v-6c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v6c0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5v-5.9h12.5c5.7 0 10.3-4.6 10.3-10.3v-5.7c0-3.5-1.8-6.7-4.6-8.5 2.9-1.9 4.8-5 4.8-8.5zm-3.5 17V40c0 3.7-3 6.8-6.8 6.8H27.1V27.5h12.5c3.7 0 6.8 3.1 6.8 6.8zm0-17c0 3.7-3 6.8-6.8 6.8H27.1V6c0-.7.6-1.3 1.3-1.3h11.3c3.7 0 6.8 3 6.8 6.8v5.8z"/>
	</g>
</svg>
	);
};

export default Beta;