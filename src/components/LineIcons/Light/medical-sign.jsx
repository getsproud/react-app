import React from 'react';

function MedicalSign(props) {
	const title = props.title || "medical sign";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M38.7 64H25.3c-2.5 0-4.6-2.1-4.6-4.6V43.3H4.6c-2.5 0-4.6-2.1-4.6-4.6V25.3c0-2.5 2.1-4.6 4.6-4.6h16.1V4.6c0-2.5 2.1-4.6 4.6-4.6h13.4c2.5 0 4.6 2.1 4.6 4.6v16.1h16.1c2.5 0 4.6 2.1 4.6 4.6v13.4c0 2.5-2.1 4.6-4.6 4.6H43.3v16.1c0 2.5-2 4.6-4.6 4.6zM4.6 23.7c-.9 0-1.6.7-1.6 1.6v13.4c0 .9.7 1.6 1.6 1.6h17.6c.8 0 1.5.7 1.5 1.5v17.6c0 .9.7 1.6 1.6 1.6h13.4c.9 0 1.6-.7 1.6-1.6V41.8c0-.8.7-1.5 1.5-1.5h17.6c.9 0 1.6-.7 1.6-1.6V25.3c0-.9-.7-1.6-1.6-1.6H41.8c-.8 0-1.5-.7-1.5-1.5V4.6c0-.9-.7-1.6-1.6-1.6H25.3c-.9 0-1.6.7-1.6 1.6v17.6c0 .8-.7 1.5-1.5 1.5H4.6z"/>
	</g>
</svg>
	);
};

export default MedicalSign;