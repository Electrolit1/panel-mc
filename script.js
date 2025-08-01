async function enviar() {
  const cmd = document.getElementById("cmd").value;
  const res = await fetch("http://localhost:3000/cmd", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ command: cmd }),
  });
  const json = await res.json();
  document.getElementById("res").innerText = JSON.stringify(json, null, 2);
}
