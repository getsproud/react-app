import React from 'react';

function Tools(props) {
	const title = props.title || "tools";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M36.1 37.8H33v-15h1.3c.9 0 1.6-.6 1.7-1.5l1.2-8.5c.1-.5-.1-1-.4-1.4s-.8-.6-1.3-.6H27c-.5 0-1 .2-1.3.6-.3.4-.5.9-.4 1.4l1.2 8.5c.1.9.9 1.5 1.7 1.5h1.3v15h-3.1c-1 0-1.8.8-1.8 1.8v7.2c0 3.6 3 6.6 6.6 6.6s6.6-3 6.6-6.6v-7.2c.1-1-.7-1.8-1.7-1.8zm-2.6-23.6l-.7 5h-3.1l-.7-5h4.5zm.9 32.6c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1v-5.5h1.4v.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-.6h1.4v5.5z"/>
		<path d="M17.7 11.8c-.5-.7-1.4-1.2-2.3-1.2H6.5c-2.9 0-5.3 2.4-5.3 5.3v2.4c0 2.9 2.4 5.3 5.3 5.3h1.7v26.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V23.5h3.6c.9 0 1.8-.4 2.3-1.2l2.6-3.5c.8-1 .8-2.5 0-3.5l-2.6-3.5zM15.1 20H6.5c-1 0-1.8-.8-1.8-1.8v-2.4c0-1 .8-1.8 1.8-1.8H15l2.2 3-2.1 3z"/>
		<path d="M62.2 41.8l-2.8-4.9V26.2l2.8-4.9c.7-1.3.7-2.8 0-4.1l-3.1-5.3c-.5-.8-1.6-1.1-2.4-.6-.8.5-1.1 1.6-.6 2.4l3.1 5.3c.1.2.1.4 0 .6l-3.1 5.3c-.2.3-.2.6-.2.9v11.6c0 .3.1.6.2.9l3.1 5.3c.1.2.1.4 0 .6l-2.4 4.1c-.1.2-.3.3-.5.3h-4.8c-.2 0-.4-.1-.5-.3l-2.4-4.1c-.1-.2-.1-.4 0-.6l3.1-5.3c.2-.3.2-.6.2-.9V25.7c0-.3-.1-.6-.2-.9l-3.1-5.3c-.1-.2-.1-.4 0-.6l3.1-5.3c.5-.8.2-1.9-.6-2.4s-1.9-.2-2.4.6l-3.1 5.3c-.7 1.3-.7 2.8 0 4.1l2.8 4.9v10.7l-2.8 4.9c-.7 1.3-.7 2.8 0 4.1l2.4 4.1c.7 1.3 2.1 2.1 3.6 2.1h4.8c1.5 0 2.8-.8 3.6-2.1l2.4-4.1c.5-1.2.5-2.7-.2-4z"/>
	</g>
</svg>
	);
};

export default Tools;