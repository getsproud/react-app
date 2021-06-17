import React from 'react';

function Copy(props) {
	const title = props.title || "copy";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 23.2H35V8.6c0-4-3.3-7.3-7.3-7.3H8.6c-4 0-7.3 3.3-7.3 7.3v22.6c0 4 3.3 7.3 7.3 7.3H27V57c0 3.2 2.6 5.8 5.8 5.8H57c3.2 0 5.8-2.6 5.8-5.8V29c0-3.2-2.6-5.8-5.8-5.8zM8.6 35c-2.1 0-3.8-1.7-3.8-3.8V8.6c0-2.1 1.7-3.8 3.8-3.8h19.1c2.1 0 3.8 1.7 3.8 3.8v14.8C28.9 24 27 26.3 27 29v6H8.6zm50.7 22c0 1.2-1 2.3-2.3 2.3H32.8c-1.2 0-2.3-1-2.3-2.3V29c0-1.2 1-2.3 2.3-2.3H57c1.2 0 2.3 1 2.3 2.3v28z"/>
		<path d="M51.6 32H38.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h13.4c1 0 1.8-.8 1.8-1.8 0-1.1-.8-1.8-1.8-1.8z"/>
		<path d="M51.6 41.3H38.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h13.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M51.6 50.7H38.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h13.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Copy;