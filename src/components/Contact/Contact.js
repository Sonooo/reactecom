import React from 'react'
import Heading from '../reuseable/Heading'

export default function Contact() {
    return (
        <section className="py-3">
            <Heading title=" Contact Us"/>
            <div className="col-10 col-sm-8 mx-auto">
                <form action="https://formspree.io/sanapsaurabh218@gmail.com" method="POST" className="py-3">
                    <div className="from-group">
                        <input type="text" name="name" id="name" placeholder="your Name" className="form-control"/>
                    </div>
                    <br/>
                    <div className="from-group">
                        <input type="email" name="email" id="email" placeholder="your Email" className="form-control"/>
                    </div>
                    <br/>
                    <div className="from-group">
                        <input type="text" name="Mobile" id="Mobile" placeholder="your Mobile" className="form-control"/>
                    </div>
                    <br/>
                    <div className="from-group">
                        <textarea type="text" name="description" id="description" placeholder="your message" className="form-control"/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-outline-info btn-block" >Submit</button>
                </form>
            </div>
        </section>
    )
}
