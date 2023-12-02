// JavaScript for dynamic and accessible form
document
  .getElementById("formField")
  .addEventListener("keyup", function (event) {
    var target = event.target;
    if (target.tagName.toLowerCase() === "textarea") {
      target.rows = target.value.split("\n").length;
    }
  });


function removeError() {
  var errorSpan = document.getElementById('validateFormerror');
  if (errorSpan && errorSpan.textContent.trim() !== "") {
    setTimeout(function() {
      errorSpan.parentNode.removeChild(errorSpan);
    }, 5000); // 5000 milliseconds = 5 seconds
  }
}


const title = document.getElementById("title").value;
const desc = document.getElementById("desc").value;
let module = document.getElementById("module").value;
let remarks = document.getElementById("remarks").value;

// make uppercase and only get text without spaces
module = module.toUpperCase().replace(/\s/g, "");
// function validateForm() {
// if (title == "" || desc == "" || module == "" || remarks == "") {
// alert("Please fill in the whole form");
// return false;
// }
// }

function validateForm(forms) {
  for (let form of forms) {
    var textareas = form.getElementsByTagName("textarea");
    for (var i = 0; i < textareas.length; i++) {
      if (textareas[i].value == "") {
        // alert("Please fill in the whole form");
        document.getElementById("validateFormerror").innerHTML =
          "Please fill in the whole form! or remove unnecessary fields.";
        removeError();
        return false;
      }
    }

    const title = form.getElementById("title").value;
    const desc = form.getElementById("desc").value;
    const module = form.getElementById("module").value;
    const remarks = form.getElementById("remarks").value;
    if (title == "" || desc == "" || module == "" || remarks == "") {
      // alert("Please fill in the whole form");
      document.getElementById("validateFormerror").innerHTML =
        "Please fill in the whole form!";
      removeError();
      return false;
    }
  }
  return true;
}



function createUniqueIds(formField) {
  var forms = formField.getElementsByTagName("form");
  for (j = 0; j < forms.length; j++) {
    var inputs = forms[j].getElementsByTagName("textarea");
    var labels = forms[j].getElementsByTagName("label");
    for (k = 0; k < inputs.length; k++) {
      inputs[k].id = inputs[k].name + j;
      labels[k].setAttribute("for", inputs[k].name + j);
      labels[k].innerHTML = inputs[k].name + (j + 1);
    }
  }
}

function showDelete() {
  var forms = document.getElementById("formField").getElementsByTagName("form");
  for (var i of forms) {
    var rowEnds = i.getElementsByClassName("rowEnd");
    if (forms.length > 1) {
      for (var j of rowEnds) {
        j.style.display = "block";
      }
    } else {
      rowEnds[rowEnds.length - 1].style.display = "none";
    }
  }
}

function addForm() {
  
  var lastForm = document.getElementById("formField").lastElementChild;
  
    var forms = document
      .getElementById("formField")
      .getElementsByTagName("form");
    var formCopy = forms[0].cloneNode(true);
    var inputs = formCopy.getElementsByTagName("textarea");
    for (i of inputs) {
      i.value = "";
    }
    document.getElementById("formField").appendChild(formCopy);
    showDelete();
    createUniqueIds(document.getElementById("formField"));
    console.log(forms.length);
  
}

function deleteForm(inputParent) {
  var forms = document.getElementById("formField").getElementsByTagName("form");
  if (forms.length > 1) {
    inputParent.parentElement.remove();
  }
  showDelete();
  createUniqueIds(document.getElementById("formField"));
}

function saveData() {
  const db = firebase.firestore();
  // const muid = getcookie("muid");
  const muid = "1234";
  // Find all forms from the form field
  var forms = document.getElementById("formField").getElementsByTagName("form");
  var notes = [];
  for (var i = 0; i < forms.length; i++) {
    // Find all inputs inside a single form field
    var inputs = forms[i].getElementsByTagName("textarea");
    // Browse through all the inputs
    for (var j = 0; j < inputs.length; j++) {
      // Check input's value is not empty
      if (inputs[j].value !== "") {
        // Save data
        notes.push({
          id: inputs[j].name,
          value: inputs[j].value,
          type: inputs[j].type,
        });
      }
    }
  }

  const main = {
    title: title,
    desc: desc,
    module: module,
    remarks: remarks,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    muid: muid,
    totalNotes: notes.length,
  };
  if (validateForm(forms) !== false) {
    db.collection("bidBase")
      .doc()
      .set({
        notes: notes,
        main: main,
      })
      .then(() => {
        alert("Document Uploaded");
        //refresh the page
        window.location.reload();
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  }
}
/*
            function saveData() {
                //   Find all forms from the form field 
                var forms = document.getElementById("formField").getElementsByTagName("form");
                console.log(forms);
                var participants = [];
                for (i = 0; i < forms.length; i++) {
                    //  /* Find all inputs inside a single form field 
                    participants[i] = [];
                    var inputs = forms[i].getElementsByTagName("textarea");
                    console.log(inputs);
                    //  /* Browse through all the inputs 
                    for (j = 0; j < inputs.length; j++) {
                        //  /* Check input's type is text & it's not empty 
                        if (inputs[j].type.toLowerCase() == "text" && inputs[j].value !== "") {
                            //  /* Save data 
                            participants[i].push(inputs[j].value);
                        }
                    }
                }
                // showArray("savedData", participants);
            }
        */
function showArray(id, array) {
  var showResult = document.getElementById(id);
  showResult.style.display = "block";
  showResult.innerHTML = "The data user has saved looks like this:";
  for (i of array) {
    showResult.innerHTML += "<br>";
    for (j of i) {
      showResult.innerHTML += j + " ";
    }
  }
}
