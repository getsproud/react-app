import React from 'react';

function TextAlignJustify(props) {
	const title = props.title || "text align justify";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M1.5 5.9h61c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-61C.7 2.9 0 3.6 0 4.4s.7 1.5 1.5 1.5z"/>
		<path d="M62.5 21.3h-61c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M62.5 39.7h-61c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M37.5 58.1h-36c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h36c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default TextAlignJustify;