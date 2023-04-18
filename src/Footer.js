import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div >
            <footer className="container footer" >
                <p className="float-end">
                    <a href="#">Back to top</a>
                </p>
                <p>
                    © 2017-2020 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a>
                </p>
            </footer>
        </div>
    )
}

export default Footer