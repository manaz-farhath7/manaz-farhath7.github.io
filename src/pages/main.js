import React from 'react';
import Name from '../components/name';

export class Mass extends React.Component {
	render(){
		//render will b overridden inside the component
		return(
			<div> 
				<Name/>
				<p>College Name</p>
			</div>
		)
	} 
}
