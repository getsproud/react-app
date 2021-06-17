import React from 'react';

function TriangleRuler(props) {
	const title = props.title || "triangle ruler";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.6 61.4L2.6.4C2.1 0 1.5-.1.9.1.4.4 0 .9 0 1.5v61c0 .8.7 1.5 1.5 1.5h61c.6 0 1.2-.4 1.4-.9s.1-1.2-.3-1.7zM3 61V5.1L58.9 61H3z"/>
		<path d="M10.8 52.6h23.5c.6 0 1.2-.4 1.4-.9s.1-1.2-.3-1.6L11.9 26.6c-.4-.4-1.1-.6-1.6-.3-.6.2-.9.8-.9 1.4v23.5c-.1.8.6 1.4 1.4 1.4zm1.5-21.3l18.4 18.4H12.3V31.3z"/>
	</g>
</svg>
	);
};

export default TriangleRuler;