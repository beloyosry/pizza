const pizzaData = {
    pizza1: {
        navBar: {
            title: "top-menu-1",
        },
        pizza: {
            title: "pizza-1",
            img: {
                one: "images/first-pizza_1.png",
                two: "images/first-pizza_2.png",
                three: "images/first-pizza_3.png",
            },
            name: {
                title: "بيتزا مارجريت",
                langAttr: "pizza1",
            },
            price: "15$",
            desc: {
                content:
                    "بيتزا مارجريت: هي الشكل الأساسي المعروف لطبق البيتزا، أي تلك التي تحتوي على صلصة بندورة بسيطة منكَّهة بالأعشاب ومغطّاة بالجبنة، وقد سُمّيت بهذا الاسم نسبةً إلى الملكة مارجريتا؛ حيث ابتكر الطاهي روفائيل اسبوزيتو هذا الطبق بمناسبة قدوم الملكة مارجريتا إلى مدينة نابولي.",
                langAttr: "pizzaDescription1",
            },
        },
        footer: {
            title: "footer-pizza-1",
        },
    },
    pizza2: {
        navBar: {
            title: "top-menu-2",
        },
        pizza: {
            title: "pizza-2",
            img: {
                one: "images/second-pizza_1.png",
                two: "images/second-pizza_2.png",
                three: "images/second-pizza_3.png",
            },
            name: {
                title: "بيتزا الخضار",
                langAttr: "pizza2",
            },
            price: "25$",
            desc: {
                content:
                    "بيتزا الخضار: بيتزا الخضار شهية وغنية بالفوائد الكثيرة كونها تحتوي على أفضل أنواع الخضراوات المفيدة للجسم، علاوة على ذلك تتميز بطعمها الشهي ويتفق على حبها كل صغير وكبير من أفراد العائلة.",
                langAttr: "pizzaDescription2",
            },
        },
        footer: {
            title: "footer-pizza-2",
        },
    },
    pizza3: {
        navBar: {
            title: "top-menu-3",
        },
        pizza: {
            title: "pizza-3",
            img: {
                one: "images/third-pizza_1.png",
                two: "images/third-pizza_2.png",
                three: "images/third-pizza_3.png",
            },
            name: {
                title: "بيتزا الدجاج",
                langAttr: "pizza3",
            },
            price: "10$",
            desc: {
                content:
                    "بيتزا الدجاج: مكونة من دجاج طازج مشوي مع الفلفل الأخضر و الأحمر ،البصل ،جبنة الموتزاريلا وصلصة البيتزا المميزة مع صلصة النعناع الشهية ,تعد من أشهى أنواع البيتزا حيث أن الدجاج له نصيب كبير بين محبي الطعام.",
                langAttr: "pizzaDescription3",
            },
        },
        footer: {
            title: "footer-pizza-3",
        },
    },
};

const pizzaClasses = ["pizza1", "pizza2", "pizza3"];
let foundClass = null;

for (const pizzaClass of pizzaClasses) {
    if (document.querySelector(`.${pizzaClass}`)) {
        foundClass = pizzaClass;
        break;
    }
}

if (foundClass) {
    // generate HTML template in the element with the matching class
    const data = pizzaData[foundClass];
    console.log(data.pizza.title);
    const pizzaComponent = document.createElement("div");
    pizzaComponent.innerHTML = `
    <div class="container-fluid">
        <section class="${data.navBar.title}">
            <div class="row">
                <nav class="navbar navbar-expand-lg fixed-top" id="navbar">
                    <div class="container">
                        <a class="navbar-brand" href="index.html" style="color: #fefefe;">
                            <img src="images/logo-white-red.png" class="logo" alt="">
                            <img src="images/logo-red.png" class="logo-transparent" style="display: none;" alt="">
                            ARA<span style="color: #eb173d;">PIZZA</span></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fas fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item p-2">
                                    <a class="nav-link" href="index.html" data-lang="navHome">الرئيسية</a>
                                </li>
                                <li class="nav-item p-2">
                                    <a class="nav-link" href="index.html#menu" data-lang="navMenu">المنيو</a>
                                </li>
                                <li class="nav-item p-2">
                                    <a class="nav-link" href="index.html#offers" data-lang="navOffers">العروض</a>
                                </li>
                                <li class="nav-item p-2">
                                    <a class="nav-link" href="about.html" data-lang="navAbout">حول المطعم</a>
                                </li>
                                <li class="nav-item p-2">
                                    <a class="nav-link" href="contactUs.html" data-lang="navContact">تواصل معنا</a>
                                </li>
                                <li class="nav-item p-2">
                                    <a class="nav-link lang" href="#">English</a>
                                </li>
                            </ul>
                        </div>
                        <ul class="navbar-nav ml-auto cart-list">
                            <li class="nav-item p-2">
                                <div class="cart-container">
                                    <a href="cart.html" class="nav-link cart position-relative">
                                        <i class="fa fa-shopping-cart"></i>
                                        <span
                                            class="counter position-absolute translate-middle p-1 bg-danger border border-light rounded-circle">
                                            <span class="visually-hidden">New alerts</span>
                                        </span>
                                    </a>
                                    <div class="cart-dropdown">
                                        <div class="product-total">
                                            <div class="total-text">Total:</div>
                                            <div class="total-price"></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
        <section class="${data.pizza.title}">
            <div class="bg-pattern"></div>
            <div class="container">
                <div class="row">
                    <div class="col-12 borders-between">
                        <div class="row">
                            <div class="col-lg-5 offset-lg-1 col-md-9 offset-md-2">
                                <div class="carousel slide" id="carousel-product-images">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="${data.pizza.img.one}" alt="">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="${data.pizza.img.two}" alt="">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="${data.pizza.img.three}" alt="">
                                        </div>
                                    </div>
                                    <div class="carousel-indicators custom-carousel-indicators-primary">
                                        <img data-bs-target="#carousel-product-images" data-bs-slide-to="0"
                                            class="active" src="${data.pizza.img.one}" alt="">
                                        <img data-bs-target="#carousel-product-images" data-bs-slide-to="1"
                                            src="${data.pizza.img.two}" alt="">
                                        <img data-bs-target="#carousel-product-images" data-bs-slide-to="2"
                                            src="${data.pizza.img.three}" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <form id="form-product-selection" class="borders-between">
                                    <div class="row">
                                        <div class="clearfix block-100">
                                            <h2 class="float-right" data-lang="${data.pizza.name.langAttr}">${data.pizza.name.title}</h2>
                                            <div class="float-left price large" data-product-price>25$</div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <p class="product-description" data-lang="${data.pizza.desc.langAttr}">${data.pizza.desc.content}</p>
                                    </div>
                                    <div class="row size-and-type">
                                        <div class="col-md-6" data-lang="pizzaSize">
                                            الحجم:
                                            <br />
                                            <div class="product-option active">
                                                <label>
                                                    S
                                                    <input type="radio" name="size" value="sm" checked>
                                                </label>
                                            </div>
                                            <div class="product-option">
                                                <label>
                                                    M
                                                    <input type="radio" name="size" value="m">
                                                </label>
                                            </div>
                                            <div class="product-option">
                                                <label>
                                                    L
                                                    <input type="radio" name="size" value="l">
                                                </label>
                                            </div>
                                        </div>
                                        <!--اختيار اللون-->
                                        <div class="col-md-6" data-lang="pizzaType">
                                            نوع العجينة:
                                            <br />
                                            <div class="product-option type active">
                                                <label>
                                                    نحيفة
                                                    <input type="radio" name="type" value="thin" checked>
                                                </label>
                                            </div>
                                            <div class="product-option type">
                                                <label>
                                                    سميكة
                                                    <input type="radio" name="type" value="classic">
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row product-quantity clearfix">
                                        <div class="col-12 d-flex align-items-center justify-content-between">
                                            <div class="clearfix">
                                                <div class="float-right label" data-lang="quantity">
                                                    العدد المطلوب:
                                                </div>
                                                <div class="float-right">
                                                    <select id="quantity" class="form-control custom-form-control"
                                                        name="quantity">
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="total">
                                                <p style="display: inline;" data-lang="total">الإجمالي:</p>
                                                <br>
                                                <span id="total-price"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <button type="submit" class="btn custom-btn custom-btn-with-icon"
                                                data-lang="addPizzaToCart">
                                                <span>
                                                    إضافة لعربة الشراء
                                                    <i class="fas fa-cart-plus fa-lg"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="comments block-100">
                                <h3 class="custom-heading heading-inline heading-with-border-bottom"
                                    data-lang="comments">
                                    التعليقات على المُنتج
                                </h3>
                                <div class="borders-between">
                                    <div class="row">
                                        <div class="media">
                                            <img src="images/reviewer_1.png" alt="محمد هاني">
                                            <div class="media-body">
                                                <h4 class="media-heading" data-lang="clientName1">
                                                    محمد هاني
                                                </h4>
                                                <div class="rating">
                                                    <span class="fas fa-star active"></span>
                                                    <span class="fas fa-star active"></span>
                                                    <span class="fas fa-star active"></span>
                                                    <span class="fas fa-star active"></span>
                                                    <span class="fas fa-star"></span>
                                                </div>
                                                <p data-lang="comment1">
                                                    لذيذ جدا و التوصيل في وقت قياسي
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row pb-0">
                                        <div class="media">
                                            <img src="images/reviewer_2.png" alt="منى محمود">
                                            <div class="media-body">
                                                <h4 class="media-heading" data-lang="clientName2">
                                                    منى محمود
                                                </h4>
                                                <div class="rating">
                                                    <span class="fas fa-star active"></span>
                                                    <span class="fas fa-star active"></span>
                                                    <span class="fas fa-star active"></span>
                                                    <span class="fas fa-star "></span>
                                                    <span class="fas fa-star"></span>
                                                </div>
                                                <p data-lang="comment2">
                                                    السعر مرتفع قليلًا
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row suggestions">
                            <h3 class="custom-heading col-sm-12" data-lang="suggestion">اقترحنا لك</h3>
                            <div class="col-lg-3 col-md-4">
                                <div class="card custom-thumbnail">
                                    <div class="overlay">
                                        <button class="btn btn-secondary add-to-cart-btn" data-lang="addPizzaToCart">
                                            إضافة للعربة
                                            <i class="fas fa-cart-plus"></i>
                                        </button>
                                    </div>
                                    <img src="images/pizza-3.png" alt="">
                                    <div class="card-body">
                                        <div class="clearfix">
                                            <h4 class="float-right" data-lang="pizza3">بيتزا دجاج</h4>
                                            <div class="price float-left">
                                                30$
                                            </div>
                                        </div>
                                        <div class="clearfix">
                                            <button class="float-left btn btn-default add-to-cart-btn d-block d-lg-none"
                                                data-lang="addPizzaToCart">
                                                إضافة للعربة
                                                <i class="fas fa-cart-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-4">
                                <div class="card custom-thumbnail">
                                    <div class="overlay">
                                        <button class="btn btn-secondary add-to-cart-btn" data-lang="addPizzaToCart">
                                            إضافة للعربة
                                            <i class="fas fa-cart-plus"></i>
                                        </button>
                                    </div>
                                    <img src="images/pizza-5.png" alt="">
                                    <div class="card-body">
                                        <div class="clearfix">
                                            <h4 class="float-right" data-lang="pizza8">بيتزا سي فود</h4>
                                            <div class="price float-left">
                                                50$
                                            </div>
                                        </div>
                                        <div class="clearfix">
                                            <button class="float-left btn btn-default add-to-cart-btn d-block d-lg-none"
                                                data-lang="addPizzaToCart">
                                                إضافة للعربة
                                                <i class="fas fa-cart-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-4">
                                <div class="card custom-thumbnail">
                                    <div class="sale">50%</div>
                                    <div class="overlay">
                                        <button class="btn btn-secondary add-to-cart-btn" data-lang="addPizzaToCart">
                                            إضافة للعربة
                                            <i class="fas fa-cart-plus"></i>
                                        </button>
                                    </div>
                                    <img src="images/pizza-2.png" alt="">
                                    <div class="card-body">
                                        <div class="clearfix">
                                            <h4 class="float-right" data-lang="pizza7">بيتزا لحوم</h4>
                                            <div class="price float-left">
                                                40$
                                            </div>
                                        </div>
                                        <div class="clearfix">
                                            <button class="float-left btn btn-default add-to-cart-btn d-block d-lg-none"
                                                data-lang="addPizzaToCart">
                                                إضافة للعربة
                                                <i class="fas fa-cart-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-4 d-none d-lg-block">
                                <div class="card custom-thumbnail">
                                    <div class="overlay">
                                        <button class="btn btn-secondary add-to-cart-btn" data-lang="addPizzaToCart">
                                            إضافة للعربة
                                            <i class="fas fa-cart-plus"></i>
                                        </button>
                                    </div>
                                    <img src="images/pizza-7.png" alt="">
                                    <div class="card-body">
                                        <div class="clearfix">
                                            <h4 class="float-right" data-lang="pizza2">بيتزا خضار</h4>
                                            <div class="price float-left">
                                                25$
                                            </div>
                                        </div>
                                        <div class="clearfix">
                                            <button class="float-left btn btn-default add-to-cart-btn d-block d-lg-none"
                                                data-lang="addPizzaToCart">
                                                إضافة للعربة
                                                <i class="fas fa-cart-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="${data.footer.title}">
            <img class="footer-bg" src="images/pizza-footer-bg.png" alt="">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 site-info">
                        <div class="container">
                            <div class="row text-center">
                                <div
                                    class="col-md-3 identity d-flex flex-column align-items-center justify-content-center">
                                    <img src="images/logo-red-white.png" class="w-50" alt="">
                                    <div class="social-links">
                                        <ul class="d-flex align-items-center justify-content-center">
                                            <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                    <p>designed by <span>belal</span></p>
                                </div>
                                <div class="col-md-3 important-links">
                                    <p class="phone-number">704-910-3052</p>
                                    <ul>
                                        <li><a href="#" data-lang="footerLink1">سياسة الخصوصية</a></li>
                                        <li><a href="#" data-lang="footerLink2">إخلاء المسؤولية القانونية</a></li>
                                        <li><a href="#" data-lang="footerLink3">شروط الاستخدام</a></li>
                                        <li><a href="#" data-lang="footerLink4">انضم إلى فريقنا</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-3 working-info">
                                    <h3 data-lang="footerWorkHours">ساعات العمل</h3>
                                    <ul>
                                        <li data-lang="footerDays1">الأحد - الخميس</li>
                                        <li>10:30 AM TO 10:00 PM</li>
                                        <li data-lang="footerDays2">الجمعة - السبت</li>
                                        <li>10:30 AM TO 11:00 PM</li>
                                    </ul>
                                </div>
                                <div class="col-md-3 join-us">
                                    <h3 data-lang="footerSubscribe">اشترك ليصلك كل <span>جديد</span></h3>
                                    <form class="input-group mb-3 needs-validation" novalidate>
                                        <input type="email" class="form-control" data-lang="email"
                                            placeholder="البريد الإلكتروني" aria-label="Recipient's username"
                                            aria-describedby="button-addon2" required>
                                        <button class="btn btn-outline-secondary" type="submit" id="button-addon2"><i
                                                class="fas fa-paper-plane"></i></button>
                                        <div class="invalid-feedback" data-lang="formInvalid">
                                            أدخل عنوان بريدك الإلكتروني أولاً من فضلك
                                        </div>
                                    </form>
                                    <div class="copyright">
                                        <p>© <span id="date"></span> <span>Belal </span>. All Rights Reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 links text-center">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active p-2">
                                <a class="nav-link" href="index.html" data-lang="navHome">الرئيسية</a>
                            </li>
                            <li class="nav-item p-2">
                                <a class="nav-link" href="index.html#menu" data-lang="navMenu">المنيو</a>
                            </li>
                            <li class="nav-item p-2">
                                <a class="nav-link" href="index.html#offers" data-lang="navOffers">العروض</a>
                            </li>
                            <li class="nav-item p-2">
                                <a class="nav-link" href="about.html" data-lang="navAbout">حول المطعم</a>
                            </li>
                            <li class="nav-item p-2">
                                <a class="nav-link" href="contactUs.html" data-lang="navContact">تواصل معنا</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
        `;
    document.body.append(pizzaComponent);
}
