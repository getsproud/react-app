import React from 'react';

function Hanger1(props) {
	const title = props.title || "hanger 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M40.3 28.4l-6.8 5.2V22.9l9-6.8c.8-.6.9-1.7.3-2.5-.6-.8-1.7-.9-2.5-.3l-6.8 5.2V3c0-1-.8-1.8-1.8-1.8S29.9 2 29.9 3v7.5l-6.2-4.7c-.8-.6-1.9-.4-2.5.3-.6.8-.4 1.9.3 2.5l8.4 6.4v10.7L23.7 21c-.8-.6-1.9-.4-2.5.3-.6.8-.4 1.9.3 2.5l8.4 6.4v29.2h-6.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h16.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-6.8V38l9-6.8c.8-.6.9-1.7.3-2.5-.5-.7-1.6-.9-2.4-.3z"/>
	</g>
</svg>
	);
};

export default Hanger1;