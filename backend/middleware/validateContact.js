const validateContact = (req, res, next) => {
  const {
    fullName,
    email,
    phone,
    organisation,
    enquiryType,
    subject,
    message,
    responseMethod,
    consent,
  } = req.body || {};

  const requiredFields = {
    fullName,
    email,
    enquiryType,
    subject,
    message,
    responseMethod,
  };

  for (const [field, value] of Object.entries(requiredFields)) {
    if (typeof value !== "string" || !value.trim()) {
      return res.status(400).json({
        success: false,
        message: `${field} is required.`,
      });
    }
  }

  if (fullName.trim().length > 150) {
    return res.status(400).json({
      success: false,
      message: "Name must be 150 characters or less.",
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address.",
    });
  }

  if (phone !== undefined && typeof phone !== "string") {
    return res.status(400).json({
      success: false,
      message: "Invalid phone number.",
    });
  }

  if (organisation !== undefined && typeof organisation !== "string") {
    return res.status(400).json({
      success: false,
      message: "Invalid organisation.",
    });
  }

  if (!["email", "phone", "whatsapp"].includes(responseMethod)) {
    return res.status(400).json({
      success: false,
      message: "Invalid response method.",
    });
  }

  if (consent !== true) {
    return res.status(400).json({
      success: false,
      message: "Your consent is required.",
    });
  }

  if (subject.trim().length > 200 || message.trim().length > 5000) {
    return res.status(400).json({
      success: false,
      message: "Subject or message is too long.",
    });
  }

  next();
};

module.exports = validateContact;