import React from 'react';

function Cubes(props) {
	const title = props.title || "cubes";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 1.3H7C3.8 1.3 1.3 3.8 1.3 7v50c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V7c-.1-3.2-2.7-5.7-5.9-5.7zM59.3 7v23.3h-25V4.8H57c1.2 0 2.3 1 2.3 2.2zM7 4.8h23.7v25.5h-26V7C4.8 5.8 5.8 4.8 7 4.8zM4.8 57V33.8h26v25.5H7c-1.2 0-2.2-1.1-2.2-2.3zM57 59.3H34.2V33.8h25V57c.1 1.2-1 2.3-2.2 2.3z"/>
		<path d="M42.3 25.1h9.8c1.5 0 2.8-1.2 2.8-2.8v-9.8c0-1.5-1.2-2.8-2.8-2.8h-9.8c-1.5 0-2.8 1.2-2.8 2.8v9.8c.1 1.6 1.3 2.8 2.8 2.8zm.8-11.7h8.3v8.3h-8.3v-8.3z"/>
		<path d="M12.9 21.9c.3.3.8.5 1.2.5s.9-.2 1.2-.5l1.9-1.9 1.9 1.9c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.7.7-1.8 0-2.5l-1.9-1.9 1.9-1.9c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0L17.3 15l-1.9-1.9c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l1.9 1.9-1.9 1.9c-.7.7-.7 1.8 0 2.5z"/>
		<path d="M17.3 38.6c-4.2 0-7.6 3.4-7.6 7.6s3.4 7.6 7.6 7.6 7.6-3.4 7.6-7.6-3.4-7.6-7.6-7.6zm0 11.8c-2.3 0-4.1-1.9-4.1-4.1s1.9-4.1 4.1-4.1c2.3 0 4.1 1.9 4.1 4.1s-1.9 4.1-4.1 4.1z"/>
		<path d="M50.6 39.9c-.8-.9-1.9-1.4-3.1-1.4s-2.3.5-3.1 1.4L38 47.3c-1.1 1.2-1.3 2.9-.6 4.4s2.1 2.4 3.7 2.4h12.7c1.6 0 3.1-.9 3.7-2.4s.4-3.2-.6-4.4l-6.3-7.4zm3.8 10.3c-.1.1-.2.4-.6.4H41.2c-.3 0-.5-.2-.6-.4s-.1-.4.1-.6l6.3-7.4c.2-.2.4-.2.5-.2s.3 0 .5.2l6.3 7.4c.2.2.2.5.1.6z"/>
	</g>
</svg>
	);
};

export default Cubes;