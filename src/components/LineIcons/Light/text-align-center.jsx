import React from 'react';

function TextAlignCenter(props) {
	const title = props.title || "text align center";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M12.6 9.6h38.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H12.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
		<path d="M7 25.5h50c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
		<path d="M12.6 38.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h38.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H12.6z"/>
		<path d="M62.5 54.4h-61c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default TextAlignCenter;