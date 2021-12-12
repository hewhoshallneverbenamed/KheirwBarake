import React from 'react'
import Erreure from '../../assets/images/404.png'

function Error() {
    return(
        <section class="section bg-gray">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center mx-auto">
                        <div class="404-img">
                            <img src={Erreure} class="img-fluid" alt="" />
                        </div>
                        <div class="404-content">
                            <h1 class="display-1 pt-1 pb-2">Oops</h1>
                            <p class="px-3 pb-2 text-dark">Something went wrong,we can't find the page that you are looking for :(But there is a lot more for you!</p>
                            <a href="index.html" class="btn btn-info">GO HOME</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Error