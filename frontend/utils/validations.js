export const isPhoneNumberValid = (phoneNumber) => {
    const phoneNumberRegex = /^(05\d)-\d{7}$/; // 05X-XXXXXXX
    return phoneNumberRegex.test(phoneNumber);
}

export const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{8,}$/;
    return passwordRegex.test(password);
}

export const isEmailValid = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}

export const formatPhoneNumber = (input) => {
    // Remove non-numeric characters
    const phoneNumber = input.replace(/[^0-9]/g, ''); 

    // Automatically adds '-' after the first three digits
    if (phoneNumber.length >= 4) {
      return phoneNumber.slice(0, 3) + '-' + phoneNumber.slice(3);
    }
    return phoneNumber;
  };