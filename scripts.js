// FAQ toggle logic
var faq = document.getElementsByClassName("faq-box-question");
for (let i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var body = this.nextElementSibling;
        if (body.style.maxHeight === "100px") {
            body.style.maxHeight = "0px";
        } else {
            body.style.maxHeight = "100px";
        }
    });
}

// Navbar scroll background toggle logic
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


const messages = [
    {
      text: "Hi there! whats the update work i gave you?",
      side: "left",
      name: "Alice",
      profile: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      text: "Sending your work over now",
      side: "right",
      name: "Zerocoded",
      profile: "./assets/my picture.png"
    },
    {
      text: "ok, thanks!",
      side: "left",
      name: "Alice",
      profile: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      text: "here is the link to download your work",
      side: "right",
      name: "Zerocoded",
      profile: "./assets/my picture.png"
    },
    {
      text: "wow i love this i will refer you to all my friends",
      side: "left",
      name: "Alice",
      profile: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      text: "thanks alot",
      side: "right",
      name: "Zerocoded",
      profile: "./assets/my picture.png"
    }
  ];
  
  let index = 0;
  const container = document.getElementById("chatContainer");
  
  function showMessage() {
    if (index >= messages.length) {
      // Wait 60 seconds before restarting
      setTimeout(() => {
        container.innerHTML = "";
        index = 0;
        showMessage(); // Start again
      }, 60000); // 60000 ms = 1 minute
      return;
    }
  
    const msg = messages[index];
  
    const messageDiv = document.createElement("div");
    messageDiv.className = `chat-message chat-${msg.side}`;
  
    const img = document.createElement("img");
    img.src = msg.profile;
    img.alt = msg.name;
    img.className = "profile-pic";
  
    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
  
    const nameEl = document.createElement("div");
    nameEl.className = "sender-name";
    nameEl.textContent = msg.name;
  
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble";
    bubble.textContent = msg.text;
  
    contentDiv.appendChild(nameEl);
    contentDiv.appendChild(bubble);
    messageDiv.appendChild(img);
    messageDiv.appendChild(contentDiv);
  
    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
  
    index++;
    setTimeout(showMessage, 2000); // Show next message in 2 seconds
  }
  
  // Start loop
  showMessage();
  