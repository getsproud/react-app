import React from 'react';

function CutleryAlt1(props) {
	const title = props.title || "cutlery alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M43.6 36.7l18.2-18c.6-.6.9-1.4.9-2.2s-.3-1.6-.9-2.2L60 12.4c-2.3-2.3-5.8-2.3-8.7-.2 0 0-.1 0-.1.1L34 26.9c-.4.3-.6.8-.6 1.3s.2 1 .5 1.3l6 6-4.7 4.7-8.7-8.6c1.5-1.8 2.4-4 2.4-6.3 0-2.4-.9-4.7-2.7-6.4l-.1-.1-10.8-9.4c-.7-.6-1.8-.5-2.5.2-.6.7-.5 1.8.2 2.5l10.8 9.3c1 1 1.6 2.4 1.6 3.9 0 1.4-.5 2.7-1.4 3.8L9.8 15c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l14.2 14c-2.3 1.9-5.7 1.8-7.8-.2L4.3 20.6c-.6-.7-1.7-.8-2.5-.2-.7.6-.8 1.7-.2 2.5L11 33.7l.1.1c1.8 1.7 4.1 2.6 6.5 2.6 2.2 0 4.5-.8 6.3-2.4l8.7 8.6-9.5 9.4c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l9.6-9.5 9.6 9.5c.3.3.8.5 1.2.5.5 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5l-9.6-9.5 6.1-5.8zM53.5 15c1.2-.9 2.8-1.3 4.1-.1l1.5 1.5L42.4 33l-4.7-4.6L53.5 15z"/>
	</g>
</svg>
	);
};

export default CutleryAlt1;