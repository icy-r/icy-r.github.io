let counter = 1;
const content = {};

db = firebase.firestore();

function addInput() {
  const notesFieldset = document.getElementById('notesFieldset');
  const contentTypeSelect = document.getElementById('contentType');
  const selectedContentType = contentTypeSelect.value;

  // Show modal for entering label
  showLabelModal();

  function showLabelModal() {
    const modal = document.getElementById('labelModal');
    modal.style.display = 'block';
  }

  // Set label and create corresponding input on OK button click
  window.setLabel = function (event) {
    const inputValue = document.getElementById('labelInput').value;
    if (inputValue.trim() !== '') {
      const newLabel = document.createElement('label');
      const deletelabelbutton = document.createElement('button');
      deletelabelbutton.innerHTML = 'x';
      deletelabelbutton.setAttribute('class', 'deletebutton');
      // deletelabelbutton.setAttribute('onclick', 'deleteLabel(this)');
      deletelabelbutton.setAttribute('type', 'button')
      deletelabelbutton.setAttribute('id', 'deletebutton-' + counter);
      
      newLabel.for = selectedContentType;
      newLabel.textContent = `${inputValue}:`;

      let newInput;
      if (selectedContentType === 'image') {
        newInput = document.createElement('input');
        newInput.type = 'url';
      } else {
        newInput = document.createElement('textarea');
      }
      newInput.setAttribute('data-type', selectedContentType);

      newInput.name = selectedContentType;
      newInput.id = 'input-' + counter;
      counter++;

      notesFieldset.appendChild(newLabel);
      notesFieldset.appendChild(newInput);
      notesFieldset.appendChild(deletelabelbutton);
      notesFieldset.appendChild(document.createElement('br'));

      // Close the modal
      const modal = document.getElementById('labelModal');
      modal.style.display = 'none';
    } else {
      alert('Please enter a label.');
    }

    // Prevent form submission
    // event.preventDefault();
  }
}
addEventListener('click', function (event) {
  const deleteButtons = document.getElementsByClassName('deletebutton');
  for (let i = 0; i < deleteButtons.length; i++) {
    if (event.target == deleteButtons[i]) {
      const container = deleteButtons[i].parentElement;
      container.remove();
      counter--;
    }
  }
});


const form = document.getElementById('docForm');

form.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('desc').value;

  const contentArray = []; // Use an array to maintain order

  for (let i = 0; i < counter; i++) {
    const input = document.getElementById('input-' + i);
    if (input !== null) {
      const inputName = i + 1; // Start IDs from 1
      const inputValue = input.value;
      const inputType = input.getAttribute('data-type');
      contentArray.push({ id: inputName, value: inputValue, type: inputType });
    }
  }

  const main = {
    userID: 1000,
    title: title,
    description: description,
    totalcont: counter,
    date: new Date(),
  };

  db.collection('bidBase')
    .doc()
    .set({
      content: contentArray,
      main: main,
    })
    .then(() => {
      alert('Document Uploaded');
    })
    .catch((error) => {
      alert('Error: ' + error);
    });

  // Reset form fields
  document.getElementById('title').value = '';
  document.getElementById('desc').value = '';
  for (let i = 0; i < counter; i++) {
    const input = document.getElementById('input-' + i);
    if (input !== null) {
      input.value = '';
    }
  }
});
