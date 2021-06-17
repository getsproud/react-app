import React from 'react';

function Header1(props) {
	const title = props.title || "header 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.2 1.3H8.8c-4.2 0-7.5 3.4-7.5 7.5v46.4c0 4.2 3.4 7.5 7.5 7.5h46.4c4.2 0 7.5-3.4 7.5-7.5V8.9c.1-4.2-3.3-7.6-7.5-7.6zM8.8 4.8h46.4c2.2 0 4 1.8 4 4V20H4.8V8.9c0-2.3 1.8-4.1 4-4.1zm-4 50.5V23.6h13.9v35.7H8.8c-2.2 0-4-1.8-4-4zm50.4 4H22.1V23.6h37.1v31.7c.1 2.2-1.8 4-4 4z"/>
	</g>
</svg>
	);
};

export default Header1;