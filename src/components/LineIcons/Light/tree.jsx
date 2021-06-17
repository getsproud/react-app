import React from 'react';

function Tree(props) {
	const title = props.title || "tree";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47.3 25.2C47.3 13.3 41 0 32 0S16.7 13.3 16.7 25.2c0 12 6.1 21.9 13.8 23v14.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V48.3c7.7-1.2 13.8-11.1 13.8-23.1zm-13.8 20v-7.7c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v7.7c-6.1-1.2-10.8-9.7-10.8-20C19.7 13.6 25.6 3 32 3s12.3 10.6 12.3 22.2c0 10.3-4.7 18.8-10.8 20z"/>
	</g>
</svg>
	);
};

export default Tree;