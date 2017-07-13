// console.log(customers);
// //customers.array 12 of em
//
// const container = document.querySelector('#container')
// let template = ``
//
// for (var i = 0; i < customers.results.length; i++) {
//       let data = data;
//       console.log(data.name)
//
// const template = `
//   <article>
//   <div class="userImage">
//     <img src="${data.picture.thumbnail}">
//   </div>
//     <h2>${data.name}</h2>
//     <h3>${data.email}</h3>
//           console.log(data.name)
//     <div class="email">
//     </div>
//   </article>
// `;
// }


for (var i = 0; i < customers.results.length; i += 1) {

  let customerID = document.querySelector("#customer")

  let containerChild = document.createElement('div');

  let data = customers.results[i]

  var container = `
    <div class= "bodyMargins">
    <div class= "pic"
    style="
    background: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 250px;
    margin: 10px;
    background-image: url(${data.picture.large});
    "></div>

    <h2 style="text-transform: capitalize;
      font-size: 20px;
      text-decoration: underline solid green;">
      ${data.name.first} ${data.name.last}</h2>

    <h3 style="
    font-weight: lighter;">${data.email}</h3>

    <div style="line-height: 40%;  margin: 15% auto;">
    <p>${data.location.street}</p>
    <p>${data.location.city}, ${data.location.state} ${data.location.postcode} </p>
    <p>${data.phone}</p>
    <h4 style ="
    font-weight: bold">${data.id.name}, ${data.id.value}</h4>
    </div>
    </div>`

  customerID.appendChild(containerChild);
  containerChild.innerHTML = container;
}
