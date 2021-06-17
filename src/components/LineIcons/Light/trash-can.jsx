import React from 'react';

function TrashCan(props) {
	const title = props.title || "trash can";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M53.7 7.7H41.1V1.5c0-.8-.7-1.5-1.5-1.5H24.4c-.8 0-1.5.7-1.5 1.5v6.2H10.3c-.8 0-1.5.7-1.5 1.5V19c0 .8.7 1.5 1.5 1.5h1.9v42c0 .8.7 1.5 1.5 1.5h36.7c.8 0 1.5-.7 1.5-1.5v-42h1.9c.8 0 1.5-.7 1.5-1.5V9.2c-.1-.8-.8-1.5-1.6-1.5zM25.9 3H38v4.7H25.9V3zm22.9 58H15.2V20.4h33.7V61zm3.4-43.6H11.8v-6.8h40.3v6.8z"/>
		<path d="M32 50.3c.8 0 1.5-.7 1.5-1.5V32c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v16.8c0 .9.7 1.5 1.5 1.5z"/>
		<path d="M42.3 50.3c.8 0 1.5-.7 1.5-1.5V32c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v16.8c0 .9.7 1.5 1.5 1.5z"/>
		<path d="M21.7 50.3c.8 0 1.5-.7 1.5-1.5V32c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v16.8c0 .9.6 1.5 1.5 1.5z"/>
	</g>
</svg>
	);
};

export default TrashCan;