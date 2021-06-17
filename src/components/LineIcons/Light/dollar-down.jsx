import React from 'react';

function DollarDown(props) {
	const title = props.title || "dollar down";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 39.8c.8 0 1.5-.7 1.5-1.5V37h1.1c3.7 0 6.6-3.2 6.6-7.2s-3-7.2-6.6-7.2h-5.2c-2 0-3.6-1.9-3.6-4.2 0-2.3 1.6-4.2 3.6-4.2h8.3c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-4.2V10c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v1.3h-1.1c-3.6 0-6.6 3.2-6.6 7.2s3 7.2 6.6 7.2h5.2c2 0 3.6 1.9 3.6 4.2S36.6 34 34.6 34h-8.2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h4.2v1.3c-.1.9.6 1.5 1.4 1.5z"/>
		<path d="M9.3 25.6c.8 0 1.5-.7 1.5-1.5C10.8 12.5 20.3 3 32 3s21.2 9.5 21.2 21.1c0 6.4-2.9 12.4-7.9 16.4-.6.5-.7 1.5-.2 2.1.3.4.7.6 1.2.6.3 0 .7-.1.9-.3 5.7-4.6 9-11.4 9-18.7C56.2 10.8 45.3 0 32 0S7.8 10.8 7.8 24.1c0 .8.7 1.5 1.5 1.5z"/>
		<path d="M51.6 49.7c-.8 0-1.5.7-1.5 1.5v8L36 49.1c-.9-.6-1.9-.9-3-.9H19.3c-.7 0-1.3-.3-1.8-.7l-7.1-7.3c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l7 7.3c1 1.1 2.4 1.7 4 1.7H33c.5 0 .9.1 1.3.4L47.5 61h-7.2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h11.3c.8 0 1.5-.7 1.5-1.5V51.2c0-.9-.6-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default DollarDown;