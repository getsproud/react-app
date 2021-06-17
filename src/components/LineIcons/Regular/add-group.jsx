import React from 'react';

function AddGroup(props) {
	const title = props.title || "add group";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M37.1 44.5h-1v-1c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v1h-1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h1v1c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-1h1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M57.3 30.4c-2.3-2.8-5.3-4.7-8.5-5.7 3.2-1.7 5.4-5.1 5.4-9C54.2 10 49.6 5.4 44 5.4S33.7 10 33.7 15.7c0 3.9 2.2 7.3 5.4 9-3.2 1-6.1 2.9-8.5 5.7l-.9 1.2c-1.5-1-3.1-1.8-4.8-2.3 3.2-1.7 5.4-5.1 5.4-9C30.3 14.6 25.7 10 20 10c-5.7 0-10.3 4.6-10.3 10.3 0 3.9 2.2 7.3 5.4 9-3.1 1-6.1 2.9-8.4 5.7-3.4 4-5.3 9.6-5.4 15.7 0 .7.4 1.3 1 1.6 2.1 1.1 9.7 4.5 17.8 4.5 2.3 0 4.7-.3 7.2-.8 2 1.5 4.5 2.5 7.2 2.5 4.5 0 8.5-2.6 10.5-6.3 8.3-.2 15-3.5 16.9-4.5.6-.3.9-.9.9-1.6-.1-6-2.1-11.6-5.5-15.7zM44 8.9c3.7 0 6.8 3 6.8 6.8s-3 6.8-6.8 6.8-6.8-3-6.8-6.8 3-6.8 6.8-6.8zm-24 4.6c3.7 0 6.8 3 6.8 6.8S23.8 27 20 27s-6.8-3-6.8-6.8 3.1-6.7 6.8-6.7zM4.8 49.7c.3-4.9 1.9-9.2 4.6-12.4 2.8-3.3 6.6-5.2 10.7-5.2 3.5 0 6.8 1.4 9.4 3.8-4.1 1.9-6.9 6-6.9 10.8 0 2.3.7 4.5 1.9 6.3-1.5.2-3 .3-4.4.3-6.4 0-12.5-2.4-15.3-3.6zm29.6 5.4c-4.6 0-8.4-3.8-8.4-8.4s3.8-8.4 8.4-8.4 8.4 3.8 8.4 8.4-3.8 8.4-8.4 8.4zm11.7-6.4c.1-.7.2-1.3.2-2 0-6.5-5.3-11.9-11.9-11.9-.4 0-.8 0-1.2.1l-.9-.9.9-1.2c2.8-3.3 6.6-5.2 10.6-5.2 4.1 0 7.9 1.8 10.7 5.2 2.7 3.2 4.3 7.6 4.6 12.5-2.2 1-7.1 3-13 3.4z"/>
	</g>
</svg>
	);
};

export default AddGroup;