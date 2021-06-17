import React from 'react';

function CirclePlus(props) {
	const title = props.title || "circle plus";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M43.1 30.4h-9.6v-9.6c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v9.6h-9.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h9.6V43c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-9.6h9.6c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
	</g>
</svg>
	);
};

export default CirclePlus;