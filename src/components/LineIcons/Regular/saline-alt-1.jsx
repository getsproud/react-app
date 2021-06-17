import React from 'react';

function SalineAlt1(props) {
	const title = props.title || "saline alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47.8 17.8h-5.3v-6.3h5.1c1 0 1.8-.8 1.8-1.8S48.6 8 47.6 8H15.2V3c0-1-.8-1.8-1.8-1.8S11.7 2 11.7 3v58c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V11.5H39v6.3h-5.3c-2.5 0-4.6 2.1-4.6 4.6v13.2c0 1.7.9 3.2 2.4 4l7.4 4.1v5.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.7l7.4-4.1c1.5-.8 2.4-2.3 2.4-4V22.4c0-2.6-2-4.6-4.5-4.6zm-14 3.5h14c.6 0 1.1.5 1.1 1.1v3.1H32.7v-3.1c0-.6.5-1.1 1.1-1.1zm14.5 15.2l-7.5 4.1-7.5-4.1c-.3-.2-.6-.6-.6-.9V29h16.2v6.6c-.1.3-.3.7-.6.9z"/>
	</g>
</svg>
	);
};

export default SalineAlt1;