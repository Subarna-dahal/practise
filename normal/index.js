function selectItem(itemName, itemPrice) {
  document.getElementById('orderItem').value = itemName;
  document.getElementById('itemQuantity').value = 1;
  document.getElementById('totalCost').innerText = itemPrice;
  document.getElementById('billModal').style.display = 'flex';
}

function calculateTotal() {
  const itemPrice = parseInt(document.getElementById('totalCost').innerText);
  const quantity = parseInt(document.getElementById('itemQuantity').value);
  const totalCost = itemPrice * quantity;
  document.getElementById('totalCost').innerText = totalCost;
}

function showAlert() {
  const itemName = document.getElementById('orderItem').value;
  const quantity = document.getElementById('itemQuantity').value;
  const totalCost = document.getElementById('totalCost').innerText;
  alert(`Item: ${itemName}\nQuantity: ${quantity}\nTotal Cost: ${totalCost}rs`);
}

function closeModal() {
  document.getElementById('billModal').style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == document.getElementById('billModal')) {
      closeModal();
  }
}
