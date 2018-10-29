import React, { Component, Fragment } from 'react'
import { toast } from "react-toastify"
import { API } from '../../utils'
import './styles.css'

class ComingSoon extends Component {
  state = {
    emailPresent: false,
    namePresent: false,
    showEmailForm: false,
    showMessage: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showMessage: true, showEmailForm: true })
    }, 4000)
  }
 
  render() {
    const { showEmailForm, showMessage } = this.state
    return (
      <div className={showEmailForm ? "coming-soon-container-active" : "coming-soon-container"}>
        <h1>COMING SOON</h1>
        <h2>06.21.2019</h2>
        {showMessage ? (
          <Fragment>
            <p>
              Enter your name and email and we'll send you a message when our site is up and running!
                </p>
            <p>Love,</p>
            <p>
              Tara & Wade
            </p>
          </Fragment>
        ) : null}
        {showEmailForm ? (
          <Fragment>
            <form onSubmit={this.handleSubmit}>
              <div className="margin-1-t">
                <label>
                  <span>Your Name</span>
                  <input
                    type="text"
                    onChange={this.handleNameChange}
                    ref={el => this.nameInput = el}
                  />
                </label>
              </div>
              <div className="margin-1-t">
                <label>
                  <span>Your Email</span>
                  <input
                    type="email"
                    onChange={this.handleEmailChange}
                    ref={el => this.emailInput = el}
                  />
                </label>
              </div>
              <div className="right">
                {this.showSubmitButton() ? (
                  <input type="submit" />
                ) : null}
              </div>
            </form>
          </Fragment>
        ) : null}
      </div>
    )
  }

  handleEmailChange = ({ target: { value } }) => {
    this.setState({ emailPresent: !!value })
  }
  
  handleNameChange = ({ target: { value } }) => {
    this.setState({ namePresent: !!value })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { emailInput, nameInput } = this
    const data = { email: emailInput.value, name: nameInput.value }
    const res = await API.call("newSubscriber", data)
    if (res.data && res.data.errors.length && res.data.errors.length) {
      res.data.errors.map(err => (
        toast.error(`Error: ${err.detail}`)
      ))
    } else {
      toast.success("Info saved! We'll email you when we have an update 😎")
      emailInput.value = ""
      nameInput.value = ""
    }
  }

  showSubmitButton = () => {
    const { namePresent, emailPresent } = this.state
    return namePresent && emailPresent
  }
}

export default ComingSoon
