const downloadPDFButton = document.getElementById("download-pdf");
const downloadDOCXButton = document.getElementById("download-docx");
const downloadHTMLButton = document.getElementById("download-html");
const inputFields = document.querySelectorAll("input"); // Select all input fields
const textAreaFields = document.querySelectorAll("textarea");
const clearImageButton = document.getElementById("clear-image-button");
const profileImageInput = document.getElementById("profile-image");
const imagePreview = document.getElementById("image-preview");
const previewImg = document.getElementById("preview");

function collectAndValidateData() {
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

  // Check if all required fields are filled
  const requiredFields = [
    "name",
    "email",
    "phone",
    "address",
    "summary",
    "school",
    "degree",
    "major",
    "graduationDate",
    "company",
    "title",
    "startDate",
    "endDate",
  ];

  const isAllRequiredFilled = requiredFields.every(field => resumeData[field].trim() !== "");

  return { resumeData, isAllRequiredFilled };
}

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

  // Check if any of the required input fields or text areas are empty
  const requiredFields = [
    "name",
    "email",
    "phone",
    "address",
    "summary",
    "school",
    "degree",
    "major",
    "graduationDate",
    "company",
    "title",
    "startDate",
    "endDate",
  ];
  
  const isAllRequiredFilled = requiredFields.every(field => resumeData[field].trim() !== "");

  // Get the iframe element
  const iframe = document.querySelector("iframe");
  const iframeDocument =
    iframe.contentDocument || iframe.contentWindow.document;
  const iframeBody = iframeDocument.body;

  // Create an object URL for the profileImage
  const profileImageURL = resumeData.profileImage
    ? URL.createObjectURL(resumeData.profileImage)
    : "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg";

  if (isAllRequiredFilled) {
    // Replace the content of the iframe with the user's data
    iframeBody.innerHTML = `<!DOCTYPE html>
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
  } else {
    // Show a message when required fields are empty
    iframeBody.innerHTML = "<p>Please fill in all required fields.</p>";
  }
}


downloadPDFButton.addEventListener("click", () => {
  const { resumeData, isAllRequiredFilled } = collectAndValidateData();

  if (isAllRequiredFilled) {
    const iframe = document.querySelector("iframe");
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    // Generate the PDF from the iframe
    html2pdf()
      .from(iframeDocument.body)
      .save(`${resumeData.name}_resume.pdf`);
  } else {
    alert("Please fill in all required fields before downloading.");
  }
});
downloadDOCXButton.addEventListener("click", () => {
  const { resumeData, isAllRequiredFilled } = collectAndValidateData();

  if (isAllRequiredFilled) {
    // Basic DOCX structure
    const content = `
      <h1>${resumeData.name}</h1>
      <p>Email: ${resumeData.email}</p>
      <p>Phone: ${resumeData.phone}</p>
      <p>Address: ${resumeData.address}</p>
      <h2>Summary</h2>
      <p>${resumeData.summary}</p>
      <h2>Education</h2>
      <p>School: ${resumeData.school}</p>
      <p>Degree: ${resumeData.degree}</p>
      <p>Major: ${resumeData.major}</p>
      <h2>Work Experience</h2>
      <p>Company: ${resumeData.company}</p>
      <p>Title: ${resumeData.title}</p>
      <p>Start Date: ${resumeData.startDate}</p>
      <p>End Date: ${resumeData.endDate}</p>
      <h2>Skills</h2>
      <p>${resumeData.skill1}</p>
      <p>${resumeData.skill2}</p>
      <p>${resumeData.skill3}</p>
      <h2>References</h2>
      <p>${resumeData.reference1}</p>
      <p>${resumeData.reference2}</p>
      <p>${resumeData.reference3}</p>
    `;

    // Convert content to a DOCX Blob
    const blob = new Blob([content], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });

    // Use FileSaver to trigger the download
    saveAs(blob, `${resumeData.name}_resume.docx`);
  } else {
    alert("Please fill in all required fields before downloading.");
  }
});



downloadHTMLButton.addEventListener("click", () => {
  const { resumeData, isAllRequiredFilled } = collectAndValidateData();

  if (isAllRequiredFilled) {
    const iframe = document.querySelector("iframe");
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    // Ensure that the HTML content is properly serialized
    const htmlContent = "<!DOCTYPE html>\n" + iframeDocument.documentElement.outerHTML;
    const blob = new Blob([htmlContent], { type: "text/html" });

    // Use the FileSaver library to trigger the download
    saveAs(blob, `${resumeData.name}_resume.html`);
  } else {
    alert("Please fill in all required fields before downloading.");
  }
});

profileImageInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      previewImg.src = e.target.result; // Set the src of the preview image
      imagePreview.style.display = "block"; // Show the preview div
    };
    reader.readAsDataURL(file);
  } else {
    imagePreview.style.display = "none"; // Hide the preview div if no file is selected
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
