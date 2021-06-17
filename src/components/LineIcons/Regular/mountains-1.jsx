import React from 'react';

function Mountains1(props) {
	const title = props.title || "mountains 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 46.5h-2.2L46.9 20.4c-.2-.5-.7-.9-1.3-1-.6-.1-1.1.1-1.5.5l-5.7 5.6-6.6-10.7c-.3-.5-.9-.8-1.5-.8s-1.2.3-1.5.9l-9 15.1-2.6-.7c-.8-.2-1.6.1-2 .8L5.7 46.5H3c-1 0-1.8.8-1.8 1.8S2 50 3 50h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zM30.3 19.1l6.3 10.1c.3.5.7.8 1.3.8.5.1 1.1-.1 1.4-.5l5.5-5.4L55 46.5H34.8l-7.4-13.9c-.2-.4-.6-.7-1.1-.9l-3.2-.9 7.2-11.7zM17.4 32.9l7.3 2 6.1 11.6H9.7l7.7-13.6z"/>
	</g>
</svg>
	);
};

export default Mountains1;