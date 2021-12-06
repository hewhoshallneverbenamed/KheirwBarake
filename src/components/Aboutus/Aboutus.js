import React from "react";
import './Aboutus.css'
import home from '../../assets/images/home.jpg'
import joe from '../../assets/images/test.jpg'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Aboutus() {
    return(
        <html lang="ar" dir="rtl">
            <section class="page-title">
            	{/* <!-- Container Start --> */}
            	<div class="container">
		            <div class="row">
			            <div class="col-md-8 offset-md-2 text-center">
				{/* <!-- Title text --> */}
				            <h3>من نحن</h3>
			            </div>
		            </div>
            	</div>
            	{/* <!-- Container End --> */}
            </section>

            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="about-img">
                                <img src={home} class="img-fluid  rounded" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6 pt-5 pt-lg-0">
                            <div class="about-content">
                                <h3 class="font-weight-bold ">خير وبركة هي مبادرة وقفية</h3>
                                <p>يهدف القيّمون عليها إلى تخفيف الأعباء الإقتصاديّة عن كاهل أفراد المجتمع، عبر تأمين أهم الموادّ الغذائيّة والإستهلاكيّة بأوفر الأسعار وتوصيلها إلى منازلهم. كما تحقّق هذه المبادرة مفهوم التكافل الإجتماعي، عبر إعطاء الفرصة لمن يريد من الأفراد الميسورين التبرّع بمبالغ إضافيّة لكلفة السلع أو تقديم المساعدات العينيّة لنقوم بتسليمها للعائلات العاجزة عن شرائها، و ذلك بعد دراسة وضعها الاجتماعي
<br/>* لإفادة أكبر عدد ممكن نأسف عن إلغاء أي طلبية تحتوي مواد مدعومة لنفس العائلة
<br/>* لا نستقبل محلات تجارية
<br/>* الطلبيات مخصصة للمنازل فقط
<br/>* الحد الأدنى للطلبية هو 50.000 ل.ل</p>
                                {/* <h3 class="font-weight-bold">How we can help</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est justo, aliquam nec tempor
                        fermentum, commodo et libero. Quisque et rutrum arcu. Vivamus dictum tincidunt magna id
                        euismod. Nam sollicitudin mi quis orci lobortis feugiat. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nunc est justo, aliquam nec tempor fermentum, commodo et libero.
                        Quisque et rutrum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est
                        justo, aliquam nec tempor fermentum, commodo et libero. Quisque et rutrum arcu. Vivamus dictum
                        tincidunt magna id euismod. Nam sollicitudin mi quis orci lobortis feugiat.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="heading text-center text-capitalize font-weight-bold py-5">
                                <h2>our team</h2>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="card my-3 my-lg-0">
                                <img class="card-img-top" src={joe} class="img-fluid w-100" alt="Card image cap" />
                                <div class="card-body bg-gray text-center">
                                    <h5 class="card-title">John Doe</h5>
                                    <p class="card-text">Founder / CEO</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="card my-3 my-lg-0">
                                <img class="card-img-top" src={joe} class="img-fluid w-100" alt="Card image cap" />
                                <div class="card-body bg-gray text-center">
                                    <h5 class="card-title">John Doe</h5>
                                    <p class="card-text">Founder / CEO</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="card my-3 my-lg-0">
                                <img class="card-img-top" src={joe} class="img-fluid w-100" alt="Card image cap" />
                                <div class="card-body bg-gray text-center">
                                    <h5 class="card-title">John Doe</h5>
                                    <p class="card-text">Founder / CEO</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="card my-3 my-lg-0">
                                <img class="card-img-top" src={joe} class="img-fluid w-100" alt="Card image cap" />
                                <div class="card-body bg-gray text-center">
                                    <h5 class="card-title">John Doe</h5>
                                    <p class="card-text">Founder / CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </html>    
    )
}

export default Aboutus;