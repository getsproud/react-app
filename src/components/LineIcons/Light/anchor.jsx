import React from 'react';

function Anchor(props) {
	const title = props.title || "anchor";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54.9 47.6l-5-3.9c-1-.7-2.3-.7-3.3 0l-4.8 3.8c-.7.5-.8 1.5-.3 2.1.5.7 1.5.8 2.1.3l3.2-2.5c-.1 7.1-6 12.9-13.4 13.6V25.3h6.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.8v-6.7c3.8-.7 6.7-3.8 6.7-7.7 0-4.3-3.7-7.8-8.2-7.8s-8.2 3.5-8.2 7.8c0 3.8 2.9 7 6.7 7.7v6.7h-6.8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h6.8V61C22.9 60.3 17 54.5 17 47.3l3.4 2.7c.3.2.6.3.9.3.4 0 .9-.2 1.2-.6.5-.7.4-1.6-.3-2.1l-5-3.9c-1-.8-2.3-.7-3.3 0l-4.8 3.8c-.7.5-.8 1.5-.3 2.1.5.7 1.5.8 2.1.3l3-2.3c.3 9 8.2 16.4 18 16.4s17.8-7.4 17.9-16.6l3.2 2.5c.3.2.6.3.9.3.4 0 .9-.2 1.2-.6.5-.6.4-1.5-.2-2zM26.7 7.8C26.7 5.2 29 3 31.9 3s5.2 2.1 5.2 4.8-2.3 4.8-5.2 4.8-5.2-2.2-5.2-4.8z"/>
	</g>
</svg>
	);
};

export default Anchor;