import React from 'react';

function Ux(props) {
	const title = props.title || "ux";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.4 39c.8 0 1.5-.7 1.5-1.5v-11c0-.8-.7-1.5-1.5-1.5H40.3c-.8 0-1.5.7-1.5 1.5v4H25.2v-4c0-.8-.7-1.5-1.5-1.5h-4V14.1h4c.8 0 1.5-.7 1.5-1.5V1.5c0-.8-.7-1.5-1.5-1.5H12.6c-.8 0-1.5.7-1.5 1.5v11.1c0 .8.7 1.5 1.5 1.5h4V25h-4c-.8 0-1.5.7-1.5 1.5v11.1c0 .8.7 1.5 1.5 1.5h11.1c.8 0 1.5-.7 1.5-1.5v-4h13.6v4c0 .8.7 1.5 1.5 1.5h4V50h-4c-.8 0-1.5.7-1.5 1.5v11.1c0 .8.7 1.5 1.5 1.5h11.1c.8 0 1.5-.7 1.5-1.5V51.4c0-.8-.7-1.5-1.5-1.5h-4V39h4zM14.1 3h8.1v8.1h-8.1V3zm8.1 33h-8.1v-8h8.1v8zm27.7 25h-8.1v-8.1h8.1V61zm-8.1-33h8.1v8h-8.1v-8z"/>
	</g>
</svg>
	);
};

export default Ux;