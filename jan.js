const downloadButton = document.getElementById("download-button");
const inputFields = document.querySelectorAll("input"); 
const textAreaFields = document.querySelectorAll("textarea");
const clearImageButton = document.getElementById("clear-image-button");

inputFields.forEach((inputField) => {
  inputField.addEventListener("input", updateIframeContent);
});
textAreaFields.forEach((textAreaField) => {
  textAreaField.addEventListener("input", updateIframeContent);
});

clearImageButton.addEventListener("click", function () {
  const profileImageInput = document.getElementById("profile-image");
  profileImageInput.value = ""; 
  updateIframeContent();
});

function updateIframeContent() {
  const resumeData = {
    profileImage: document.getElementById("profile-image").files[0],
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    address: document.getElementById("address").value.trim(),
    summary: document.getElementById("summary").value.trim(),
    school: document.getElementById("school").value.trim(),
    degree: document.getElementById("degree").value.trim(),
    major: document.getElementById("major").value.trim(),
    graduationDate: document.getElementById("graduation-date").value.trim(),
    company: document.getElementById("company").value.trim(),
    title: document.getElementById("title").value.trim(),
    startDate: document.getElementById("start-date").value.trim(),
    endDate: document.getElementById("end-date").value.trim(),
    skill1: document.getElementById("skill-1").value.trim(),
    skill2: document.getElementById("skill-2").value.trim(),
    skill3: document.getElementById("skill-3").value.trim(),
    reference1: document.getElementById("reference-1").value.trim(),
    reference2: document.getElementById("reference-2").value.trim(),
    reference3: document.getElementById("reference-3").value.trim(),
  };

  const isNotEmpty = Object.values(resumeData).some((value) => value !== "");

  const iframe = document.querySelector("iframe");
  const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  const iframeBody = iframeDocument.body;

  const profileImageURL = resumeData.profileImage
    ? URL.createObjectURL(resumeData.profileImage)
    : "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg";

  if (isNotEmpty) {
    iframeBody.innerHTML = `
      <html lang="en">
      <head><title>Resume</title></head>
      <body>
        <div class="personalInfo">
          <img src="${profileImageURL}" alt="Profile Image"/>
          <ul>
            <li><h1>${resumeData.name}</h1></li>
            <li>Email: ${resumeData.email}</li>
            <li>Phone: ${resumeData.phone}</li>
            <li>Address: ${resumeData.address}</li>
          </ul>
        </div>
        <h2>Summary</h2><ul><li>${resumeData.summary}</li></ul>
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
      </html>`;
  } else {
    iframeBody.innerHTML = "<p>No data entered.</p>";
  }
}

function addListItem(type, idPrefix) {
  const item1 = document.getElementById(`${idPrefix}-1`).value;
  const item2 = document.getElementById(`${idPrefix}-2`).value;
  const item3 = document.getElementById(`${idPrefix}-3`).value;

  const list = document.getElementById(`${type}-list`);
  const listItem = document.createElement('div');

  listItem.innerHTML = `
    <p>
      ${item1}, ${item2}, ${item3}
      <button onclick="edit${capitalize(type)}(this)">
        <i class="fas fa-edit"></i>
      </button>
      <button onclick="delete${capitalize(type)}(this)">
        <i class="fas fa-trash"></i>
      </button>
    </p>
  `;

  list.appendChild(listItem);

  document.getElementById(`${idPrefix}-1`).value = '';
  document.getElementById(`${idPrefix}-2`).value = '';
  document.getElementById(`${idPrefix}-3`).value = '';
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

  {/*<p>school: ${school}</p>  
       <p>degree: ${degree}</p>
     <p>major:${major} </p>
      <p>graduationDate: ${graduationDate}</p>*/}