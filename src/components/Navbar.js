import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
        <span className="fs-4 text-light">The Latest News</span>
      </a>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <a className="me-3 py-2 text-light text-decoration-none" href="#!">Features</a>
        <a className="me-3 py-2 text-light text-decoration-none" href="#!">Enterprise</a>
        <a className="me-3 py-2 text-light text-decoration-none" href="#!">Support</a>
        <a className="py-2 text-light text-decoration-none" href="#!">Pricing</a>
      </nav>
    </div>
    </div>
  )
}
