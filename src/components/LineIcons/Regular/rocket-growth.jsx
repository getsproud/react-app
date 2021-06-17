import React from 'react';

function RocketGrowth(props) {
	const title = props.title || "rocket growth";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M36.8 33.8V33c0-1-.8-1.8-1.8-1.8s-1.7.8-1.7 1.8v1.5c0 .5.2.9.5 1.2l6 6v5H15.5v-5l6-6c.3-.3.5-.8.5-1.2V23.1C22 13 24.6 8.4 27.6 5.4c2 2.1 3.4 4.3 4.3 7.2.2.8.9 1.3 1.7 1.3 1 0 1.8-.8 1.8-1.8 0-.2 0-.4-.1-.5-1.2-4-3.3-7.2-6.5-10-.7-.6-1.6-.6-2.3 0-5.6 4.9-7.9 11.3-8 21.4v10.7l-6 6c-.3.3-.5.8-.5 1.2v7.5c0 1 .8 1.8 1.8 1.8h7.3c-.1.4-.2.9-.2 1.4 0 3.1 4.1 8.7 5.3 10.4a1.75 1.75 0 0 0 2.8 0c1.2-1.7 5.3-7.3 5.3-10.4 0-.5-.1-.9-.2-1.4h7.3c1 0 1.8-.8 1.8-1.8v-7.5c0-.5-.2-.9-.5-1.2l-5.9-5.9zm-5.9 17.9c0 1.1-1.5 3.8-3.2 6.3-1.7-2.5-3.2-5.3-3.2-6.3 0-.5.1-.9.3-1.4h5.8c.2.4.3.9.3 1.4z"/>
		<path d="M46.3 17.6H43c-1.2 0-2.2-1-2.2-2.1s1-2.1 2.2-2.1h7.3c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-2.7V8.3c0-1-.8-1.8-1.8-1.8S44 7.3 44 8.3v1.6h-1c-3.1 0-5.7 2.5-5.7 5.6s2.5 5.6 5.7 5.6h3.4c1.2 0 2.2 1 2.2 2.1s-1 2.1-2.2 2.1h-7.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h5v1.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-1.7c2.6-.5 4.5-2.8 4.5-5.5-.2-3.2-2.7-5.7-5.9-5.7z"/>
	</g>
</svg>
	);
};

export default RocketGrowth;