import React from 'react';

function ArrowRightCircle(props) {
	const title = props.title || "arrow right circle";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M46.1 22.9c-.5-.7-1.4-.8-2.1-.3-.7.5-.8 1.4-.3 2.1l4.2 5.9H15.4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h32.5l-4.2 5.9c-.5.7-.3 1.6.3 2.1.3.2.6.3.9.3.5 0 .9-.2 1.2-.6l4.8-6.7a4.2 4.2 0 0 0 0-5l-4.8-6.7z"/>
		<path d="M32 0C14.3 0 0 14.4 0 32s14.4 32 32 32c17.7 0 32-14.4 32-32S49.7 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
	</g>
</svg>
	);
};

export default ArrowRightCircle;