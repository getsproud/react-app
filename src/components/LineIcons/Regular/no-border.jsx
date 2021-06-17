import React from 'react';

function NoBorder(props) {
	const title = props.title || "no border";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M50.7 4.8h5.8c1.4 0 2.6 1.2 2.6 2.6v5.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V7.4c0-3.4-2.7-6.1-6.1-6.1h-5.8c-1 0-1.8.8-1.8 1.8s.7 1.7 1.7 1.7z"/>
		<path d="M3 15c1 0 1.8-.8 1.8-1.8V7.4C4.8 6 6 4.8 7.4 4.8h5.8c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H7.3c-3.3.1-6 2.9-6 6.2v5.8c0 1 .7 1.8 1.7 1.8z"/>
		<path d="M13.1 59.2H7.3c-1.4 0-2.6-1.2-2.6-2.6v-5.8C4.8 49.8 4 49 3 49s-1.8.8-1.8 1.8v5.8c0 3.4 2.7 6.1 6.1 6.1h5.8c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
		<path d="M60.8 49c-1 0-1.8.8-1.8 1.8v5.8c0 1.4-1.2 2.6-2.6 2.6h-5.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h5.8c3.4 0 6.1-2.7 6.1-6.1v-5.8c.1-1.1-.7-1.9-1.7-1.9z"/>
		<path d="M22 59.2h-1.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H22c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M43.7 59.2h-1.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h1.4c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M22 1.3h-1.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H22c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M43.7 1.3h-1.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h1.4c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M61 18.7c-1 0-1.8.8-1.8 1.8v1.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-1.4c0-1-.8-1.8-1.8-1.8z"/>
		<path d="M61 40.4c-1 0-1.8.8-1.8 1.8v1.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-1.4c0-1-.8-1.8-1.8-1.8z"/>
		<path d="M4.9 21.9v-1.4c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v1.4c0 1 .8 1.8 1.8 1.8s1.8-.9 1.8-1.8z"/>
		<path d="M1.4 43.6c0 1 .8 1.8 1.8 1.8S5 44.6 5 43.6v-1.4c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v1.4z"/>
		<path d="M32 48.3c-1 0-1.8.8-1.8 1.8v9.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-9.7c0-1-.8-1.8-1.8-1.8z"/>
		<path d="M32 15.7c1 0 1.8-.8 1.8-1.8V4.2c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v9.7c.1 1 .8 1.8 1.8 1.8z"/>
		<path d="M13.9 30.3H4.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h9.7c1 0 1.8-.8 1.8-1.8 0-1.1-.8-1.8-1.8-1.8z"/>
		<path d="M59.8 33.8c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-9.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h9.7z"/>
		<path d="M37.4 30.4h-3.7v-4.2c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v4.2h-3.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.7v4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-4.2h3.7c1 0 1.8-.8 1.8-1.8 0-.8-.8-1.6-1.8-1.6z"/>
	</g>
</svg>
	);
};

export default NoBorder;