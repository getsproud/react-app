import React from 'react';

function Cupcake(props) {
	const title = props.title || "cupcake";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.3 17.4l-.2-.2c-2.5-2.2-5.7-4-10.1-5.6-.7-.3-1.5-.5-2.4-.7.7-1 1.1-2.2 1.1-3.5 0-1.7-.6-3.2-1.8-4.4C37 1.2 34.3.7 32 1.8c-.8-.4-1.7-.6-2.5-.5-1.6 0-3 .6-4.2 1.6-1.2 1.1-1.9 2.7-2 4.4 0 1.4.4 2.8 1.2 4l-2.4.6c-5.4 1.6-9.1 4.5-9.2 4.6-5.6 4.2-8.7 9.3-9.2 15.2v.2c-.2 1.3-.1 2.6-.1 2.7v.2c0 .2 2.8 16.9 4.1 23.7.4 2.5 2.6 4.3 5.2 4.3h38.2c2.6 0 4.7-1.8 5.2-4.3l4.1-23.6v-.2c.3-9.8-6-15.4-8.1-17.3zM27.6 5.5c.5-.5 1.1-.7 1.8-.7.6 0 1.1.2 1.5.5.6.4 1.4.4 2 0 1.1-.8 2.5-.6 3.5.3.5.5.8 1.2.8 1.9s-.3 1.4-.8 1.9L32 13.9l-4.3-4.3c-.6-.6-.9-1.4-.9-2.2 0-.8.3-1.5.8-1.9zM7.2 32.3V32c.4-4.9 3.1-9.2 7.9-12.8 0 0 3.4-2.6 8.1-4 1.1-.3 2.4-.6 3.9-.8.1 0 .2 0 .3-.1l2.5 2.5c.6.6 1.3.9 2.1.9s1.5-.3 2.1-.9l2.7-2.7c.1 0 .2.1.4.1 1.4.2 2.7.5 3.7.8 5.3 1.9 7.6 3.7 9 4.9l.1.1c2 1.7 7.1 6.4 6.9 14.2l-.1.6c-.5 1.6-3.4 5.2-8.3 5.2-4.5 0-6.5-3-6.6-3.1-.3-.5-.9-.8-1.5-.8s-1.2.3-1.5.8c0 0-2.1 3.1-6.9 3.1h-.2c-4.6 0-6.6-3-6.6-3.1-.3-.5-.8-.8-1.4-.8-.6 0-1.1.3-1.5.7-2.2 3.1-5.9 3.2-6.4 3.2-8.4-1-8.7-5.9-8.7-6.2v-.1c-.1-.3-.1-.8 0-1.4zm45.6 25.5c-.1.8-.9 1.4-1.7 1.4H12.9c-.8 0-1.6-.6-1.7-1.4-.7-3.9-1.9-11.1-2.9-16.5 1.8 1.1 4.1 2 7.2 2.3h.1c.2 0 4.6.1 8-3 1.5 1.4 4.1 3.1 8.1 3.1h.3c4.1-.1 6.8-1.7 8.3-3.1 1.5 1.4 4.1 3.1 8.1 3.1 2.9 0 5.3-.9 7.2-2.2l-2.8 16.3z"/>
		<path d="M18.5 47.3c-.4-.9-1.5-1.2-2.3-.8-.9.4-1.2 1.5-.8 2.3l2.4 4.8c.3.6.9 1 1.6 1 .3 0 .5-.1.8-.2.9-.4 1.2-1.5.8-2.3l-2.5-4.8z"/>
		<path d="M32 46.2c-1 0-1.8.8-1.8 1.8v5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5c0-1-.8-1.8-1.8-1.8z"/>
		<path d="M47.9 46.5c-.9-.4-1.9-.1-2.3.8l-2.4 4.8c-.4.9-.1 1.9.8 2.3.3.1.5.2.8.2.6 0 1.3-.4 1.6-1l2.4-4.8c.3-.8-.1-1.8-.9-2.3z"/>
	</g>
</svg>
	);
};

export default Cupcake;