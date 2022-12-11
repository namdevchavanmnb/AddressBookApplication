window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".contact-count").textContent = contactList.length;
    createInnerHtml();
  });
  
  const createInnerHtml = () => {
    if (contactList.length == 0) {
      return;
    }
    const headerHtml = `<tr>
      <th>Full Name</th>
      <th>Address</th>
      <th>City</th>
      <th>State</th>
      <th>Zip Code</th>
      <th>Phone Number</th>
      </tr>`;
    let innerHtml = `${headerHtml}`;
    for (let contact of contactList) {
      innerHtml = `${innerHtml} 
          <tr>
          <td>${contact._name}</td>
          <td>${contact._address}</td>
          <td>${contact._city}</td>
          <td>${contact._state}</td>
          <td>${contact._zip}</td>
          <td>${contact._phoneNumber}</td>
          <td>
              <img src="../assets/icons/delete.svg" alt="delete" id="${contact._id}" onclick="remove(this)">
              <img src="../assets/icons/edit.svg" alt="update" id="${contact._id}" onclick="update(this)">
          </td>
          </tr>`;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
  };
  
  let contactList = [
    {
      _id: 1,
      _name: "Namdev",
      _phoneNumber: "91 9604411890",
      _address: "Near Forest Office ",
      _city: "Nanded",
      _state: "Maharashtra",
      _zip: "431715",
    },
    {
      _id: 2,
      _name: "Dipak Indarale",
      _phoneNumber: "91 9604455665",
      _address: "Dimonad Nagar",
      _city: "Nanded",
      _state: "Maharastra",
      _zip: "457684",
    },
  ];