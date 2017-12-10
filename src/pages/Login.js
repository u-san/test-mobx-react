import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import Loading from '../components/common/Loading'
import Error from '../components/common/Error'

@inject('store')
@observer
class Login extends React.Component {

  // When route is loaded (isomorphic)
  static onEnter({ state }) {
    state.common.title = 'Login'
  }

  static contextTypes = {
    router: PropTypes.any
  }

  state = {
    username: '',
    password: '',
    loading: false,
    error: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault()
    const { store } = this.props
    const { router } = this.context
    const { username, password } = this.state

    this.setState({
      error: null,
      loading: true
    })

    store.account.login({ username, password }).then(() => {
      router.history.push('/')
    }).catch(error => {
      this.setState({
        error,
        loading: false,
      })
    })
  }

  render() {
    const { loading, error, username } = this.state

    if (loading) {
      return <Loading/>
    }

    return (
      <main>
        <h1>sign-in</h1>
        <form className="account" onSubmit={this.handleLogin}>
          <label>
            Usernames
            <input
              type="text"
              name="username"
              onChange={this.handleChange}
              value={username}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              required
            />
          </label>

          {loading
            ? <button disabled>Loading</button>
            : <button type="submit">Login</button>
          }

          {error && <Error text={error}/>}
        </form>
      </main>
    )
  }
}

export default Login
