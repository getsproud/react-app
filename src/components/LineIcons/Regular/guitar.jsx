import React from 'react';

function Guitar(props) {
	const title = props.title || "guitar";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M45.5 45l-3.1-3.6v-.1c1.6-2.2 2.5-4.9 2.5-7.6 0-6.5-4.9-11.9-11.2-12.8V18.3h2.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-2.2v-10h1.5C36.2 4.8 37 4 37 3s-.8-1.8-1.8-1.8h-6.4C27.8 1.3 27 2 27 3s.8 1.8 1.8 1.8h1.5V10H27c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.3v7.3c-6.3.8-11.2 6.2-11.2 12.8 0 2.8.9 5.4 2.5 7.6v.1L18.5 45c-1.7 1.9-2.6 4.4-2.6 7 0 5.9 4.8 10.7 10.7 10.7h10.7C43.2 62.7 48 57.9 48 52c.1-2.6-.8-5-2.5-7zm-8.1 14.3H26.6c-4 0-7.2-3.2-7.2-7.2 0-1.7.6-3.4 1.8-4.7l3.1-3.6c1.1-1.3 1.2-3.1.2-4.5-1.2-1.6-1.8-3.5-1.8-5.6 0-5.2 4.2-9.4 9.4-9.4s9.4 4.2 9.4 9.4c0 2-.6 3.9-1.8 5.6-1 1.4-.9 3.2.2 4.5l3.1 3.6c1.1 1.3 1.8 3 1.8 4.7-.2 3.9-3.5 7.2-7.4 7.2z"/>
		<path d="M32 38.6c2.8 0 5.2-2.3 5.2-5.2 0-2.8-2.3-5.2-5.2-5.2s-5.2 2.3-5.2 5.2c0 2.9 2.4 5.2 5.2 5.2zm0-6.8c.9 0 1.7.7 1.7 1.7 0 .9-.7 1.7-1.7 1.7-.9 0-1.7-.7-1.7-1.7 0-.9.8-1.7 1.7-1.7z"/>
		<path d="M36 48.9h-8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h8c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Guitar;