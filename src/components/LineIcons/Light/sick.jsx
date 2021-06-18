import React from 'react';

function Sick(props) {
	const title = props.title || "sick";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 0C14.4 0 0 14.4 0 32s14.3 32 32 32 32-14.3 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
		<path d="M25.2 22.3c0-3.1-2.5-5.7-5.7-5.7s-5.7 2.5-5.7 5.7 2.5 5.7 5.7 5.7 5.7-2.6 5.7-5.7zm-8.3 0c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7S21 25 19.5 25s-2.6-1.2-2.6-2.7z"/>
		<path d="M44.5 16.6c-3.1 0-5.7 2.5-5.7 5.7s2.5 5.7 5.7 5.7 5.7-2.5 5.7-5.7-2.6-5.7-5.7-5.7zm0 8.4c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7 2.7 1.2 2.7 2.7-1.3 2.7-2.7 2.7z"/>
		<path d="M45.3 39.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5c-2.9 0-5.4 1.6-6.6 3.8-4.4-1.2-9.2-1.2-13.6 0-1.2-2.3-3.8-3.8-6.7-3.8-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5c2.1 0 3.9 1.3 4.3 3.1v.1c.1.3.1.6.1.9 0 2.2-2 4.1-4.5 4.1-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5c4.1 0 7.5-3.2 7.5-7.1v-.3c3.9-1.1 8.2-1.1 12 0v.4c0 3.9 3.4 7.1 7.5 7.1.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5c-2.5 0-4.5-1.8-4.5-4.1 0-2.4 2.1-4.2 4.5-4.2z"/>
	</g>
</svg>
	);
};

export default Sick;