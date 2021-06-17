import React from 'react';

function Layout(props) {
	const title = props.title || "layout";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.8 1.4H7.1C4 1.4 1.4 3.9 1.4 7.1v49.6c0 3.2 2.6 5.8 5.8 5.8h49.6c3.2 0 5.8-2.6 5.8-5.8V7.1c-.1-3.2-2.6-5.7-5.8-5.7zM7.1 4.9h49.6c1.2 0 2.3 1 2.3 2.3V17H4.9V7.1c0-1.2 1-2.2 2.2-2.2zm13.5 15.6H59v17.6H20.6V20.5zM4.9 56.7V20.5h12.2V59h-10c-1.2 0-2.2-1-2.2-2.3zM56.8 59H20.6V41.6H59v15.2c0 1.2-1 2.2-2.2 2.2z"/>
	</g>
</svg>
	);
};

export default Layout;