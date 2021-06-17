import React from 'react';

function ArrowsVertical(props) {
	const title = props.title || "arrows vertical";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M42.1 53l-8.6 7.2V3.8l8.6 7.2c.3.2.6.4 1 .4s.9-.2 1.1-.5c.5-.6.5-1.6-.2-2.1l-9.1-7.6c-1.7-1.4-4.2-1.4-5.9 0l-9 7.5c-.6.5-.7 1.5-.2 2.1.5.6 1.5.7 2.1.2l8.6-7.2v56.5L21.9 53c-.6-.5-1.6-.5-2.1.2-.5.6-.5 1.6.2 2.1l9.1 7.6c.8.7 1.9 1.1 2.9 1.1s2.1-.4 2.9-1.1l9.1-7.6c.6-.5.7-1.5.2-2.1-.5-.7-1.5-.7-2.1-.2z"/>
	</g>
</svg>
	);
};

export default ArrowsVertical;