import React from 'react'
import Heading from "./Heading"
import { Link} from 'gatsby'

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container text-center">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p class="lead text-white mb-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ipsam dolorem sunt, nam sint distinctio beatae. Sint error mollitia perferendis eos dicta distinctio perspiciatis non porro, quam, repellat similique! Sit, incidunt quaerat? Nihil, unde vitae recusandae et rem quod quaerat facere doloremque soluta dignissimos neque totam, magnam voluptatem sapiente ullam incidunt, assumenda quisquam dolorum laudantium quas eligendi nulla. Veniam, soluta.

                        </p>
                        <Link to="/about/">
                            <button className="btn btn-warning btn-lg">{heading}</button>
                        </Link>
                    </div>
                </div>

            </div>
            
        </section>
    )
}
