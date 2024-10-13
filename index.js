const downloadButton = document.getElementById("download-button");
const inputFields = document.querySelectorAll("input"); // Select all input fields
const textAreaFields = document.querySelectorAll("textarea");
const clearImageButton = document.getElementById("clear-image-button");

inputFields.forEach((inputField) => {
  inputField.addEventListener("input", updateIframeContent);
});
textAreaFields.forEach((textAreaField) => {
  textAreaField.addEventListener("input", updateIframeContent);
});

clearImageButton.addEventListener("click", function () {
  // Clear the input field and the image preview
  const profileImageInput = document.getElementById("profile-image");
  profileImageInput.value = ""; // Clear the input field
  updateIframeContent();
});

function updateIframeContent() {
  // Retrieve user input from the input fields
  const resumeData = {
    profileImage: document.getElementById("profile-image").files[0],
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    summary: document.getElementById("summary").value,
    school: document.getElementById("school").value,
    degree: document.getElementById("degree").value,
    major: document.getElementById("major").value,
    graduationDate: document.getElementById("graduation-date").value,
    company: document.getElementById("company").value,
    title: document.getElementById("title").value,
    startDate: document.getElementById("start-date").value,
    endDate: document.getElementById("end-date").value,
    skill1: document.getElementById("skill-1").value,
    skill2: document.getElementById("skill-2").value,
    skill3: document.getElementById("skill-3").value,
    reference1: document.getElementById("reference-1").value,
    reference2: document.getElementById("reference-2").value,
    reference3: document.getElementById("reference-3").value,
    addButton:document.querySelector('.js-add-todo-button'),
  };

  // Check if any of the input fields or text areas have non-empty values
  const isNotEmpty = Object.values(resumeData).some((value) => value.trim() !== "");

  // Get the iframe element
  const iframe = document.querySelector("iframe");
  const iframeDocument =
    iframe.contentDocument || iframe.contentWindow.document;
  const iframeBody = iframeDocument.body;

  // Create an object URL for the profileImage
  const profileImageURL = resumeData.profileImage
    ? URL.createObjectURL(resumeData.profileImage)
    : "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg";

  if (isNotEmpty) {
    // Replace the content of the iframe with the user's data
    iframeBody.innerHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resume</title>
        <style>
          body {
            background-color: #fff;
            font-family: sans-serif;
          }

          h1 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          ul {
            list-style-type: none;
            padding: 0;
          }

          li {
            margin-bottom: 10px;
          }

          .personalInfo {
            display: flex;
            align-items: center; /* Vertically center the content */
          }

          .personalInfo img {
            width: 200px; /* Set the maximum width of the image */
            height: 200px;
            margin-right: 20px; /* Add some spacing between the image and text */
            border-radius: 50%; /* Make the image round */
          }

          .personalInfo h1 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .personalInfo ul {
            list-style-type: none;
            padding: 0;
          }

          .personalInfo li {
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <div class="personalInfo">
        <img src="${profileImageURL}" alt=" "/>
        <ul>
          <li><h1>${resumeData.name}</h1></li>
          <li>Email: ${resumeData.email}</li>
          <li>Phone: ${resumeData.phone}</li>
          <li>Address: ${resumeData.address}</li>
        </ul>
        </div>
        <h2>Summary</h2>
        <ul>
          <li>${resumeData.summary}</li>
        </ul>
        <h2>Education</h 2>
        <ul>
          <li>School: ${resumeData.school}</li>
          <li>Degree: ${resumeData.degree}</li>
          <li>Major: ${resumeData.major}</li>
          <li>Graduation Date: ${resumeData.graduationDate}</li>
        </ul>
        <h2>Work Experience</h2>
        <ul>
          <li>Company: ${resumeData.company}</li>
          <li>Title: ${resumeData.title}</li>
          <li>Start Date: ${resumeData.startDate}</li>
          <li>End Date: ${resumeData.endDate}</li>
        </ul>
        <h2>Skills</h2>
        <ul>
          <li>${resumeData.skill1}</li>
          <li>${resumeData.skill2}</li>
          <li>${resumeData.skill3}</li>
        </ul>
        <h2>References</h2>
        <ul>
          <li>${resumeData.reference1}</li>
          <li>${resumeData.reference2}</li>
          <li>${resumeData.reference3}</li>
        </ul>
      </body>
      </html>
    `;
  } else {
    // Show a message or take appropriate action when all fields are empty
    iframeBody.innerHTML = "<p>No data entered.</p>";
  }
}


downloadButton.addEventListener("click", () => {
  // Retrieve user input from the main HTML page
  const resumeData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    summary: document.getElementById("summary").value,
    school: document.getElementById("school").value,
    degree: document.getElementById("degree").value,
    major: document.getElementById("major").value,
    graduationDate: document.getElementById("graduation-date").value,
    company: document.getElementById("company").value,
    title: document.getElementById("title").value,
    startDate: document.getElementById("start-date").value,
    endDate: document.getElementById("end-date").value,
    skill1: document.getElementById("skill-1").value,
    skill2: document.getElementById("skill-2").value,
    skill3: document.getElementById("skill-3").value,
    reference1: document.getElementById("reference-1").value,
    reference2: document.getElementById("reference-2").value,
    reference3: document.getElementById("reference-3").value,
  };

  // Check if any of the input fields or text areas have non-empty values
  const isNotEmpty = Object.values(resumeData).some((value) => value.trim() !== "");

  if (isNotEmpty) {
    // Populate the iframe with the user data and generate the PDF
    const iframe = document.querySelector("iframe");
    const iframeDocument =
      iframe.contentDocument || iframe.contentWindow.document;
    const iframeBody = iframeDocument.body;

    // Create an object URL for the profileImage
    const profileImageURL = resumeData.profileImage
      ? URL.createObjectURL(resumeData.profileImage)
      : "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg";

    iframeBody.innerHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resume</title>
        <style>
          body {
            background-color: #fff;
            font-family: sans-serif;
          }

          h1 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          ul {
            list-style-type: none;
            padding: 0;
          }

          li {
            margin-bottom: 10px;
          }

          .personalInfo {
            display: flex;
            align-items: center; /* Vertically center the content */
          }

          .personalInfo img {
            width: 200px; /* Set the maximum width of the image */
            height: 200px;
            margin-right: 20px; /* Add some spacing between the image and text */
            border-radius: 50%; /* Make the image round */
          }

          .personalInfo h1 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .personalInfo ul {
            list-style-type: none;
            padding: 0;
          }

          .personalInfo li {
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <div class="personalInfo">
        <img src="${profileImageURL}" alt=" "/>
        <ul>
          <li><h1>${resumeData.name}</h 1></li>
          <li>Email: ${resumeData.email}</li>
          <li>Phone: ${resumeData.phone}</li>
          <li>Address: ${resumeData.address}</li>
        </ul>
        </div>
        <h2>Summary</h2>
        <ul>
          <li>${resumeData.summary}</li>
        </ul>
        <h2>Education</h2>
        <ul>
          <li>School: ${resumeData.school}</li>
          <li>Degree: ${resumeData.degree}</li>
          <li>Major: ${resumeData.major}</li>
          <li>Graduation Date: ${resumeData.graduationDate}</li>
        </ul>
        <h2>Work Experience</h2>
        <ul>
          <li>Company: ${resumeData.company}</li>
          <li>Title: ${resumeData.title}</li>
          <li>Start Date: ${resumeData.startDate}</li>
          <li>End Date: ${resumeData.endDate}</li>
        </ul>
        <h2>Skills</h2>
        <ul>
          <li>${resumeData.skill1}</li>
          <li>${resumeData.skill2}</li>
          <li>${resumeData.skill3}</li>
        </ul>
        <h2>References</h2>
        <ul>
          <li>${resumeData.reference1}</li>
          <li>${resumeData.reference2}</li>
          <li>${resumeData.reference3}</li>
        </ul>
      </body>
      </html>
    `;

    // Generate PDF from the updated iframe content
    html2pdf(iframeBody, {
      margin: 10,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    }).then(function (pdf) {
      pdf.save("resume.pdf");
    });
  } else {
    // Show a message or take appropriate action when all fields are empty
    alert("Please enter some data before generating the resume.");
  }
});

function addEducation() {
  const school = document.getElementById('school').value;
  const degree = document.getElementById('degree').value;
  const major = document.getElementById('major').value;
  const graduationDate = document.getElementById('graduation-date').value;

  const educationList = document.getElementById('education-list');

  const listItem = document.createElement('div');
  listItem.innerHTML = `
    <div>
    <input id="school" value="" type="text" name="school" placeholder="School">
     <input id="degree" value="" type="text" name="degree" placeholder="Degree">
      <input id="major" value="" type="text" name="major" placeholder="Major">
      <input id="graduation-date" value="" type="text" name="graduation-date" placeholder="Graduation Date">
     </div>
      <button onclick="editEducation(this)">
       <i class="fa-light fa-pen-to-square fa-lg" style="color: #0a0a0a;"></i>
      </button>
      <button onclick="deleteEducation(this)">
       <i class="fa-thin fa-trash fa-lg" style="color: #0d0d0d;"></i>
      </button>
    
  `;

  educationList.appendChild(listItem);

  // Clear the input fields after adding
  document.getElementById('school').value = '';
  document.getElementById('degree').value = '';
  document.getElementById('major').value = '';
  document.getElementById('graduation-date').value = '';
}

function editEducation(button) {
  const listItem = button.parentElement;
  const fields = listItem.innerText.split(',');
  document.getElementById('school').value = fields[0];
  document.getElementById('degree').value = fields[1];
  document.getElementById('major').value = fields[2];
  document.getElementById('graduation-date').value = fields[3].replace(' Edit Delete', '');

  listItem.remove();
}

function deleteEducation(button) {
  button.parentElement.remove();
}

// Repeat similar corrections for addWorkExperience, addSkill, and addReference:

function addWorkExperience() {
  const company = document.getElementById('company').value;
  const title = document.getElementById('title').value;
  const startDate = document.getElementById('start-date').value;
  const endDate = document.getElementById('end-date').value;

  const workExperienceList = document.getElementById('work-experience-list');

  const listItem = document.createElement('div');
  listItem.innerHTML = `
    <div>
     <input id="company" value="" type="text" name="company" placeholder="Company">
      <input id="title" value="" type="text" name="title" placeholder="Title">
      <input id="start-date" value="" type="text" name="start-date" placeholder="Start Date">
      <input id="end-date" value="" type="text" name="end-date" placeholder="End Date">
      </div>
      <button onclick="editWorkExperience(this)">
        <i class="fa-light fa-pen-to-square fa-lg" style="color: #0a0a0a;"></i>
      </button>
      <button onclick="deleteWorkExperience(this)">
       <i class="fa-thin fa-trash fa-lg" style="color: #0d0d0d;"></i>
      </button>
    
  `;

  workExperienceList.appendChild(listItem);

  document.getElementById('company').value = '';
  document.getElementById('title').value = '';
  document.getElementById('start-date').value = '';
  document.getElementById('end-date').value = '';
}

function editWorkExperience(button) {
  const listItem = button.parentElement;
  const fields = listItem.innerText.split(',');
  document.getElementById('company').value = fields[0];
  document.getElementById('title').value = fields[1];
  document.getElementById('start-date').value = fields[2];
  document.getElementById('end-date').value = fields[3].replace(' Edit Delete', '');

  listItem.remove();
}

function deleteWorkExperience(button) {
  button.parentElement.remove();
}

function addSkill() {
  const skill1 = document.getElementById("skill-1").value;
  const skill2 = document.getElementById("skill-2").value;
  const skill3 = document.getElementById("skill-3").value;

  const skillsList = document.getElementById('skills-list');

  const listItem = document.createElement('div');
  listItem.innerHTML = `
    <div>
    <input id="skill-1" vaule="" type="text" name="skill-1" placeholder="Skill 1">
      <input id="skill-2" vaule="" type="text" name="skill-2" placeholder="Skill 2">
      <input id="skill-3" vaule="" type="text" name="skill-3" placeholder="Skill 3">
     </div>
      <button onclick="editSkills(this)">
       <i class="fa-light fa-pen-to-square fa-lg" style="color: #0a0a0a;"></i>
      </button>
      <button onclick="deleteSkills(this)">
        <i class="fa-thin fa-trash fa-lg" style="color: #0d0d0d;"></i>
      </button>
  `;

  skillsList.appendChild(listItem);

  document.getElementById('skill-1').value = '';
  document.getElementById('skill-2').value = '';
  document.getElementById('skill-3').value = '';
}

function editSkills(button) {
  const listItem = button.parentElement;
  const fields = listItem.innerText.split(',');
  document.getElementById('skill-1').value = fields[0];
  document.getElementById('skill-2').value = fields[1];
  document.getElementById('skill-3').value = fields[2].replace(' Edit Delete', '');

  listItem.remove();
}

function deleteSkills(button) {
  button.parentElement.remove();
}

function addReference() {
  const reference1 = document.getElementById("reference-1").value;
  const reference2 = document.getElementById("reference-2").value;
  const reference3 = document.getElementById("reference-3").value;

  const referencesList = document.getElementById('references-list');

  const listItem = document.createElement('div');
  listItem.innerHTML = `
    <div>
    <input id="reference-1" value="" type="text" name="reference-1" placeholder="Reference 1">
      <input id="reference-2" value="" type="text" name="reference-2" placeholder="Reference 2">
      <input id="reference-3" value="" type="text" name="reference-3" placeholder="Reference 3">
      </div>
      <button onclick="editReference(this)">
       <i class="fa-light fa-pen-to-square fa-lg" style="color: #0a0a0a;"></i>
      </button>
      <button onclick="deleteReference(this)">
       <i class="fa-thin fa-trash fa-lg" style="color: #0d0d0d;"></i>
      </button>
  `;

  referencesList.appendChild(listItem);

  document.getElementById('reference-1').value = '';
  document.getElementById('reference-2').value = '';
  document.getElementById('reference-3').value = '';
}

function editReference(button) {
  const listItem = button.parentElement;
  const fields = listItem.innerText.split(',');
  document.getElementById('reference-1').value = fields[0];
  document.getElementById('reference-2').value = fields[1];
  document.getElementById('reference-3').value = fields[2].replace(' Edit Delete', '');

  listItem.remove();
}

function deleteReference(button) {
  button.parentElement.remove();
}
