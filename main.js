console.log(customers);
//customers.array 12 of em

const container = document.querySelector('#container')
let template = ``

for (var i = 0; i < customers.results.length; i++) {
      let data = customers.results[i];
      console.log(data.name)

const template = `
  <article>
  <div class="userImage">
    <img src="${data.picture.thumbnail}">
  </div>
    <h2>${data.name}</h2>
    <h3>${data.email}</h3>
          console.log(data.name)
    <div class="email">
    </div>
  </article>
`;
}

// Insert the template onto our page
container.innerHTML = template
