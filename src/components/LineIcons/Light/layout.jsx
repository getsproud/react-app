import React from 'react';

function Layout(props) {
	const title = props.title || "layout";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.4 0H3.6C1.6 0 0 1.6 0 3.6v56.8c0 2 1.6 3.6 3.6 3.6h56.7c1.9 0 3.5-1.5 3.7-3.3V3.6c0-2-1.6-3.6-3.6-3.6zM3.6 3h56.8c.3 0 .6.2.6.6v13H3v-13c0-.3.3-.6.6-.6zm16.1 16.6H61v19.2H19.7V19.6zM3 60.4V19.6h13.6V61h-13c-.3 0-.6-.3-.6-.6zm57.3.6H19.7V41.8H61v18.5c-.1.4-.4.7-.7.7z"/>
	</g>
</svg>
	);
};

export default Layout;