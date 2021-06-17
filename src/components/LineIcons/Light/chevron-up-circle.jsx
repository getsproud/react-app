import React from 'react';

function ChevronUpCircle(props) {
	const title = props.title || "chevron up circle";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.5 36.3l-16.2-11c-.8-.5-1.9-.5-2.7 0l-16.1 11c-.7.5-.9 1.4-.4 2.1.5.7 1.4.9 2.1.4L32 28.1l15.8 10.7c.3.2.6.3.8.3.5 0 1-.2 1.2-.7.5-.7.4-1.6-.3-2.1z"/>
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
	</g>
</svg>
	);
};

export default ChevronUpCircle;