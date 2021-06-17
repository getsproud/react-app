import React from 'react';

function RadioButton(props) {
	const title = props.title || "radio button";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M7 2.8c-3.9 0-7 3.2-7 7s3.2 7 7 7 7-3.2 7-7-3.1-7-7-7zm0 11.1c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.7 4-4 4z"/>
		<path d="M7 25c-3.9 0-7 3.2-7 7s3.2 7 7 7 7-3.2 7-7-3.1-7-7-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.7 4-4 4z"/>
		<path d="M7 47.1c-3.9 0-7 3.2-7 7s3.2 7 7 7 7-3.2 7-7-3.1-7-7-7zm0 11.1c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.7 4-4 4z"/>
		<path d="M23.7 11.3h38.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H23.7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
		<path d="M62.5 30.5H23.7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h38.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M62.5 52.7H23.7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h38.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default RadioButton;