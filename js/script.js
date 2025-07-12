function addMessage() {
    const input = document.getElementById("guestInput");
    const messageText = input.value.trim();

    if (messageText) {
      const messagesDiv = document.getElementById("guestMessages");

      // 새 메시지 생성
      const newMessage = document.createElement("div");
      newMessage.className = "guest-message";
      newMessage.innerText = messageText;

      // 메시지 추가
      messagesDiv.prepend(newMessage);

      // 입력칸 초기화
      input.value = "";
    }
  }