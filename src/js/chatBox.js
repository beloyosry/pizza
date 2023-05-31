// ChatBox
// MESSAGE INPUT
$(window).on("load", function () {
    var splash = document.getElementById("splash-screen");
    const chatBox = document.createElement("div");
    chatBox.classList.add("chatbox-wrapper");
    chatBox.innerHTML = ` 
        <div class="chatbox-toggle">
            <i class='bx bx-message-dots'></i>
        </div>
        <div class="chatbox-message-wrapper">
            <div class="chatbox-message-header">
                <div class="chatbox-message-profile">
                    <img src="images/logo-red.png" alt="" class="chatbox-message-image">
                    <div>
                        <h4 class="chatbox-message-name">ARAPIZZA BOT</h4>
                        <p class="chatbox-message-status">online</p>
                    </div>
                </div>
                <div class="chatbox-message-dropdown">
                    <i class='bx bx-dots-vertical-rounded chatbox-message-dropdown-toggle'></i>
                    <ul class="chatbox-message-dropdown-menu">
                        <li>
                            <a href="#">Search</a>
                        </li>
                        <li>
                            <a href="#">Report</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="chatbox-message-content">
                <h4 class="chatbox-message-no-message" data-lang="chatBox">سعداء لتواصلكم معنا!</h4>
                <!-- <div class="chatbox-message-item sent">
                    <span class="chatbox-message-item-text">
                        Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Quod, fugiat?
                    </span>
                    <span class="chatbox-message-item-time">08:30</span>
                </div>
                <div class="chatbox-message-item received">
                    <span class="chatbox-message-item-text">
                        Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Quod, fugiat?
                    </span>
                    <span class="chatbox-message-item-time">08:30</span>
                </div> -->
            </div>
            <div class="chatbox-message-bottom">
                <form action="#" class="chatbox-message-form">
                    <textarea rows="1" placeholder="Type message..." class="chatbox-message-input"></textarea>
                    <button type="submit" class="chatbox-message-submit"><i class='bx bx-send'></i></button>
                </form>
            </div>
        </div>
        `;
    document.body.prepend(chatBox);
    splash.insertAdjacentElement("afterend", chatBox);
    if (chatBox) {
        const textarea = document.querySelector(".chatbox-message-input");
        const chatboxForm = document.querySelector(".chatbox-message-form");
    
        textarea.addEventListener("input", function () {
            let line = textarea.value.split("\n").length;
    
            if (textarea.rows < 6 || line < 6) {
                textarea.rows = line;
            }
    
            if (textarea.rows > 1) {
                chatboxForm.style.alignItems = "flex-end";
            } else {
                chatboxForm.style.alignItems = "center";
            }
        });
    
        // TOGGLE CHATBOX
        const chatboxToggle = document.querySelector(".chatbox-toggle");
        const chatboxMessage = document.querySelector(".chatbox-message-wrapper");
    
        chatboxToggle.addEventListener("click", function () {
            chatboxMessage.classList.toggle("show");
        });
    
        // DROPDOWN TOGGLE
        const dropdownToggle = document.querySelector(
            ".chatbox-message-dropdown-toggle"
        );
        const dropdownMenu = document.querySelector(
            ".chatbox-message-dropdown-menu"
        );
    
        dropdownToggle.addEventListener("click", function () {
            dropdownMenu.classList.toggle("show");
        });
    
        document.addEventListener("click", function (e) {
            if (
                !e.target.matches(
                    ".chatbox-message-dropdown, .chatbox-message-dropdown *"
                )
            ) {
                dropdownMenu.classList.remove("show");
            }
        });
    
        // CHATBOX MESSAGE
        const chatboxMessageWrapper = document.querySelector(
            ".chatbox-message-content"
        );
        const chatboxNoMessage = document.querySelector(
            ".chatbox-message-no-message"
        );
    
        chatboxForm.addEventListener("submit", function (e) {
            e.preventDefault();
    
            if (isValid(textarea.value)) {
                writeMessage();
                setTimeout(autoReply, 1000);
            }
        });
    
        function addZero(num) {
            return num < 10 ? "0" + num : num;
        }
    
        function writeMessage() {
            const today = new Date();
            let message = `
                <div class="chatbox-message-item sent">
                    <span class="chatbox-message-item-text">
                        ${textarea.value.trim().replace(/\n/g, "<br>\n")}
                    </span>
                    <span class="chatbox-message-item-time">${addZero(
                        today.getHours()
                    )}:${addZero(today.getMinutes())}</span>
                </div>
            `;
            chatboxMessageWrapper.insertAdjacentHTML("beforeend", message);
            chatboxForm.style.alignItems = "center";
            textarea.rows = 1;
            textarea.focus();
            textarea.value = "";
            chatboxNoMessage.style.display = "none";
            scrollBottom();
        }
    
        function autoReply() {
            const today = new Date();
            let message = `
                <div class="chatbox-message-item received">
                    <span class="chatbox-message-item-text">
                        شكرا لتواصلكم معنا، نحن الآن مشغولون ...سيتم الرد عليكم في أقرب فرصة!
                    </span>
                    <span class="chatbox-message-item-time">${addZero(
                        today.getHours()
                    )}:${addZero(today.getMinutes())}</span>
                </div>
            `;
            chatboxMessageWrapper.insertAdjacentHTML("beforeend", message);
            scrollBottom();
        }
    
        function scrollBottom() {
            chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight);
        }
    
        function isValid(value) {
            let text = value.replace(/\n/g, "");
            text = text.replace(/\s/g, "");
    
            return text.length > 0;
        }
    }
});

