import React from 'react';

function EuroUp(props) {
	const title = props.title || "euro up";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M22.4 26c0 1 .8 1.8 1.8 1.8h2.2c1.9 3.8 5.7 6.4 10.1 6.4 1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8c-2.3 0-4.5-1.2-5.9-2.9H33c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-4.1c-.1-.5-.2-1-.2-1.6 0-.5.1-1 .2-1.5H33c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-2.4c1.5-1.8 3.7-3 6-3 1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8c-4.4 0-8.3 2.7-10.1 6.5h-2.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h1.1c-.1.5-.1 1-.1 1.5s.1 1.1.1 1.6h-1.1c-1.1.2-1.9 1-1.9 2z"/>
		<path d="M32 1.3C19.9 1.3 10.1 11 10.1 23c0 6.6 3 12.8 8.1 17 .3.3.7.4 1.1.4.5 0 1-.2 1.4-.7.6-.8.5-1.9-.3-2.5-4.3-3.5-6.8-8.7-6.8-14.2 0-10 8.3-18.2 18.4-18.2C42.1 4.8 50.4 13 50.4 23c0 1 .8 1.8 1.8 1.8S54 24 54 23c-.1-12-9.9-21.7-22-21.7z"/>
		<path d="M49.5 40.2H39.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H45l-11.2 7.7c-.3.2-.6.3-1 .3H20.7c-1.5 0-2.9.6-3.8 1.6l-6.3 6.5c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.5 0 .9-.2 1.3-.5l6.3-6.5c.3-.3.8-.5 1.2-.5h12.2c1 0 2.1-.3 2.9-.9l11.9-8.2V52c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V42c.1-1-.7-1.8-1.7-1.8z"/>
	</g>
</svg>
	);
};

export default EuroUp;