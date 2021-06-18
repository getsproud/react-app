import React from 'react';

function UserMedical(props) {
	const title = props.title || "user medical";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M27.6 1.2c-7.1 0-12.8 5.7-12.8 12.8 0 7.1 5.7 12.8 12.8 12.8 7.1 0 12.8-5.7 12.8-12.8 0-7-5.7-12.8-12.8-12.8zm0 22.2c-5.1 0-9.3-4.2-9.3-9.3s4.2-9.3 9.3-9.3 9.3 4.2 9.3 9.3-4.2 9.3-9.3 9.3z"/>
		<path d="M36.6 32.9H15.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6h14.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H15.5c-3.4 0-6.1-2.7-6.1-6.1 0-3.4 2.7-6.1 6.1-6.1h21.1c1 0 1.8-.8 1.8-1.8s-.8-1.6-1.8-1.6z"/>
		<path d="M53.8 56.1l-1.3-1.2-.6-.6c1.2-1.3 2.5-2.7 3.6-4.2 2.1-2.8 2.9-5.7 2.4-8.4-.8-3.8-4.4-6.7-8.5-6.8-4 .1-7.6 3-8.4 6.8-.6 2.6.3 5.6 2.4 8.4 1.1 1.5 2.4 2.9 3.6 4.2l-.6.6-1.3 1.2-3.6 3.6c-.7.7-.7 1.8 0 2.5s1.8.7 2.5 0l3.6-3.6 1.2-1.2.6-.6.6.6 1.2 1.2 3.6 3.6c.3.3.8.5 1.2.5.5 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5-.9-1.1-2.1-2.3-3.4-3.6zm-4.3-4.3c-1.1-1.2-2.3-2.4-3.3-3.8-.8-1.1-2.2-3.4-1.7-5.5.5-2.2 2.7-3.9 5-4 2.4.1 4.6 1.8 5.1 4s-.9 4.4-1.7 5.5c-1.1 1.4-2.2 2.6-3.4 3.8z"/>
	</g>
</svg>
	);
};

export default UserMedical;