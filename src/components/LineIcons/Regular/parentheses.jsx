import React from 'react';

function Parentheses(props) {
	const title = props.title || "parentheses";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M16.4 4.4c.8-.6.9-1.7.3-2.5-.6-.8-1.7-.9-2.5-.3-6.5 5-10.7 17-10.7 30.4 0 13.4 4.3 25.3 10.8 30.4.3.2.7.4 1.1.4.5 0 1-.2 1.4-.7.6-.8.4-1.9-.3-2.5C10.8 55.3 7 44.2 7 32c0-12.2 3.8-23.3 9.4-27.6z"/>
		<path d="M49.7 1.6c-.8-.6-1.9-.4-2.5.3-.6.8-.4 1.9.3 2.5C53.2 8.7 57 19.8 57 32c0 12.2-3.8 23.3-9.5 27.6-.8.6-.9 1.7-.3 2.5.3.4.9.7 1.4.7.4 0 .7-.1 1.1-.4 6.6-5 10.8-17 10.8-30.4 0-13.4-4.2-25.4-10.8-30.4z"/>
	</g>
</svg>
	);
};

export default Parentheses;