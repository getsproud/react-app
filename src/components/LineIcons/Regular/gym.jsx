import React from 'react';

function Gym(props) {
	const title = props.title || "gym";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 57.4h-3.8V6.6H61c1 0 1.8-.8 1.8-1.8S62 3.1 61 3.1H3c-1 0-1.8.8-1.8 1.8S2 6.6 3 6.6h3.8v50.8H3c-1 0-1.8.8-1.8 1.8S2 60.9 3 60.9h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zm-7.3-28.7H41.5V6.6h12.2v22.1zM38 6.6v22.1H26V6.6h12zm-15.5 0v22.1H10.3V6.6h12.2zm3.4 50.8V46.1h12.2v11.3H25.9zm15.7 0v-13c0-1-.8-1.8-1.8-1.8H24.2c-1 0-1.8.8-1.8 1.8v13H10.3V32.2h43.4v25.2H41.6z"/>
	</g>
</svg>
	);
};

export default Gym;