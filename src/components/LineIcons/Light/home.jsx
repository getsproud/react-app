import React from 'react';

function Home(props) {
	const title = props.title || "home";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.5 64H44.3c-3 0-5.4-2.4-5.4-5.4V47.1c0-1.4-1.1-2.5-2.5-2.5h-8.7c-1.3 0-2.4 1.1-2.4 2.4v11.5c0 3-2.5 5.5-5.5 5.5H5.4c-3 0-5.4-2.4-5.4-5.4V21.8c0-1.5.7-2.8 2-3.6L29.7.7c1.4-.9 3.2-.9 4.6 0L62 18.3c1.2.8 2 2.1 2 3.6v36.6c0 3-2.5 5.5-5.5 5.5zM27.6 41.6h8.7c3 0 5.5 2.5 5.5 5.5v11.5c0 1.3 1.1 2.4 2.4 2.4h14.3c1.4 0 2.5-1.1 2.5-2.5V21.9c0-.4-.2-.9-.6-1.1L32.7 3.2c-.4-.3-.9-.3-1.3 0L3.6 20.7c-.4.3-.6.7-.6 1.1v36.7C3 59.9 4.1 61 5.4 61h14.3c1.4 0 2.5-1.1 2.5-2.5V47c0-3 2.4-5.4 5.4-5.4z"/>
	</g>
</svg>
	);
};

export default Home;