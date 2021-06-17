import React from 'react';

function Wheelbarrow(props) {
	const title = props.title || "wheelbarrow";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.3 47.1c-.9 0-1.7.2-2.5.6l-4.4-5.2c4.4-2.2 7.9-6.2 9.5-11.1l2-6.1c.3-.9 1-2.9-.1-4.4-.8-1.1-2.1-1.6-4.1-1.6H16.5L13 8.5c-.6-1.8-2.2-3-4.1-3H1.5C.7 5.5 0 6.2 0 7s.7 1.5 1.5 1.5h7.4c.6 0 1 .4 1.2.9l3.7 11.7v35c0 .9.6 1.8 1.5 2.1.3.1.5.1.8.1.6 0 1.1-.2 1.5-.6l17.6-13.2H43c1.9 0 3.8-.3 5.5-.9l5.1 6c-.6.9-.9 2-.9 3.1 0 3.1 2.5 5.7 5.7 5.7s5.7-2.5 5.7-5.7-2.6-5.6-5.8-5.6zm-41.4 7.5v-10h13.4l-13.4 10zm0-13V22.4h41.9c1.4 0 1.6.3 1.6.3s.2.3-.3 1.7l-2 6.1c-2.2 6.6-8.3 11.1-15.1 11.1H16.9zm41.4 13.9c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7 2.7 1.2 2.7 2.7-1.2 2.7-2.7 2.7z"/>
	</g>
</svg>
	);
};

export default Wheelbarrow;