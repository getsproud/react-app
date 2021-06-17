import React from 'react';

function Swatches(props) {
	const title = props.title || "swatches";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M48 0H16c-.8 0-1.5.7-1.5 1.5v61c0 .8.7 1.5 1.5 1.5h32c.8 0 1.5-.7 1.5-1.5v-61C49.5.7 48.9 0 48 0zm-1.5 3v10.4h-29V3h29zm-29 23.9V16.4h29v10.4h-29zm29 3v10.4h-29V29.9h29zM17.5 61V43.3h29V61h-29z"/>
		<path d="M32 48.1c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6-1.6-3.6-3.6-3.6zm0 4.1c-.3 0-.6-.3-.6-.6s.3-.6.6-.6.6.3.6.6c0 .4-.3.6-.6.6z"/>
	</g>
</svg>
	);
};

export default Swatches;