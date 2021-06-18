import React from 'react';

function MenuCircle(props) {
	const title = props.title || "menu circle";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
		<path d="M43 17.8H21c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h22c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M43 30.5H21c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h22c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M43 43.2H21c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h22c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default MenuCircle;