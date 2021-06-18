import React from 'react';

function ShareMedical(props) {
	const title = props.title || "share medical";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 20.9h-4.9L50.7 8.4c-.3-.8-1.1-1.3-2-1.3-.9 0-1.6.6-1.9 1.4l-4.6 11.9-2.2-5.1c-.3-.6-.9-1.1-1.6-1.1h-6.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h5l3.1 7.2c.3.8 1.1 1.3 1.9 1.3.8 0 1.6-.5 1.9-1.4L48.7 13l4.5 10.4c.3.6.9 1.1 1.6 1.1H61c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M56.4 41.4c-1.2-3.8-5-6-8.7-5-3.5 1-8.3 2.4-11.7 3.5.5-1.3.3-2.4 0-3.2-.8-2.1-3.2-3.1-5.2-3.1h-9.6c-.9 0-1.8-.4-2.7-1.2-1-.9-2.3-1.4-3.6-1.4H7.1c-3.2 0-5.9 2.7-5.9 6.1v12.3c0 3.4 2.7 6.2 6 6.2h9.3c1.2 0 2.3-.4 3.3-1.1l.2.1c2.7 1.5 5.7 2.3 8.8 2.3 1.9 0 3.7-.3 5.4-.8l17.3-5.3h.1c4.9-1.9 5.7-6.2 4.8-9.4zM7.2 52.1c-1.4 0-2.5-1.2-2.5-2.7V37.1c0-1.4 1.1-2.6 2.4-2.6h7.7c.6 0 1 .3 1.3.5.3.3.7.5 1 .8V52c-.2 0-.4.1-.6.1H7.2zm43.2-4.6l-17.2 5.3c-1.4.4-2.8.7-4.3.7-2.5 0-4.9-.6-7.1-1.8l-1.2-.6v-14h10.1c.9 0 1.8.4 1.9.9.2.5-.2 1.8-2.2 3.6-.6.6-.7 1.4-.3 2.1.7 1.3.7 1.3 10.3-1.5l8.2-2.4c1.8-.5 3.7.6 4.4 2.6.4 1.4.6 3.9-2.6 5.1z"/>
	</g>
</svg>
	);
};

export default ShareMedical;