// console.log(customers);
// //customers.array 12 of em
//
// const container = document.querySelector('#container')
// let template = ``
//
// for (var i = 0; i < customers.results.length; i++) {
//       let data = customers.results[i];
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


  var container = `
    <div class= "bodyMargins">
    <div class= "pic"
    style="
    background: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 250px;
    margin: 10px;
    background-image: url(${customers.results[i].picture.large});
    "></div>

    <h2 style="text-transform: capitalize;
      font-size: 20px;
      text-decoration: underline solid green;">
      ${customers.results[i].name.first} ${customers.results[i].name.last}</h2>

    <h3 style="
    font-weight: lighter;">${customers.results[i].email}</h3>

    <div style="line-height: 40%;  margin: 15% auto;">
    <p>${customers.results[i].location.street}</p>
    <p>${customers.results[i].location.city}, ${customers.results[i].location.state} ${customers.results[i].location.postcode} </p>
    <p>${customers.results[i].phone}</p>
    </div>
    </div>`

  customerID.appendChild(containerChild);
  containerChild.innerHTML = container;
}
