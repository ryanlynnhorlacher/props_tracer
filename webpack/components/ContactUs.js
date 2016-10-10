import React, { Component } from 'react';
import ReactDOM from 'react-dom'
// import com.sendgrid.*;


class ContactUs extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = { error: false, redirectRoute: '/' }
	}

	componentDidMount() {
    window.scrollTo(0, 0)
	}

	handleSubmit(e) {
		e.preventDefault();
		let name = this.refs.name.value;
		let email = this.refs.email.value;
		let phone = this.refs.phone.value;
		let comment = this.refs.comment.value;
		$.ajax({
			url: 'contact_us',
			type: 'POST',
			data: { name, email, phone, comment },
			dataType: 'JSON'
		}).done( data => {
			alert('Contact Us Sent Successfully!');
			this.props.history.push('/');
		}).fail(data => {
			alert('Failed to send request!')
			console.log(data);
		});
	}

// public class SendGridExample {
//   public static void main(String[] args) {
//     SendGrid sendgrid = new SendGrid(SENDGRID_APIKEY);

//     SendGrid.Email email = new SendGrid.Email();

//     email.addTo("test@sendgrid.com");
//     email.setFrom("christian.lisonbee@gmail.com");
//     email.setSubject("Sending with SendGrid is Fun");
//     email.setHtml("and easy to do anywhere, even with Java");

//     SendGrid.Response response = sendgrid.send(email);
//   }
// }
  render() {
    return (
    	<div className="center">
	    	<h1 className="center"> Contact Us</h1>

	    	<div className="container text-bg round">
		      <form ref='contactForm' onSubmit={this.handleSubmit}>

		        <label>Name</label>
		        <input type="text" ref='name' />

		        <label>Email</label>
		        <input type="text" ref='email' />

		        <label>Phone</label>
		        <input type="text" ref='phone' />

		        <label>Comment</label>
		        <input type='text' ref='comment' />

		        <button type='submit' className='btn-flat'>Submit</button>
		      </form>
	    	</div>
				<div className="row">
        	<div className="card contactbox s12 text-bg round">
						<span className="flow-text center">

							<h5>PropTracer@gmail.com</h5>
							<h5>801-810-9673</h5>
							PO BOX #555<br />
							Salt Lake City, UT, 84105
						</span>
					</div>
				</div>
	    </div>
    );
  }
}

export default ContactUs;
