import React from 'react';

function TargetMail(props) {
	const title = props.title || "target mail";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm1.5 61v-4.7c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V61C15.7 60.2 3.8 48.3 3 33.5h4.7c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H3C3.8 15.7 15.7 3.8 30.5 3v4.7c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V3c14.8.8 26.7 12.7 27.5 27.5h-4.7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5H61C60.2 48.3 48.3 60.2 33.5 61z"/>
		<path d="M44.4 22.7H19.6c-.8 0-1.5.7-1.5 1.5v15.5c0 .8.7 1.5 1.5 1.5h24.8c.8 0 1.5-.7 1.5-1.5V24.2c0-.8-.7-1.5-1.5-1.5zm-4.6 3L32 30.2l-7.8-4.4h15.6zM21.1 38.3V27.4l10.2 5.8c.2.1.5.2.7.2s.5-.1.7-.2l10.2-5.8v10.8H21.1z"/>
	</g>
</svg>
	);
};

export default TargetMail;