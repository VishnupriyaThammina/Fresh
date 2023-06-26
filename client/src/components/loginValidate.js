// registerValidate.js
const loginValidate = (formData) => {

  const checkEmailExists = async (email) => {
    try {
      const response = await fetch(`/api/findEmail/${email}`);
      const data = await response.json();
  
      if (response.ok) {
        if (data.exists) {
          console.log("Email exists:", data.user);
        } else {
          console.log("Email does not exist");
        }
      } else {
        console.log("Error:", data.message);
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };
  
    const errors = {};
  
  
  
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email address';
    }
  
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password should be at least 6 characters long';
    }
  
    return errors;
  };
  
  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  
  export default loginValidate;
  