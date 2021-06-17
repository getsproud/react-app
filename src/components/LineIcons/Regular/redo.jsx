import React from 'react';

function Redo(props) {
	const title = props.title || "redo";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.6 19.5L48.2 8.7c-.9-.8-2.2-.9-3.2-.4-1.1.5-1.7 1.6-1.7 2.8v9.1H18.4c-9.5 0-17.1 8.1-17.1 18s7.7 18 17.1 18h14c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-14c-7.5 0-13.6-6.5-13.6-14.5s6.1-14.5 13.6-14.5h24.8v9.1c0 1.2.7 2.3 1.7 2.8.4.2.9.3 1.3.3.7 0 1.4-.2 1.9-.7l13.4-10.8c.7-.6 1.1-1.5 1.1-2.4.2-1-.3-1.9-1-2.4zM46.7 31.7V11.9L59 21.8l-12.3 9.9z"/>
	</g>
</svg>
	);
};

export default Redo;