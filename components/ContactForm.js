var ContactForm = React.createClass({
  	propTypes: {
    	contact: React.PropTypes.object.isRequired
  	},
	render: function() {
	    return (
	    	<form>
	    		<input type={'text'} placeholder={'First Name'} value={this.props.contact.firstName}></input>
	    		<input type={'text'} placeholder={'Last Name'} value={this.props.contact.lastName}></input>
	    		<input type={'text'} placeholder={'Email'} value={this.props.contact.email}></input>
	    		<button type={'submit'}>Add contact</button>	    		
	    	</form>	        
		)
	},
});

			// React.createElement('form', {className: 'contactForm'},
		 //        React.createElement('input', {
	 	//             type: 'text',
		 //            placeholder: 'First Name',
			// 		value: this.props.contact.firstName,
			// 	}),
			// 	React.createElement('input', {
	 	//             type: 'text',
		 //            placeholder: 'Last Name',
			// 		value: this.props.contact.lastName,
			// 	}),
			// 	React.createElement('input', {
	 	//             type: 'text',
		 //            placeholder: 'Email',
			// 		value: this.props.contact.email,
			// 	}),
			// 	React.createElement('button', {type: 'submit'}, 'Add contact')
			// )