import React from 'react'
import Heading from './Heading'

import { Link} from 'gatsby'

export default function Dualinfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container text-center">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet suscipit nisi quibusdam perspiciatis. Commodi praesentium, vitae neque sed fuga error minima maxime doloribus illum incidunt officiis eveniet aliquam in expedita aspernatur facere perferendis assumenda alias autem corporis dicta quod deserunt rem adipisci. Quia magnam dolore delectus quas atque. Ipsum, maiores?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet suscipit nisi quibusdam perspiciatis. Commodi praesentium, vitae neque sed fuga error minima maxime doloribus illum incidunt officiis eveniet aliquam in expedita aspernatur facere perferendis assumenda alias autem corporis dicta quod deserunt rem adipisci. Quia magnam dolore delectus quas atque. Ipsum, maiores?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet suscipit nisi quibusdam perspiciatis. Commodi praesentium, vitae neque sed fuga error minima maxime doloribus illum incidunt officiis eveniet aliquam in expedita aspernatur facere perferendis assumenda alias autem corporis dicta quod deserunt rem adipisci. Quia magnam dolore delectus quas atque. Ipsum, maiores?


                        </p>
                    </div>
                    <div className="col-md-4">
                    <div className="card bg-dark" >
  <img src="https://cdn.pixabay.com/photo/2019/08/29/09/05/helenium-4438586__340.jpg" className="card-img-top" alt="img goes here"/>
  <div className="card-body">
    <h5 className="card-title text-white">just click photos</h5>
    <p className="card-text text-white">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae debitis quos recusandae obcaecati eius ut, voluptates cum ducimus perferendis hic! Ipsam deleniti fuga a iure perferendis explicabo fugiat quae hic!
    </p>
    <Link to="/about/">
                            <button className="btn btn-warning btn-lg btn-block">{heading}</button>
                        </Link>

  </div>
</div>

                    </div>
                </div>
            </div>
        </section>
    )
}
