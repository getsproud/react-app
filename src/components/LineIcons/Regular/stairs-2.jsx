import React from 'react';

function Stairs2(props) {
	const title = props.title || "stairs 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 4.7H45.9c-1 0-2 .3-2.7.9L21.6 22.4h-.1l-12.9 10-6.7 5.2c-.8.6-.9 1.7-.3 2.5.6.8 1.7.9 2.5.3l3.9-3V46H6.4c-.2 0-.5 0-.7.1-.6.3-1.1.9-1.1 1.6v5.7c0 3.2 2.6 5.8 5.8 5.8H57c3.2 0 5.8-2.6 5.8-5.8V10.5c0-3.2-2.7-5.8-5.8-5.8zm2.3 5.8v7.4h-8.7V8.2H57c1.2 0 2.3 1 2.3 2.3zm-14-2.1c.2-.1.4-.2.6-.2h1.2v9.7H45c-1 0-1.8.8-1.8 1.8v7.9h-6.1V14.8l8.2-6.4zM31.7 27.5c-1 0-1.8.8-1.8 1.8v7.5h-5.7v-12l9.3-7.3v10h-1.8zm-20.2 7.3l9.3-7.3v9.3h-2.3c-1 0-1.8.8-1.8 1.8V46h-5.3V34.8zm29.5 21V41.5c0-.7.6-1.3 1.3-1.3H48c.7 0 1.3.6 1.3 1.3v5.6h-.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.5v5.2H41zm16 0h-4.2V41.5c0-2.6-2.1-4.8-4.8-4.8h-5.8c-2.6 0-4.8 2.1-4.8 4.8v14.3h-27c-1.3 0-2.3-1-2.3-2.3v-4h10.3c1 0 1.8-.8 1.8-1.8v-7.5h11.5c1 0 1.7-.8 1.7-1.8V31H45c1 0 1.8-.8 1.8-1.8v-7.9h12.5v32.2c0 1.3-1.1 2.3-2.3 2.3z"/>
	</g>
</svg>
	);
};

export default Stairs2;