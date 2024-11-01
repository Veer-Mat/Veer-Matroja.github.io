function saveData() {
  
      // get data
      const name = document.getElementById("name").value;
      const email = document.getElementById("Email").value;
      const satisfaction = document.querySelector('input[name="lvl"]:checked')?.value;
      const role = document.querySelector('select[name="Role"]').value;
      const feedback = document.querySelector('textarea[name="message"]').value;
  
      // Get data for checked boxes
      const checklist = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map((checkbox) => checkbox.nextSibling.nodeValue);
  
      // store the data in localstorage
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("satisfaction", satisfaction);
      localStorage.setItem("role", role);
      localStorage.setItem("feedback", feedback);
      localStorage.setItem("checklist", JSON.stringify(checklist));
  
      // notify the user the data has been stored locally
      alert("data has been saved locally");

  }