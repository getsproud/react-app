import React from 'react';

function World(props) {
	const title = props.title || "world";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.9 16.2C55.6 8.7 48.3 3.1 39.8 1 37.1.3 34.5 0 32 0c-2.7 0-5.4.3-8 1C15.6 3.2 8.4 8.8 4.1 16.3 1.4 21.2 0 26.5 0 32v.7c.1 5.9 1.9 11.6 5 16.5 5.1 8 13.4 13.3 22.7 14.4 1.3.3 2.7.4 4.3.4 1.3 0 2.6-.1 3.9-.2 9.5-1.1 17.9-6.4 23.1-14.5 3.1-4.9 4.9-10.6 5-16.5V32c0-5.3-1.4-10.8-4.1-15.8zM52 30.5c-.3-3.8-1.3-7.4-2.9-10.9h9.1c1.6 3.5 2.5 7.2 2.7 10.9H52zm-7.9-13.9H33.5V4.3c3.4 2.2 7 6.4 10.6 12.3zM30.5 4.3v12.4H19.3c3.8-6 7.6-10.2 11.2-12.4zm0 15.3v10.9h-16c.3-3.8 1.3-7.5 3.1-10.9h12.9zm0 13.9v13.6H18.4c-2.4-4.1-3.8-8.8-3.9-13.6h16zm0 16.6v9.7c-3.7-2-7.3-5.4-10.2-9.7h10.2zm3 9.7v-9.7h10.6c-2.7 4.1-6.4 7.5-10.6 9.7zm0-12.7V33.5h15.7c0 4.8-1.1 9.4-3.3 13.6H33.5zm0-16.6V19.6h12.3c1.7 3.4 2.8 7.1 3.2 10.9H33.5zm23.1-13.9h-9c-3.4-5.9-6.8-10.2-10.1-13.1.5.1 1.1.2 1.6.3 7.2 1.9 13.6 6.6 17.5 12.8zM24.7 4l1.5-.3c-3.4 2.8-6.9 7.1-10.3 12.7-.1.1-.1.2-.2.3H7.5C11.4 10.4 17.6 5.8 24.7 4zM5.8 19.6h8.4c-1.6 3.4-2.5 7.1-2.8 10.9H3.1c.1-3.8 1.1-7.4 2.7-10.9zM3 33.5h8.4c.1 4.8 1.3 9.4 3.5 13.6H7.2C4.7 43 3.3 38.4 3 33.5zm6.3 16.6h7.3c2.6 4.1 5.8 7.6 9.1 10.2-6.4-1.4-12.2-4.9-16.4-10.2zm29.1 10.2c3.7-2.6 6.9-6.1 9.2-10.1v-.1h6.9c-4 5.2-9.7 8.7-16.1 10.2zm18.3-13.2h-7.5c1.9-4.3 3-8.9 3-13.6H61c-.3 4.9-1.8 9.6-4.3 13.6z"/>
	</g>
</svg>
	);
};

export default World;