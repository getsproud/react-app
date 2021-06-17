import React from 'react';

function Closet4(props) {
	const title = props.title || "closet 4";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M48.4 1.3H15.6c-2.6 0-4.8 2.1-4.8 4.8V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-6.6h35.2V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V6c-.1-2.6-2.2-4.7-4.8-4.7zM33.8 19.8h15.9V33H33.8V19.8zm0 16.7h15.9v14.4H33.8V36.5zM49.6 6v10.3H33.8V4.8h14.6c.7 0 1.2.5 1.2 1.2zM14.4 6c0-.7.6-1.3 1.3-1.3h14.6v46.2H14.4V6z"/>
	</g>
</svg>
	);
};

export default Closet4;