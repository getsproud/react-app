import React from 'react';

function SmartwatchMedical(props) {
	const title = props.title || "smartwatch medical";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47.5 44.9c-1 0-1.8.8-1.8 1.8 0 1.3-1.1 2.4-2.4 2.4H14.5c-.8 0-1.4-.6-1.4-1.4V16.4c0-.8.6-1.4 1.4-1.4H43.2c1.3 0 2.4 1.1 2.4 2.4 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-3.2-2.6-5.9-5.9-5.9h-1l-1-5.5c-.6-2.7-3-4.7-5.8-4.7H23.4c-2.8 0-5.2 2-5.8 4.7l-1.1 5.5h-1.9c-2.7 0-4.9 2.2-4.9 4.9v31.2c0 2.7 2.2 4.9 4.9 4.9h1.9l1.1 5.5c.6 2.7 3 4.7 5.8 4.7h12.1c2.8 0 5.2-2 5.8-4.7l1.1-5.5h.9c3.2 0 5.9-2.6 5.9-5.9.1-.9-.7-1.7-1.7-1.7zM21.1 6.7c.2-1.1 1.2-1.9 2.3-1.9h12.1c1.1 0 2.1.8 2.3 1.9l1 4.8H20.1l1-4.8zm16.8 50.6c-.2 1.1-1.2 1.9-2.3 1.9H23.4c-1.1 0-2.1-.8-2.3-1.9l-1-4.8h18.8l-1 4.8z"/>
		<path d="M52.2 30.6h-3v-3c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v3h-3c-1 0-1.8.8-1.8 1.8s.8 1.7 1.8 1.7h3v3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-3h3c1 0 1.8-.8 1.8-1.7s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default SmartwatchMedical;