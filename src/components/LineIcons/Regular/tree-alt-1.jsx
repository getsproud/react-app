import React from 'react';

function TreeAlt1(props) {
	const title = props.title || "tree alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.1 21.3c0-11-9-20-20.1-20-11.1 0-20.1 9-20.1 20 0 10.4 8.1 19 18.3 19.9V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V41.2c10.2-.9 18.3-9.5 18.3-19.9zM33.8 37.7v-3.8l6-5.9c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0L33.8 29v-5.2c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V29l-3.5-3.5c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l6 5.9v3.8c-8.3-.9-14.8-7.9-14.8-16.4 0-9.1 7.4-16.5 16.6-16.5s16.6 7.4 16.6 16.5c0 8.5-6.5 15.5-14.8 16.4z"/>
	</g>
</svg>
	);
};

export default TreeAlt1;