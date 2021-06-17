import React from 'react';

function Tornado(props) {
	const title = props.title || "tornado";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M44.9 24.5c8.2-.8 17.9-2.6 17.9-7.1 0-1.1 0-4.4-12.2-6.4v-.4c.1-1.6-.4-3.1-1.5-4.3-1.1-1.2-2.6-1.8-4.2-1.8H14.4c-1.6 0-3 .6-4.1 1.7-1.1 1.1-1.7 2.6-1.6 4.1 0 1.3.1 2.8.3 4.5H5.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.9c.4 1.9.9 3.8 1.6 5.8-6.6 1.3-9.8 3.3-9.8 6 0 5.1 12.3 6.7 19.9 7.3l.9.6c4.5 2.8 7.1 6 7.7 9.5.8 4.9-2.6 9.1-2.7 9.2-.5.6-.6 1.6-.1 2.2.3.4.8.7 1.4.7.3 0 .5-.1.8-.2 1.3-.6 10.5-7.1 13.6-15h6.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-6c.2-1.3.1-2.7-.2-4-1.1-5.1-.8-9.2.8-12.3.2-.1.4-.1.6-.1zm14.3-7.1c-.7.8-4.2 2.4-11.9 3.3 1.4-1.9 2.3-4.2 2.7-6.3 6.3 1 8.6 2.4 9.2 3zm-46.7 9.9c1.1 2.1 2.4 4.1 4.1 6-7.5-.9-11.1-2.5-11.8-3.3.5-.5 2.5-1.7 7.7-2.7zm27.7 10.3c.2 1.1.2 2.2 0 3.3h-2.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H39c-1.4 2.8-3.8 5.5-5.9 7.6.3-1.5.4-3.2.2-5-.6-3.4-2.5-6.6-5.7-9.3h2.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8c-2.5 0-4.9-.1-7.3-.2-3.4-2.5-5.6-5.7-7.2-9.1 0-.1-.1-.2-.1-.2-.9-2.1-1.6-4.2-2-6.2h4.5c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-5.1c-.2-1.7-.3-3.2-.3-4.5 0-.6.2-1.2.6-1.6.4-.4 1-.7 1.7-.7h30.4c.6 0 1.2.3 1.7.7.4.5.6 1.1.6 1.7-.2 2.8-.9 6.7-3.4 9.2-.5.5-1 1.1-1.4 1.6-2.5.2-5.2.3-8 .3-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8c2.1 0 4.1-.1 6.1-.2-1.3 3.3-1.4 7.6-.3 12.6z"/>
	</g>
</svg>
	);
};

export default Tornado;