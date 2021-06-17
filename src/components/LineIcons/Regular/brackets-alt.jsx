import React from 'react';

function BracketsAlt(props) {
	const title = props.title || "brackets alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M14 48.3H9.8V37c0-.4-.2-.9-.5-1.2l-4-4.4 4-4.4c.3-.3.5-.7.5-1.2V15.7h4.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H8.1c-1 0-1.8.8-1.8 1.8v11.2l-4.6 5.1c-.6.7-.6 1.7 0 2.3l4.6 5.1V50c0 1 .8 1.8 1.8 1.8H14c1 0 1.8-.8 1.8-1.8s-.9-1.7-1.8-1.7z"/>
		<path d="M62.3 30.2l-4.6-5.1V14c0-1-.8-1.8-1.8-1.8H50c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4.1v10.1c0 .4.2.9.5 1.2l4 4.4-4 4.4c-.3.3-.5.7-.5 1.2v11.3H50c-1 0-1.8.8-1.8 1.8S49 52 50 52h5.9c1 0 1.8-.8 1.8-1.8V37.7l4.6-5.1c.6-.7.6-1.7 0-2.4z"/>
	</g>
</svg>
	);
};

export default BracketsAlt;