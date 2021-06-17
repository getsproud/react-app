import React from 'react';

function Bed(props) {
	const title = props.title || "bed";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.2 42.1s0-.1 0 0V42l-8.5-18.5V7.3c0-3.3-2.7-6.1-6.1-6.1H19.4c-3.3 0-6.1 2.7-6.1 6.1v16.2L4.8 42c-.1.2-.2.5-.2.7V61c0 1 .8 1.8 1.8 1.8S8.2 62 8.2 61v-5.3h47.7V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V42.7c-.2-.2-.2-.4-.3-.6zm-43-16.5h31.5L54.8 41H9.2l7-15.4zm.7-18.3c0-1.4 1.1-2.6 2.6-2.6h25.1c1.4 0 2.6 1.1 2.6 2.6v14.8H16.9V7.3zM8.2 52.2v-7.7h47.7v7.7H8.2z"/>
	</g>
</svg>
	);
};

export default Bed;