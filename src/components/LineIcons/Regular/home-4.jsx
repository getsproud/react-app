import React from 'react';

function Home4(props) {
	const title = props.title || "home 4";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.8 33.8c0-1-.8-1.8-1.8-1.8h-.6l-7.7-15.5c-.3-.6-.9-1-1.6-1H28.8V4.3c0-1-.8-1.8-1.8-1.8H16.4c-1 0-1.8.8-1.8 1.8v11.3h-1.7c-.7 0-1.3.4-1.6 1L3.6 32H3c-1 0-1.8.8-1.8 1.8 0 .9.7 1.7 1.7 1.7v24.2c0 1 .8 1.8 1.8 1.8h20.7c1 0 1.8-.8 1.8-1.8V52c0-2.7 2.2-4.9 4.9-4.9S37 49.3 37 52v7.7c0 1 .8 1.8 1.8 1.8h20.7c1 0 1.8-.8 1.8-1.8V35.5c.7 0 1.5-.8 1.5-1.7zM18.1 6h7.2v9.6h-7.2V6zM14 19.1h36l6.5 13h-49l6.5-13zM40.4 58v-6c0-4.6-3.8-8.4-8.4-8.4s-8.4 3.8-8.4 8.4v6H6.4V35.5h51.2V58H40.4z"/>
	</g>
</svg>
	);
};

export default Home4;