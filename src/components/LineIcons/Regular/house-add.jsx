import React from 'react';

function HouseAdd(props) {
	const title = props.title || "house add";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.1 43h-3.5v-3.5c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V43h-3.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H45V50c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-3.5h3.5c1 0 1.8-.8 1.8-1.8S53 43 52.1 43z"/>
		<path d="M49 29v-8.7c0-.6-.3-1.2-.8-1.5L26 5.4c-.6-.3-1.3-.3-1.8 0l-6.7 4.1c-.2-3.4-3-6.2-6.5-6.2h-.9c-3.6 0-6.5 2.9-6.5 6.5v8.1l-1.6 1c-.5.3-.8.9-.8 1.5v21.5c0 3.6 2.9 6.5 6.5 6.5h12c1 0 1.8-.8 1.8-1.8V33.8h6.9v12.7c0 1 .8 1.8 1.8 1.8h1.2c1.6 7.1 8 12.4 15.5 12.4 8.8 0 15.9-7.2 15.9-15.9 0-8.1-6-14.7-13.8-15.8zM7.2 9.8c0-1.7 1.3-3 3-3h.8c1.7 0 3 1.3 3 3v1.8l-6.9 4.2v-6zm12.6 20.5c-1 0-1.8.8-1.8 1.8v12.7H7.7c-1.7 0-3-1.3-3-3V21.3L25.1 8.9l20.4 12.4v7.6c-6.3.5-11.5 4.7-13.6 10.4v-7.2c0-1-.8-1.8-1.8-1.8H19.8zm27 26.9c-6.9 0-12.4-5.6-12.4-12.4S40 32.3 46.8 32.3s12.4 5.6 12.4 12.4-5.5 12.5-12.4 12.5z"/>
	</g>
</svg>
	);
};

export default HouseAdd;