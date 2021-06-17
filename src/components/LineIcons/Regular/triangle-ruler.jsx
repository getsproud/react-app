import React from 'react';

function TriangleRuler(props) {
	const title = props.title || "triangle ruler";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 52.6L11.4 3C9.7 1.3 7.2.8 4.9 1.7c-2.3.9-3.7 3-3.7 5.5v49.6c0 3.3 2.7 5.9 5.9 5.9h49.6c2.4 0 4.6-1.4 5.5-3.7s.5-4.7-1.2-6.4zm-1.9 5.1c-.1.4-.7 1.5-2.3 1.5H7.2c-1.3 0-2.4-1.1-2.4-2.4V7.2c0-1.5 1.2-2.1 1.5-2.3.2-.1.5-.2 1-.2s1.1.2 1.7.7L58.6 55c1 1.2.6 2.4.5 2.7z"/>
		<path d="M18.4 26c-1-1-2.4-1.3-3.7-.7-1.3.5-2.1 1.7-2.1 3.1v19.1c0 1.9 1.5 3.4 3.4 3.4h19.1c1.4 0 2.6-.8 3.1-2.1s.2-2.7-.7-3.7L18.4 26zm-2.3 21.3V28.7l18.6 18.6H16.1z"/>
	</g>
</svg>
	);
};

export default TriangleRuler;