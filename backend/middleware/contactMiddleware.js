const allowedEnquiryTypes = [
  "General Enquiries",
  "Partnership Enquiries",
  "Project Proposals",
  "Research Enquiries",
  "Volunteer Enquiries",
  "Events Enquiries",
  "Media Enquiries",
  "Digital Marketing Enquiries",
  "Technology Enquiries",
  "Digital Health Enquiries",
  "Entrepreneurship & Business Enquiries",
  "Training Enquiries",
  "Sponsorship Enquiries",
  "Donation Enquiries",
];

const allowedMethods = ["email", "phone", "whatsapp"];

export function validateContactRequest(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return "Invalid request data.";
  }

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
  } = data;

  // Required fields
  if (
    typeof fullName !== "string" ||
    typeof email !== "string" ||
    typeof enquiryType !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string"
  ) {
    return "Please provide all required fields.";
  }

  if (
    !fullName.trim() ||
    !email.trim() ||
    !enquiryType.trim() ||
    !subject.trim() ||
    !message.trim()
  ) {
    return "Required fields cannot be empty.";
  }

  // Length validation
  if (
    fullName.length > 150 ||
    email.length > 255 ||
    subject.length > 255 ||
    message.length > 10000 ||
    (phone != null &&
      (typeof phone !== "string" || phone.length > 30)) ||
    (organisation != null &&
      (typeof organisation !== "string" ||
        organisation.length > 200))
  ) {
    return "One or more fields exceed the allowed length.";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email.trim())) {
    return "Please enter a valid email address.";
  }

  // Enquiry type validation
  if (!allowedEnquiryTypes.includes(enquiryType)) {
    return "Please select a valid enquiry type.";
  }

  // Response method validation
  if (!allowedMethods.includes(responseMethod)) {
    return "Invalid preferred response method.";
  }

  // Consent validation
  if (consent !== true) {
    return "Your consent is required.";
  }

  return null;
}