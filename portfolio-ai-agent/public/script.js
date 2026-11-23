async function send() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  const message = input.value;

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  });

  const data = await res.json();

  chat.textContent += "\nYou: " + message;
  chat.textContent += "\nAI: " + data.reply + "\n";

  input.value = "";
}