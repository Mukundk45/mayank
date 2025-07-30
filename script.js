document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const cvForm = document.getElementById('cv-form');
    const generateBtn = document.getElementById('generate-cv');
    const resetBtn = document.getElementById('reset-form');
    const downloadBtn = document.getElementById('download-cv');
    
    // Add Education
    const addEducationBtn = document.getElementById('add-education');
    const educationFields = document.getElementById('education-fields');
    
    // Add Experience
    const addExperienceBtn = document.getElementById('add-experience');
    const experienceFields = document.getElementById('experience-fields');
    
    // Add Skill
    const addSkillBtn = document.getElementById('add-skill');
    const skillsFields = document.getElementById('skills-fields');
    
    // Preview Elements
    const previewName = document.getElementById('preview-name');
    const previewProfession = document.getElementById('preview-profession');
    const previewEmail = document.getElementById('preview-email');
    const previewPhone = document.getElementById('preview-phone');
    const previewAddress = document.getElementById('preview-address');
    const previewLinkedin = document.getElementById('preview-linkedin');
    const previewGithub = document.getElementById('preview-github');
    const previewAbout = document.getElementById('preview-about');
    const previewEducation = document.getElementById('preview-education');
    const previewExperience = document.getElementById('preview-experience');
    const previewSkills = document.getElementById('preview-skills');
    
    // Add Education Field
    addEducationBtn.addEventListener('click', function() {
        const newEducation = document.createElement('div');
        newEducation.classList.add('education-entry');
        newEducation.innerHTML = `
            <div class="form-group">
                <label>Degree</label>
                <input type="text" class="degree" required>
            </div>
            <div class="form-group">
                <label>Institution</label>
                <input type="text" class="institution" required>
            </div>
            <div class="form-group">
                <label>Year</label>
                <input type="text" class="education-year" required>
            </div>
            <button type="button" class="remove-btn">Remove</button>
        `;
        educationFields.appendChild(newEducation);
        
        // Add remove event listener
        newEducation.querySelector('.remove-btn').addEventListener('click', function() {
            educationFields.removeChild(newEducation);
        });
    });
    
    // Add Experience Field
    addExperienceBtn.addEventListener('click', function() {
        const newExperience = document.createElement('div');
        newExperience.classList.add('experience-entry');
        newExperience.innerHTML = `
            <div class="form-group">
                <label>Job Title</label>
                <input type="text" class="job-title" required>
            </div>
            <div class="form-group">
                <label>Company</label>
                <input type="text" class="company" required>
            </div>
            <div class="form-group">
                <label>Duration</label>
                <input type="text" class="duration" required>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea class="job-description" rows="3"></textarea>
            </div>
            <button type="button" class="remove-btn">Remove</button>
        `;
        experienceFields.appendChild(newExperience);
        
        // Add remove event listener
        newExperience.querySelector('.remove-btn').addEventListener('click', function() {
            experienceFields.removeChild(newExperience);
        });
    });
    
    // Add Skill Field
    addSkillBtn.addEventListener('click', function() {
        const newSkill = document.createElement('div');
        newSkill.classList.add('skills-entry');
        newSkill.innerHTML = `
            <div class="form-group">
                <label>Skill</label>
                <input type="text" class="skill" required>
            </div>
            <div class="form-group">
                <label>Level</label>
                <select class="skill-level">
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Expert">Expert</option>
                </select>
            </div>
            <button type="button" class="remove-btn">Remove</button>
        `;
        skillsFields.appendChild(newSkill);
        
        // Add remove event listener
        newSkill.querySelector('.remove-btn').addEventListener('click', function() {
            skillsFields.removeChild(newSkill);
        });
    });
    
    // Generate CV
    generateBtn.addEventListener('click', function() {
        // Personal Information
        previewName.textContent = document.getElementById('full-name').value || 'Your Name';
        previewProfession.textContent = document.getElementById('profession').value || 'Your Profession';
        previewEmail.textContent = 'Email: ' + (document.getElementById('email').value || 'your.email@example.com');
        previewPhone.textContent = 'Phone: ' + (document.getElementById('phone').value || '(123) 456-7890');
        previewAddress.textContent = 'Address: ' + (document.getElementById('address').value || 'Your Address');
        
        const linkedinValue = document.getElementById('linkedin').value;
        previewLinkedin.textContent = linkedinValue ? `LinkedIn: ${linkedinValue}` : 'LinkedIn: linkedin.com/in/yourprofile';
        
        const githubValue = document.getElementById('github').value;
        previewGithub.textContent = githubValue ? `GitHub: ${githubValue}` : 'GitHub: github.com/yourusername';
        
        previewAbout.textContent = document.getElementById('about').value || 'A brief description about yourself goes here.';
        
        // Education
        previewEducation.innerHTML = '';
        const educationEntries = document.querySelectorAll('.education-entry');
        educationEntries.forEach(entry => {
            const degree = entry.querySelector('.degree').value || 'Degree Name';
            const institution = entry.querySelector('.institution').value || 'Institution Name';
            const year = entry.querySelector('.education-year').value || 'Year';
            
            const educationItem = document.createElement('div');
            educationItem.classList.add('education-item');
            educationItem.innerHTML = `
                <h4>${degree}</h4>
                <p class="institution">${institution}</p>
                <p class="year">${year}</p>
            `;
            previewEducation.appendChild(educationItem);
        });
        
        // Experience
        previewExperience.innerHTML = '';
        const experienceEntries = document.querySelectorAll('.experience-entry');
        experienceEntries.forEach(entry => {
            const jobTitle = entry.querySelector('.job-title').value || 'Job Title';
            const company = entry.querySelector('.company').value || 'Company Name';
            const duration = entry.querySelector('.duration').value || 'Duration';
            const description = entry.querySelector('.job-description').value || 'Job description goes here.';
            
            const experienceItem = document.createElement('div');
            experienceItem.classList.add('experience-item');
            experienceItem.innerHTML = `
                <h4>${jobTitle}</h4>
                <p class="company">${company}</p>
                <p class="duration">${duration}</p>
                <p class="description">${description}</p>
            `;
            previewExperience.appendChild(experienceItem);
        });
        
        // Skills
        previewSkills.innerHTML = '';
        const skillEntries = document.querySelectorAll('.skills-entry');
        skillEntries.forEach(entry => {
            const skill = entry.querySelector('.skill').value || 'Skill';
            const level = entry.querySelector('.skill-level').value || 'Level';
            
            const skillItem = document.createElement('li');
            skillItem.textContent = `${skill} - ${level}`;
            previewSkills.appendChild(skillItem);
        });
    });
    
    // Reset Form
    resetBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to reset the form? All data will be lost.')) {
            cvForm.reset();
            
            // Remove all dynamic fields except the first one
            while (educationFields.children.length > 1) {
                educationFields.removeChild(educationFields.lastChild);
            }
            
            while (experienceFields.children.length > 1) {
                experienceFields.removeChild(experienceFields.lastChild);
            }
            
            while (skillsFields.children.length > 1) {
                skillsFields.removeChild(skillsFields.lastChild);
            }
            
            // Reset preview
            previewName.textContent = 'Your Name';
            previewProfession.textContent = 'Your Profession';
            previewEmail.textContent = 'Email: your.email@example.com';
            previewPhone.textContent = 'Phone: (123) 456-7890';
            previewAddress.textContent = 'Address: Your Address';
            previewLinkedin.textContent = 'LinkedIn: linkedin.com/in/yourprofile';
            previewGithub.textContent = 'GitHub: github.com/yourusername';
            previewAbout.textContent = 'A brief description about yourself goes here.';
            
            previewEducation.innerHTML = `
                <div class="education-item">
                    <h4>Degree Name</h4>
                    <p class="institution">Institution Name</p>
                    <p class="year">Year</p>
                </div>
            `;
            
            previewExperience.innerHTML = `
                <div class="experience-item">
                    <h4>Job Title</h4>
                    <p class="company">Company Name</p>
                    <p class="duration">Duration</p>
                    <p class="description">Job description goes here.</p>
                </div>
            `;
            
            previewSkills.innerHTML = `
                <li>Skill 1 - Level</li>
                <li>Skill 2 - Level</li>
            `;
        }
    });
    
    // Download CV as PDF
    downloadBtn.addEventListener('click', function() {
        // First generate the CV to make sure preview is up to date
        generateBtn.click();
        
        // Options for PDF generation
        const element = document.getElementById('cv-preview');
        const opt = {
            margin: 10,
            filename: 'my-cv.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        // Generate PDF
        html2pdf().from(element).set(opt).save();
    });
});