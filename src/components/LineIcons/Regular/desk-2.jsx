import React from 'react';

function Desk2(props) {
	const title = props.title || "desk 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 1.3H7C3.8 1.3 1.3 3.8 1.3 7v54c0 1 .8 1.8 1.8 1.8S4.8 62 4.8 61V21.5h25V61c0 1 .8 1.8 1.8 1.8s1.7-.8 1.7-1.8v-8.1h26V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V7c-.1-3.2-2.7-5.7-5.9-5.7zM4.8 7c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3v11H4.8V7zm54.5 14.5v12.2h-26V21.5h26zm-26 27.9V37.2h26v12.2h-26z"/>
		<path d="M34.9 11.3c0-1-.8-1.8-1.8-1.8h-2.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h2.3c1-.1 1.8-.9 1.8-1.8z"/>
		<path d="M44.6 29.7h2.3c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-2.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8z"/>
		<path d="M46.9 42h-2.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h2.3c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Desk2;