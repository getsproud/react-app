import React from 'react';

function Bridge(props) {
	const title = props.title || "bridge";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 31.9h-7.7C52 22.3 42.8 15.2 32 15.2S12.1 22.3 9.2 31.9H1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h6.8v12.4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-9.1c0-1.1.1-2.2.3-3.3h40.7c.2 1.1.3 2.2.3 3.3v9.1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V34.9h6.8c.8 0 1.5-.7 1.5-1.5.1-.8-.6-1.5-1.4-1.5zm-32 0h-8.1V20.5c2.4-1.2 5.2-2 8.1-2.2v13.6zm3-13.6c2.9.2 5.6 1 8.1 2.2v11.4h-8.1V18.3zm-14.1 4.1v9.5h-7c1.3-3.8 3.8-7.1 7-9.5zm25.2 9.5v-9.5c3.2 2.4 5.7 5.7 7 9.5h-7z"/>
	</g>
</svg>
	);
};

export default Bridge;