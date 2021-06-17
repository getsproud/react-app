import React from 'react';

function Record(props) {
	const title = props.title || "record";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 0C14.4 0 0 14.4 0 32s14.3 32 32 32c17.6 0 32-14.3 32-32C64 14.4 49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
		<path d="M32 20c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm0 21c-5 0-9-4.1-9-9s4.1-9 9-9 9 4.1 9 9-4 9-9 9z"/>
	</g>
</svg>
	);
};

export default Record;