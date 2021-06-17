import React from 'react';

function CapsuleAlt(props) {
	const title = props.title || "capsule alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32.4 0h-.9C23.5 0 17 6.5 17 14.5v34.9c0 8 6.5 14.5 14.5 14.5h.9c8 0 14.5-6.5 14.5-14.5V14.5c0-8-6.5-14.5-14.5-14.5zm11.5 49.5c0 6.3-5.2 11.5-11.5 11.5h-.9C25.2 61 20 55.8 20 49.5v-16h23.9v16zm-23.8-35C20.1 8.2 25.2 3 31.6 3h.9C38.8 3 44 8.2 44 14.5v16H20.1v-16z"/>
		<path d="M27.1 16.1c-.8 0-1.5.7-1.5 1.5v5.8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.8c0-.8-.7-1.5-1.5-1.5z"/>
		<path d="M27.1 47.8c.8 0 1.5-.7 1.5-1.5v-5.8c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v5.8c0 .9.6 1.5 1.5 1.5z"/>
	</g>
</svg>
	);
};

export default CapsuleAlt;