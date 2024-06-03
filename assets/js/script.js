document.addEventListener("DOMContentLoaded", function() {
    // Options for the IntersectionObserver
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when half of the section is visible
    };

    // Create an IntersectionObserver
    var observer = new IntersectionObserver(startAnimation, options);

    // Get the skills section
    var skillsSection = document.querySelector('.my-skills');

    // Observe the skills section
    observer.observe(skillsSection);
});

function startAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Once the section comes into view, start the animations for each progress bar
            initiateCountAnimation(entry.target);
            // Stop observing the section to avoid unnecessary repetitions
            observer.unobserve(entry.target);
        }
    });
}

function initiateCountAnimation(skillsSection) {
    var progressBars = skillsSection.querySelectorAll('.progress-bar.progress-line');

    progressBars.forEach(function(progressBar) {
        var targetWidth = progressBar.getAttribute('data-width');
        var currentWidth = 0;
        var incrementRate = targetWidth / 100; // Assuming 1 second animation
        var interval = setInterval(frame, 10);

        function frame() {
            if (currentWidth >= targetWidth) {
                clearInterval(interval);
            } else {
                currentWidth += incrementRate;
                progressBar.style.width = currentWidth + '%';
                progressBar.querySelector('.skill-percentage').textContent = Math.round(currentWidth) + '%';
            }
        }
    });
}









// let form = document.querySelector("#contactForm");

// // let handleEnroll = () => {
// //   forms.forEach((form) => {
// //     form.classList.add("hightlightForm");
// //     form.querySelector(".name").classList.add("highlightInput");
// //   });

// //   setTimeout(() => {
// //     forms.forEach((form) => {
// //       form.classList.remove("hightlightForm");
// //       form.querySelector(".name").classList.remove("highlightInput");
// //     });
// //   }, 5000);
// // };


// // forms.forEach((form) => {

//   let nameInput = document.querySelector(".name");
//   let emailInput = document.querySelector(".email");
//   let subjectInput = document.querySelector(".subject");
//   let messageInput = document.querySelector(".message");

//   let nameError = document.querySelector(".nameError");
//   let emailError = document.querySelector(".emailError");
//   let subjectError = document.querySelector(".subjectError");

//   // Function to validate name
//   function validateName() {
//     let name = nameInput.value.trim();
//     let namePattern = /^[A-Za-z ]+$/;

//     if (name === "") {
//       nameError.textContent = "Name is required";
//       return false;
//     }

//     else if (!namePattern.test(name)) {
//       nameError.textContent = "Invalid name format";
//       return false;
//     }

//      else {
//       nameError.textContent = "";
//       return true;
//     }
//   }

//   // Function to validate email
//   function validateEmail() {
//     let email = emailInput.value.trim();
//     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
//     if (email === "") {
//       emailError.textContent = "Email is required";
//       return false;
//     } else if (!emailPattern.test(email)) {
//       emailError.textContent = "Invalid email format";
//       return false;
//     } else {
//       emailError.textContent = "";
//       return true;
//     }
//   }

//   // Function to validate number
//   function validateSubject() {
//     let name = subjectInput.value.trim();
//     let subjectPattern = /^[A-Za-z ]+$/;
//     if (name === "") {
//       subjectError.textContent = "Name is required";
//       return false;
//     } else if (!subjectPattern.test(name)) {
//       subjectError.textContent = "Invalid name format";
//       return false;
//     } else {
//       subjectError.textContent = "";
//       return true;
//     }
//   }

//   // Validate on input
//   nameInput.addEventListener("input", validateName);
//   emailInput.addEventListener("input", validateEmail);
//   subjectInput.addEventListener("input", validateSubject);

//   // Validate on form submit
//   form.addEventListener("submit", function (event) {
//     // Prevent form submission if validation fails
//     if (
//       !validateName() ||
//       !validateEmail() ||
//       !validateSubject()
//     ) {
//       event.preventDefault();
//     } else {
//       event.preventDefault();
//       // Form data is valid, log it to the console
//       console.log(
//         `Name: ${nameInput.value}, Email: ${emailInput.value}, Subject: ${subjectInput.value}, Message: ${messageInput.value}`
//       );

//       // send data to server
//     //   let formData = new FormData();
//     //   formData.append('name', nameInput.value);
//     //   formData.append('email', emailInput.value);
//     //   formData.append('mobile_number', numberInput.value);
//     //   formData.append('field_of_study', selectInput.value);
//     //   formData.append('url', 'https://ex.desunacademy.in/');
      
//     //   formData.append('recived_mail',  document.getElementById('recived_mail').value);
// 	//   formData.append('success_url', document.getElementById('success_url').value);
// 	//   formData.append('mail_subject', document.getElementById('mail_subject').value);

//     //   fetch('https://ehostingguru.com/desuntech-email/api.php', {
//     //     method: "POST",
//     //     body: formData
//     //   })
//     //   .then( res => res.json() )
//     //   .then( res => {
//     //     window.location.href = document.getElementById('success_url').value; 
//     //   })
//     //   .catch( err => {
//     //     console.log(err)
//     //   });

//        // Clear input fields
//        nameInput.value = "";
//        emailInput.value = "";
//        subjectInput.value = "";
//        messageInput.value = "";

//     //   handleEnroll();
//     }
//   });

// // });




