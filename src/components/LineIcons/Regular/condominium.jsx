import React from 'react';

function Condominium(props) {
	const title = props.title || "condominium";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 18.1h-5.9v-7.8c0-3.1-2.5-5.5-5.5-5.5H17.4c-3.1 0-5.5 2.5-5.5 5.5v7.8H6c-2.6 0-4.8 2.1-4.8 4.8v31.6c0 2.6 2.1 4.8 4.8 4.8h52c2.6 0 4.8-2.1 4.8-4.8V22.9c0-2.7-2.2-4.8-4.8-4.8zM4.8 54.5V22.9c0-.7.6-1.3 1.3-1.3H12v34.1H6c-.7 0-1.2-.5-1.2-1.2zm10.6-34.6v-9.6c0-1.1.9-2 2-2h29.2c1.1 0 2 .9 2 2v45.5h-8.2V44c0-1-.8-1.8-1.8-1.8H25.3c-1 0-1.8.8-1.8 1.8v11.7h-8.2V19.9zM27 55.7v-10h10v10H27zm32.3-1.2c0 .7-.6 1.3-1.3 1.3h-5.9V21.6H58c.7 0 1.3.6 1.3 1.3v31.6z"/>
		<path d="M20.7 23.2h7.5c1 0 1.8-.8 1.8-1.8V14c0-1-.8-1.8-1.8-1.8h-7.5c-1 0-1.8.8-1.8 1.8v7.5c0 1 .8 1.7 1.8 1.7zm1.7-7.5h4v4h-4v-4z"/>
		<path d="M35.8 23.2h7.5c1 0 1.8-.8 1.8-1.8V14c0-1-.8-1.8-1.8-1.8h-7.5c-1 0-1.8.8-1.8 1.8v7.5c.1 1 .9 1.7 1.8 1.7zm1.8-7.5h4v4h-4v-4z"/>
		<path d="M28.2 37.1c1 0 1.8-.8 1.8-1.8v-7.5c0-1-.8-1.8-1.8-1.8h-7.5c-1 0-1.8.8-1.8 1.8v7.5c0 1 .8 1.8 1.8 1.8h7.5zm-5.8-7.5h4v4h-4v-4z"/>
		<path d="M35.8 37.1h7.5c1 0 1.8-.8 1.8-1.8v-7.5c0-1-.8-1.8-1.8-1.8h-7.5c-1 0-1.8.8-1.8 1.8v7.5c.1 1 .9 1.8 1.8 1.8zm1.8-7.5h4v4h-4v-4z"/>
	</g>
</svg>
	);
};

export default Condominium;