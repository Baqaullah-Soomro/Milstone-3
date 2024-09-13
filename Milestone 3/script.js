var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form input elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    // Get values from the form
    var name = nameElement.value;
    var email = emailElement.value;
    var phone = phoneElement.value;
    var address = addressElement.value;
    var education = educationElement.value;
    var experience = experienceElement.value;
    var skills = skillsElement.value.split(',').map(function (skill) { return skill.trim(); }); // Convert comma-separated skills to an array
    // Generate the resume content
    var resumeHTML = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Address:</strong> ").concat(address, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Work Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <ul>\n            ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n        </ul>\n    ");
    // Insert the generated resume into the resumeOutput section
    var resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = resumeHTML;
});
