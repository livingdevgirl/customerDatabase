console.log(customers)

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

    <h2>${data.name.first} ${data.name.last}</h2>

    <h3>${data.email}</h3>

    <div class="addressInfo">
    <p>${data.location.street}</p>
    <p>${data.location.city}, ${data.location.state} ${data.location.postcode} </p>
    <p>${data.phone}</p>
    <h4>${data.id.name}, ${data.id.value}</h4>
    </div>
    </div>`

  customerID.appendChild(containerChild);
  containerChild.innerHTML = container;
}
