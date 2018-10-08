import React, { Component, Fragment } from 'react'
import "./styles.css"

class ComingSoon extends Component {
  state = {
    emailPresent: false,
    namePresent: false,
    showEmailForm: false,
    showMessage: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showEmailForm: true }, () => {
        setTimeout(() => {
          this.setState({ showMessage: true })
        }, 1000)
      })
    }, 4000)
  }
 
  render() {
    const { showEmailForm, showMessage } = this.state
    return (
      <div className={showEmailForm ? "coming-soon-container-active" : "coming-soon-container"}>
        <h1>COMING SOON</h1>
        <h2>06.21.2019</h2>
        <h3>{'👰 ❤️ 🤵'}</h3>
        {showEmailForm ? (
          <Fragment>
            <form>
              <div className="margin-1-t">
                <label>
                  <span>Your Name</span>
                  <input type="text" onChange={this.handleNameChange} placeholder="First and Last Name" />
                </label>
              </div>
              <div className="margin-1-t">
                <label>
                  <span>Your Email</span>
                  <input type="email" onChange={this.handleEmailChange} placeholder="Email Address" />
                </label>
              </div>
              <div className="right">
                {this.showSubmitButton() ? (
                  <input type="submit" />
                ) : null}
              </div>
            </form>
            {showMessage && !this.showSubmitButton() ? (
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

  showSubmitButton = () => {
    const { namePresent, emailPresent } = this.state
    return namePresent && emailPresent
  }
}

export default ComingSoon
