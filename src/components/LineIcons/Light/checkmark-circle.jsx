import React from 'react';

function CheckmarkCircle(props) {
	const title = props.title || "checkmark circle";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
		<path d="M42.1 22.6L28.4 35.8l-6.6-6.4c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l7 6.8c.5.5 1.1.7 1.7.7s1.2-.2 1.7-.7l14-13.6c.6-.6.6-1.5 0-2.1-.5-.6-1.5-.6-2 0z"/>
	</g>
</svg>
	);
};

export default CheckmarkCircle;