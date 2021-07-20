import React,{Component} from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';

class Contact extends Component {
  // constructor(props)
  //   {
  //     super(props);
  //     this.formContact = this.formContact.bind(this);
  //   }
  // Mail Form Submission
  // formContact(evt)
  //   {
  //     evt.preventDefault();
  //     const contact = new FormData();
  //     contact.append('name', this.refs.name.value);
  //     contact.append('email', this.refs.email.value);
  //     contact.append('subject', this.refs.subject.value);
  //     contact.append('message', this.refs.message.value);
  //     console.log(this.refs.name.value);
  //     console.log(this.refs.email.value);
  //     console.log(this.refs.subject.value);
  //     console.log(this.refs.message.value);
  //     axios.post('http://localhost:8000/api/contacts', contact).then(res=>
  //     {
  //       console.log(res.data);
  //  // this.myMessage.reset();
  //   //Success Message in Sweetalert modal
  //   Swal.fire({
  //     title: 'Maill Contact of user!!',
  //     text: "Mail has been send to admin.",
      
  //   });
    
  //   }
  //   );
  //    }
  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeContactName = this.onChangeContactName.bind(this);
    this.onChangeContactEmail = this.onChangeContactEmail.bind(this);
    this.onChangeContactSubject = this.onChangeContactSubject.bind(this);
    this.onChangeContactMessage = this.onChangeContactMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    //this.handleChange = this.handleChange.bind(this);

    // Setting up state

    this.state = {
      name: '',
      email: '',
      subject : '',
      message : ''
    }
  }
  // handleChange(e)
  // {
  //   this.setState({ 
  //     image:  e.target.files[0],
  //   })
  //   console.log(this.state.image)
  // }
  onChangeContactName(e) {
    this.setState({name: e.target.value})
  }


  onChangeContactEmail(e) {
    this.setState({email: e.target.value})
  }

  onChangeContactSubject(e) {
    this.setState({subject: e.target.value})
  }  

  onChangeContactMessage(e) {
    this.setState({message: e.target.value})
  }

  onSubmit(e) {
    const contact = new FormData(); 
    contact.append( 
      "image",
     this.state.image
    ); 
    contact.append( 
      "name",
     this.state.name
    ); 
    contact.append( 
      "email",
     this.state.email
    ); 
    axios.post('http://localhost:8000/api/contacts', contact)
      .then(res => console.log(res.data));
    // console.log(`Expense successfully created!`);
    // console.log(`Name: ${this.state.name}`);
    // console.log(`Amount: ${this.state.amount}`);
    // console.log(`Description: ${this.state.description}`);
    Swal.fire(
  'Good job!',
  'Expense Added Successfully',
  'success'
)

    this.setState({name: '', email: '',image:''})
  }


render() {
    return(
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>PNV</p>
          </div>  
          <div className="row"  >
            <div className="col-lg-6">
              <div className="info-box mb-4">
                <i className="bx bx-map" />
                <h3>Our Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-envelope" />
                <h3>Email Us</h3>
                <p className="gmailphone"><a href="mailto:info@honeydreams.com">
                  info@honeydreams.com
                  </a></p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-phone-call" />
                <h3>Call Us</h3>
                <p className="gmailphone"><a href="tel:1234567890" className="mr-2">
                    1234567890
                  </a></p>
              </div>
            </div>
          </div>
          <div className="row"  >
            <div className="col-lg-6 ">
              <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7668.278107353775!2d108.24186711481488!3d16.058272384261798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142177f2ced6d8b%3A0xe282c779264f7088!2zVHLGsOG7nW5nIENhbyDEkOG6s25nIE5naOG7gSDEkMOgIE7hurVuZw!5e0!3m2!1svi!2sbg!4v1624758885261!5m2!1svi!2sbg" frameBorder={0} style={{border: 0, width: '100%', height: '384px'}} allowFullScreen />
            </div>
            <div className="col-lg-6">
              <form >
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" value={this.state.name} onChange={this.onChangeContactName} data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate" />
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" value={this.state.email} onChange={this.onChangeContactEmail} data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validate" />
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" value={this.state.subject} onChange={this.onChangeContactSubject} data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div className="validate" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" value={this.state.message} onChange={this.onChangeContactMessage} defaultValue={""} />
                  <div className="validate" />
                </div>
                {/* <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div> */}
                <div className="text-center"><button type="submit" onClick={this.formContact}>Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}
}
export default Contact;