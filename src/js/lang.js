import { createBranchesList } from ".";
export const translations = {
    branchInfo: {
        en: {
            branch1: {
                name: "Nasr City",
                address: "15 Abbas El Akkad Street - Cairo",
            },
            branch2: {
                name: "Heliopolis",
                address: "35, next to Roxy Cinema - Roxy Square - Cairo",
            },
            branch3: {
                name: "Mokattam",
                address:
                    "160 Modern University Street - Al-Adaba Al-Wusta - Mokattam - Cairo",
            },
            branch4: {
                name: "Giza",
                address:
                    "122 Al-Haram Main Street, Al-Kom Al-Akhdar, after Al-Zaeem Theater - Giza",
            },
            branch5: {
                name: "The Gathering",
                address:
                    "Southern 90th Street in front of Tulip Mall Rabat Hotel - Fifth Settlement - Cairo",
            },
        },
        ar: {
            branch1: {
                name: "مدينة نصر",
                address: "15 شارع عباس العقاد - القاهرة ",
            },
            branch2: {
                name: "مصر الجديدة",
                address: "35 بجوار سينما روكسي - ميدان روكسي - القاهرة",
            },
            branch3: {
                name: "المقطم",
                address:
                    "160 شارع الجامعة الحديثة - العضبة الوسطى - المقطم - القاهرة ",
            },
            branch4: {
                name: "الجيزة",
                address:
                    "122 شارع الهـرم الرئيسى الكوم الأخـضـر بعـد مسـرح الزعيـم - الجيزة",
            },
            branch5: {
                name: "التجمع",
                address:
                    "شارع ال 90 الجنوبي أمام فندق تيوليب مول الرباط - لتجمع الخامس - القاهرة",
            },
        },
    },
    en: {
        // chatBox
        chatBox: "We are glad to contact you!",

        // PlaceHolders
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        messagePlaceholder: "Leave a message for us",

        // Navbar
        navHome: "Home",
        navMenu: "Menu",
        navOffers: "Offers",
        navAbout: "About Us",
        navContact: "Contact Us",

        // Hero Section
        heroHeader: "<span>MORE</span> THAN PIZZA",
        heroTitle:
            "We have been with you for more than 10 years, do not hesitate to contact us, we work day and night from For you and we give you our best",
        heroBtn: "The strongest offers",

        // Pizza
        offersTitle: "Offers",
        pizza1: "Margaret's pizza",
        pizza2: "Vegetable pizza",
        pizza3: "Chicken pizza",
        pizza4: "Salami pizza",
        pizza5: "Tuna pizza",
        pizza6: "Pepperoni pizza",
        pizza7: "Meat pizza",
        pizza8: "Seafood pizza",
        pizza9: "Sausage pizza",
        order: "Order",
        menuTitle: "Menu",
        addToCart: "Add to cart",
        size: "size",
        type: "type",
        pan: "pan",
        thin: "thin",

        // footer
        footerLink1: "privacy policy",
        footerLink2: "Legal disclaimer",
        footerLink3: "terms of use",
        footerLink4: "Join our team",
        footerWorkHours: "Work Hours",
        footerDays1: "Sun - Thur",
        footerDays2: "Fri - Sat",
        footerSubscribe: "Subscribe for <span>Latest</span> News",
        formInvalid: "Please Enter A Valid Email",

        // About Page
        aboutTitle: "About Us",
        aboutParagraph:
            "Welcome to ARA<span>PIZZA</span>, the authentic Italian pizzeria in the heart of the wonderful village of Airwell. We are a couple from Munich offering you the most delicious sliced pizza, made with the finest ingredients and in a traditional way. Our story began when we first visited this village in 1975, and we have fallen in love with it ever since. We moved here 23 years ago, and opened our restaurant in 2016. Since then, we've been striving to satisfy our customers with quality pizza and service.",
        clientName1: "Mohammed Hany",
        clientDesc1:
            "Best pizza in town! I love the melted cheese and the crunchy crust. I am a regular customer here",
        clientName2: "Noha Ahmed",
        clientDesc2:
            "I've tried many Italian restaurants in the area, but this is by far the best. The pizza is delicious and the service is fast and friendly. I recommend it to everyone",
        clientName3: "George Josef",
        clientDesc3:
            "I'm from Italy, and I can honestly say that this pizza has a nostalgic feel to my country. It reminds me of the pizza my grandmother used to make. Thank you for this great experience",
        aboutGreetings:
            "We invite you to visit us at our main branch located at 12-Abbas El-Akkad-Nasr City. You can call us at 704-910-3052 or email us <a href='mailto:info@arapizza.com'>info@arapizza.com</a> To book or to order delivery<br><br>Thank you for choosing us ARA<span>PIZZA</span>، We hope to see you soon",
        aboutTeam: "Work Team",
        aboutOwner: "Owner",
        aboutOwnerName: "Mohammed Elsherbiny",
        aboutChief: "Chief",
        aboutChiefName: "Soad Anwar",

        // Contact Us Page
        contactTitle: "Contact Us",
        contactBranches: "Branches",
        contactDelivery: "Delivery Services",
        contactDeliveryPlace1: "Cairo",
        contactDeliveryPlace2: "Giza",
        sendBtn: "Send",
        orderNow: "Order Now",

        // Pizza Page
        pizzaMargret: "Margaret's Pizza",
        pizzaVegetables: "Pizza Vegetables",
        pizzachicken: "Pizza Chicken",
        pizzaDescription1:
            "Pizza Margaret: It is the well-known basic form of the pizza dish, that is, the one that contains a simple tomato sauce flavored with herbs and covered with cheese.",
        pizzaDescription2:
            "Vegetable Pizza: Vegetable pizza is delicious and rich in many benefits, as it contains the best types of vegetables that are beneficial to the body. In addition, it is distinguished by its delicious taste and is loved by every family member, young and old.",
        pizzaDescription3:
            "Chicken Pizza: It consists of fresh grilled chicken with green and red peppers, onions, mozzarella cheese and a special pizza sauce with a delicious mint sauce. It is one of the most delicious types of pizza, as chicken has a large share among food lovers.",
        quantity: "Quantity:",
        total: "Total:",
        addPizzaToCart: "Add To Cart<i class='fas fa-cart-plus fa-lg'></i>",
        comments: "Comments",
        comment1: "Very tasty and delivery in record time",
        comment2: "The price is a little high",
        suggestion: "Suggestions",
        pizzaSize:
            "Size:<br /><div class='product-option active'><label>S<input type='radio' name='size' value='sm' checked></label></div><div class='product-option'><label>M<input type='radio' name='size' value='m'></label></div><div class='product-option'><label>L<input type='radio' name='size' value='l'></label></div>",
        pizzaType:
            "  Pizza Type:<br /><div class='product-option type active'><label>Pan<input type='radio' name='type' value='thin' checked></label></div><div class='product-option type'><label>Thin<input type='radio' name='type' value='classic'></label></div>",
    },
    ar: {
        // chatBox
        chatBox: "سعداء لتواصلكم معنا!",

        // PlaceHolders
        namePlaceholder: "الإسم",
        emailPlaceholder: "البريد الإلكتروني",
        messagePlaceholder: "أترك رسالة لنا",

        // Navbar
        navHome: "الرئيسية",
        navMenu: "المنيو",
        navOffers: "العروض",
        navAbout: "حول المطعم",
        navContact: "تواصل معنا",

        // Hero Section
        heroHeader: "<span>أكثر</span> من مجرد بيتزا",
        heroTitle:
            "مستمرين معكم منذ أكثر من 10 سنين، لا تترددوا بالتواصل معنا نعمل ليلًا نهارًا من أجلكم ونقدم لكم أفضل ما لدينا",
        heroBtn: "أقوى عروض",

        //Pizza
        offersTitle: "العروض",
        pizza1: "بيتزا مارجريت",
        pizza2: "بيتزا الخضار",
        pizza3: "بيتزا الدجاج",
        pizza4: "بيتزا سلامي",
        pizza5: "بيتزا تونة",
        pizza6: "بيتزا ببروني",
        pizza7: "بيتزا لحوم",
        pizza8: "بيتزا سي فود",
        pizza9: "بيتزا سوسيس",
        order: "أطلب",
        menuTitle: "المنيو",
        addToCart: "إضافة",
        size: "الحجم",
        type: "نوع العجينة",
        pan: "بان",
        thin: "نحيفة",

        // footer
        footerLink1: "سياسة الخصوصية",
        footerLink2: "إخلاء المسؤولية القانونية",
        footerLink3: "شروط الاستخدام",
        footerLink4: "انضم إلى فريقنا",
        footerWorkHours: "ساعات العمل",
        footerDays1: "الأحد - الخميس",
        footerDays2: "الجمعة - السبت",
        footerSubscribe: "اشترك ليصلك كل <span>جديد</span>",
        formInvalid: " أدخل عنوان بريدك الإلكتروني أولاً من فضلك",

        // About Page
        aboutTitle: "عن المطعم",
        aboutParagraph:
            "مرحبًا بكم في ARAPIZZA ، مطعم البيتزا الإيطالي الأصيل في قلب قرية أيرويل الرائعة. نحن زوجان من ميونخ نقدم لكم أشهى وأطيب البيتزا بالشرائح، المصنوعة من أجود المكونات وبطريقة تقليدية. بدأت قصتنا عندما زرنا هذه القرية لأول مرة في عام 1975، ووقعنا في حبها منذ ذلك الحين. انتقلنا إلى هنا قبل 23 عامًا، وافتتحنا مطعمنا في عام 2016. منذ ذلك الحين، نسعى جاهدين لإرضاء عملائنا بجودة البيتزا والخدمة.",
        clientName1: "محمد هاني",
        clientDesc1:
            "أفضل بيتزا في المدينة! أحب الجبنة المذابة والقشرة المقرمشة. أنا زبون دائم هنا",
        clientName2: "نهى أحمد",
        clientDesc2:
            "لقد جربت العديد من المطاعم الإيطالية في المنطقة، ولكن هذه هي الأفضل بلا شك. البيتزا لذيذة والخدمة سريعة وودودة. أوصي به للجميع",
        clientName3: "جورج يوسف",
        clientDesc3:
            "    أنا من إيطاليا، وأستطيع أن أقول بكل صدق أن هذه البيتزا تشعرني بالحنين إلى بلدي. إنها تذكرني بالبيتزا التي كانت تصنعها جدتي. شكرًا لكم على هذه التجربة الرائعة",

        aboutGreetings:
            " ندعوكم لزيارتنا في فرعنا الرئيسي الموجود في 12-عباس العقاد-مدينة نصر . يمكنكم الإتصال بنا على 704-910-3052 أو مراسلتنا عبر البريد الإلكتروني <a href='mailto:info@arapizza.com'>info@arapizza.com</a> للحجز أو لطلب التوصيل<br><br>شكرا لكم على إختياركم ARA<span>PIZZA</span>، ونأمل أن نراكم قريباً",
        aboutTeam: "فريق العمل",
        aboutOwner: "المالك",
        aboutOwnerName: "محمد الشربيني",
        aboutChief: "الشيف",
        aboutChiefName: "سعاد أنور",

        // Contact Us Page
        contactTitle: "تواصل معنا",
        contactBranches: "الفروع",
        contactDelivery: "أماكن التوصيل",
        contactDeliveryPlace1: "القاهرة",
        contactDeliveryPlace2: "الجيزة",
        sendBtn: "أرسل",
        orderNow: "أطلب الآن",

        // Pizza Page
        pizzaDescription1:
            " بيتزا مارجريت: هي الشكل الأساسي المعروف لطبق البيتزا، أي تلك التي تحتوي على صلصة بندورة بسيطة منكَّهة بالأعشاب ومغطّاة بالجبنة، وقد سُمّيت بهذا الاسم نسبةً إلى الملكة مارجريتا؛ حيث ابتكر الطاهي روفائيل اسبوزيتو هذا الطبق بمناسبة قدوم الملكة مارجريتا إلى مدينة نابولي.",
        pizzaDescription2:
            "بيتزا الخضار: بيتزا الخضار شهية وغنية بالفوائد الكثيرة كونها تحتوي على أفضل أنواع الخضراوات المفيدة للجسم، علاوة على ذلك تتميز بطعمها الشهي ويتفق على حبها كل صغير وكبير من أفراد العائلة.",
        pizzaDescription3:
            "بيتزا الدجاج: مكونة من دجاج طازج مشوي مع الفلفل الأخضر و الأحمر ،البصل ،جبنة الموتزاريلا وصلصة البيتزا المميزة مع صلصة النعناع الشهية ,تعد من أشهى أنواع البيتزا حيث أن الدجاج له نصيب كبير بين محبي الطعام.",
        quantity: "العدد المطلوب:",
        total: "الإجمالي:",
        addPizzaToCart:
            "إضافة لعربة الشراء<i class='fas fa-cart-plus fa-lg'></i>",

        comments: "التعليقات على المُنتج",
        comment1: "لذيذ جدا و التوصيل في وقت قياسي",
        comment2: "السعر مرتفع قليلًا",
        suggestion: "اقترحنا لك",
        pizzaSize:
            "الحجم:<br /><div class='product-option active'><label>S<input type='radio' name='size' value='sm' checked></label></div><div class='product-option'><label>M<input type='radio' name='size' value='m'></label></div><div class='product-option'><label>L<input type='radio' name='size' value='l'></label></div>",
        pizzaType:
            "  نوع العجينة:<br /><div class='product-option type active'><label>نحيفة<input type='radio' name='type' value='thin' checked></label></div><div class='product-option type'><label>سميكة<input type='radio' name='type' value='classic'></label></div>",
    },
};
export var currentLang = "ar";
let langSelector;
document.addEventListener("DOMContentLoaded", () => {
    langSelector = document.querySelector(".lang");
    if (langSelector) {
        langSelector.addEventListener("click", (e) => {
            e.preventDefault();
            if (currentLang === "en") {
                currentLang = "ar";
                langSelector.textContent = "العربية";
                console.log(currentLang);
            } else {
                currentLang = "en";
                langSelector.textContent = "English";
                console.log(currentLang);
            }

            setLang(currentLang);
            localStorage.setItem("lang", currentLang);
        });
        const language = localStorage.getItem("lang");
        console.log(language);
        setLang(language);
    }
});

const setLang = (lang) => {
    currentLang = lang;
    if (langSelector) {
        langSelector.textContent = lang === "en" ? "العربية" : "English";
        const elements = document.querySelectorAll("[data-lang]");
        elements.forEach((element) => {
            const translationKey = element.getAttribute("data-lang");
            element.innerHTML = translations[lang][translationKey];
        });
        document.dir = lang === "ar" ? "rtl" : "ltr";
        changeLang(lang);
        document.body.setAttribute("dir", document.dir);
        $(document).ready(function () {
            if (document.body.getAttribute("dir") === "ltr") {
                $("#form-product-selection").on("submit", function () {
                    alert("Added To Cart");
                });
                // $(".add-to-cart-btn").on("click", function () {
                //     alert("Added To Cart");
                // });
                $(".card-body").css({ left: "5%" });
                $("input").css({ textAlign: "left" });
                $(".input-group").css({ direction: "rtl" });
                // $(".box-dir").css({ direction: "rtl" });
                // $("section.license ul.timeline li .timebox::after ").css({
                //     borderRight: "2px solid #f4f4f5",
                //     borderTop: "2px solid #f4f4f5",
                //     right: "-10px",
                // });
                // $("section.license ul.timeline li .timebox h4 span ").css({
                //     marginRight: "25px",
                //     marginLeft: "0",
                // });
                // $(".carousel-caption").css({ left: "0" });
                // $(".carousel-caption .rounded-circle").css({
                //     transform: " translate(-50%, -50%)",
                // });
                // $("section.contacts .overlay .contact-info ul.contact-us li i").css(
                //     { marginRight: "5px" }
                // );
                // $(
                //     "section.contacts .overlay .contact-info .contact-form button"
                // ).css({ marginLeft: "15px", marginRight: "0px" });
                // $("input[data-lang='inputName']").attr("placeholder", "Name");
                // $("input[data-lang='email']").attr("placeholder", "Email");
                // $("textarea[data-lang='message']").attr("placeholder", "Message");
                // $(
                //     "section.contacts .overlay .contact-info .contact-form input, section.contacts .overlay .contact-info .contact-form textarea"
                // ).css({ textAlign: "left" });
            } else if (document.body.getAttribute("dir") === "rtl") {
                $("#form-product-selection").on("submit", function () {
                    alert("أضيف المُنتج إلى عربة الشراء");
                });
                // $(".add-to-cart-btn").on("click", function () {
                //     alert("أضيف المُنتج إلى عربة الشراء");
                // });
                $(".card-body").css({ left: "-5%" });
                $("input").css({ textAlign: "right" });
                $(".input-group").css({ direction: "rtl" });
                // $(".box-dir").css({ direction: "ltr" });
                // $("section.license ul.timeline li .timebox").after().css({
                //     borderLeft: "2px solid #f4f4f5",
                //     borderBottom: "2px solid #f4f4f5",
                //     left: "-10px",
                // });
                // $("section.license ul.timeline li .timebox h4 span ").css({
                //     marginRight: "0",
                //     marginLeft: "25px",
                // });
                // $(
                //     "section.license ul.timeline li:nth-child(even) .timebox h4 span "
                // ).css({
                //     marginRight: "25px",
                //     marginLeft: "0",
                // });
                // $(".carousel-caption").css({ left: "15%" });
                // $(".carousel-caption .rounded-circle").css({
                //     transform: " translate(50%, -50%)",
                // });
                // $("section.contacts .overlay .contact-info ul.contact-us li i").css(
                //     { marginLeft: "5px" }
                // );
                // $(
                //     "section.contacts .overlay .contact-info .contact-form button"
                // ).css({ marginLeft: "0px", marginRight: "15px" });
                // $("input[data-lang='inputName']").attr("placeholder", "الإسم");
                // $("input[data-lang='email']").attr(
                //     "placeholder",
                //     "البريد الإلكتروني"
                // );
                // $("textarea[data-lang='message']").attr(
                //     "placeholder",
                //     "نص الرسالة أو تفاصيل المشروع"
                // );
                // $(
                //     "section.contacts .overlay .contact-info .contact-form input, section.contacts .overlay .contact-info .contact-form textarea"
                // ).css({ textAlign: "right" });
            }
        });

        // Update placeholders
        var text = document.querySelector("input[type='text']");
        var email = document.querySelectorAll("input[type='email']");
        var textArea = document.querySelector(".message-textarea");
        if (email != "undefined" && email != null) {
            const emailInputs = document.querySelectorAll(
                "input[type='email']"
            );
            emailInputs.forEach((emailInput) => {
                emailInput.setAttribute(
                    "placeholder",
                    translations[lang].emailPlaceholder
                );
            });
            // Update text direction
            const inputs = document.querySelectorAll("input, textarea");
            inputs.forEach((input) => {
                input.style.setProperty(
                    "--placeholder-dir",
                    lang === "ar" ? "rtl" : "ltr"
                );
            });
        }
        if (
            text != "undefined" &&
            text != null &&
            email != "undefined" &&
            email != null &&
            textArea != "undefined" &&
            textArea != null
        ) {
            const nameInput = document.querySelector("input[type='text']");
            const emailInputs = document.querySelectorAll(
                "input[type='email']"
            );
            const messageTextarea = document.querySelector(".message-textarea");
            nameInput.setAttribute(
                "placeholder",
                translations[lang].namePlaceholder
            );
            emailInputs.forEach((emailInput) => {
                emailInput.setAttribute(
                    "placeholder",
                    translations[lang].emailPlaceholder
                );
            });
            messageTextarea.setAttribute(
                "placeholder",
                translations[lang].messagePlaceholder
            );
            // Update text direction
            const inputs = document.querySelectorAll("input, textarea");
            inputs.forEach((input) => {
                input.style.setProperty(
                    "--placeholder-dir",
                    lang === "ar" ? "rtl" : "ltr"
                );
            });
        }
        if ($("#branches").length > 0) {
            createBranchesList();
            // Update branch name and address
            const activeItem = document.querySelector(".location-item.active");
            if (activeItem) {
                const branchKey = activeItem
                    .querySelector(".location-link")
                    .getAttribute("data-branch-key");
                const name = document.getElementById("branch-name");
                const address = document.getElementById("branch-address");
                name.innerHTML =
                    translations.branchInfo[currentLang][branchKey].name;
                address.innerHTML =
                    translations.branchInfo[currentLang][branchKey].address;
            }
        }
    }
};

function changeLang(lang) {
    document.documentElement.lang = lang;
}
