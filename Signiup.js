document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Extracting the values of the input fields filled by the user and storing them into a new variable and then by using this variable value will be set in the local storage 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
  
    // Saving user data to localStorage
    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('role', role);
  
    console.log('Signup - username:', name);
  
    if (role === 'student') {
      window.location.href = 'studentpage.html'; // Redirect to student page
    } else if (role === 'teacher') {
      window.location.href = 'teacherpage.html'; // Redirect to teacher page
    }
  });