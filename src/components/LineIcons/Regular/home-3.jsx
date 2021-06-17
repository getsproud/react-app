import React from 'react';

function Home3(props) {
	const title = props.title || "home 3";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M53.6 34.1H33.7v-6h15c2.6 0 4.8-2.1 4.8-4.8V6c0-2.6-2.1-4.8-4.8-4.8H15.3c-2.6 0-4.8 2.1-4.8 4.8v17.3c0 2.6 2.1 4.8 4.8 4.8h15v6H10.4c-2.6 0-4.8 2.1-4.8 4.8V61c0 1 .8 1.8 1.8 1.8S9.1 62 9.1 61V47.7h45.7V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V38.8c0-2.6-2.2-4.7-4.8-4.7zM14 23.3V6c0-.7.6-1.3 1.3-1.3h33.4c.7.1 1.3.6 1.3 1.3v17.3c0 .7-.6 1.3-1.3 1.3H15.3c-.7 0-1.3-.6-1.3-1.3zM9.1 38.9c0-.7.6-1.3 1.3-1.3h43.2c.7 0 1.3.6 1.3 1.3v5.3H9.1v-5.3z"/>
	</g>
</svg>
	);
};

export default Home3;