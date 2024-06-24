document.querySelector("form").addEventListener("submit", todoFunction)

function todoFunction() {
  event.preventDefault()
  let task = document.querySelector("#task").value
  let priority = document.querySelector("#priority").value

  let tr = document.createElement("tr")

  let td1 = document.createElement("td")
  td1.innerHTML = task

  let td2 = document.createElement("td")
  td2.innerHTML = priority

  if (priority === "High") {
    td2.style.backgroundColor = "red"
  }
  else {
    td2.style.backgroundColor = "green"
  }

  tr.append(td1, td2)

  document.querySelector("tbody").append(tr)

}