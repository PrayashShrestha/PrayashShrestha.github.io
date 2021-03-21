let table = document.querySelector("table");
// card_body.innerHTML = "";
count = 1;
fetch("https://api.github.com/users/prayashshrestha/repos")
  .then((res) => res.json())
  .then((res) =>
    res.map((item) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${count++}</td>
        <td>${item.name}</td>
        <td>${item.description}</td>
        <td>${item.language}</td>
        <td><a href="${item.html_url}" target="_blank">Visit</a></td>
        `;
      table.append(tr);
    })
  );
