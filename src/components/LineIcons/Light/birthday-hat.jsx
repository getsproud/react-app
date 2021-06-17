import React from 'react';

function BirthdayHat(props) {
	const title = props.title || "birthday hat";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.8 61.8L41.4 21.4c0-.1-.1-.2-.2-.3l-4.8-8.6C38 11.2 39 9.2 39 7c0-3.9-3.2-7-7-7-3.9 0-7 3.2-7 7 0 2.2 1 4.1 2.6 5.4L.2 61.8c-.3.5-.3 1 0 1.5.3.4.8.7 1.3.7h61c.5 0 1-.3 1.3-.7.3-.5.3-1.1 0-1.5zM20.6 31.1l18.7-7.3 2.7 4.9-25.5 9.8 4.1-7.4zm-6.3 11.4l29.2-11.2h.1l2.5 4.5-35.8 14 4-7.3zM32 3c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0 11.1c.6 0 1.2-.1 1.8-.2l4 7.3-15 5.9 7.3-13.2c.7.1 1.3.2 1.9.2zM8 53.9l39.5-15.5 2.6 4.7L6.7 61H4l4-7.1zm6.6 7.1l36.9-15.2L60 61H14.6z"/>
	</g>
</svg>
	);
};

export default BirthdayHat;