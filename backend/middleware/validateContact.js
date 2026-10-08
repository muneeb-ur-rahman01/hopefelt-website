const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContact(req, res, next) {
  const { fullName, email, subject, message } = req.body || {};
  const errors = [];

  if (!fullName || !fullName.trim()) errors.push("Full name is required.");
  if (!email || !email.trim()) {
    errors.push("Email is required.");
  } else if (!EMAIL_REGEX.test(email.trim())) {
    errors.push("Email is not valid.");
  }
  if (!subject || !subject.trim()) errors.push("Subject is required.");
  if (!message || !message.trim()) errors.push("Message is required.");

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: errors[0],
      errors,
    });
  }

  next();
}

module.exports = validateContact;
