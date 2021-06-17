import React from 'react';

function OfficePlan(props) {
	const title = props.title || "office plan";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 11.8H19c-1.6-3.3-5-5.7-9-5.7-5.5 0-10 4.5-10 10v31.6c0 5.5 4.5 10 10 10h47c3.8 0 7-3.2 7-7.2V19c0-3.9-3.1-7.2-7-7.2zM10 9.2c3.9 0 7 3.1 7 7v24.5c-1.8-1.8-4.3-2.9-7-2.9s-5.2 1.1-7 2.9V16.2c0-3.9 3.2-7 7-7zM3 47.8c0-3.9 3.2-7 7-7s7 3.1 7 7-3.2 7-7 7-7-3.1-7-7zm58 2.8c0 2.3-1.8 4.2-4 4.2H17.2c1.8-1.8 2.9-4.3 2.9-7V16.2c0-.5 0-.9-.1-1.4h37c2.2 0 4 1.9 4 4.2v31.6z"/>
		<path d="M49 44.1h-1.2v-20c0-.8-.7-1.5-1.5-1.5H30.2c-.8 0-1.5.7-1.5 1.5v20h-1.2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5H49c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.5-1.5zm-17.3 0V25.6h13.1v18.5H31.7z"/>
	</g>
</svg>
	);
};

export default OfficePlan;