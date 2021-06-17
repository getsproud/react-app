import React from 'react';

function Dollar(props) {
	const title = props.title || "dollar";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M41.1 30.5H23.8c-6.4 0-11.5-4.9-11.5-11s5.2-11 11.5-11h27.6c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H36.3v-4c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v4h-9.5c-8 0-14.5 6.3-14.5 14s6.5 14 14.5 14h17.4c6.4 0 11.5 4.9 11.5 11s-5.2 11-11.5 11H9.8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h23.5v4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-4h4.9c8 0 14.5-6.3 14.5-14s-6.5-14-14.6-14z"/>
	</g>
</svg>
	);
};

export default Dollar;