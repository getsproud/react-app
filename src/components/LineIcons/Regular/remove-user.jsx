import React from 'react';

function RemoveUser(props) {
	const title = props.title || "remove user";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M20.6 35.4c5.4 0 9.8-4.4 9.8-9.8s-4.4-9.8-9.8-9.8-9.8 4.4-9.8 9.8c.1 5.4 4.4 9.8 9.8 9.8zm0-16.1c3.5 0 6.3 2.8 6.3 6.3s-2.8 6.3-6.3 6.3-6.3-2.8-6.3-6.3 2.9-6.3 6.3-6.3z"/>
		<path d="M20.6 38.3c-6.9 0-13.6 2.4-18.8 6.8-.7.6-.8 1.7-.2 2.5.6.7 1.7.8 2.5.2 4.6-3.9 10.4-6 16.5-6s11.9 2.1 16.5 6c.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6.6-.7.5-1.8-.2-2.5-5.1-4.4-11.8-6.8-18.7-6.8z"/>
		<path d="M61 37.3H50.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H61c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default RemoveUser;