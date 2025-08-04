import React from 'react'
import Layout from '../layout/Layout'
import {NavLink} from 'react-router-dom'

export default function Login() {
  return (
    <Layout>
      <div className="row my-3">
        <div className='col-md-3'></div>
        <div className="col-md-6">
          <div className='card p-5'>
            <h3 className='mb-3'>Login Form</h3>
            <form>
              <div className='form-group'>
                <label htmlFor="">Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className='form-group'>
                <label htmlFor="">Password</label>
                <input type="password" className="form-control"/>
              </div>
              <div className="form-group mt-2">
                  <button className="btn btn-primary w-100">Login</button>
                  <p className="mt-2">Not a registered user <NavLink to={'/register'}> click here</NavLink></p>
              </div>
            </form>
          </div>
        </div>
        <div className='col-md-3'></div>
      </div>
    </Layout>
  )
}