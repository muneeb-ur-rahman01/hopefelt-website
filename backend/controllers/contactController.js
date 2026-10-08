// In a production build this would persist to a database and/or send an
// email/notification. For now it logs and returns a success response so
// the frontend flow (loading -> success/error) is fully wired up.
function submitContact(req, res) {
  const { fullName, email, phone, subject, message } = req.body;

  console.log("New contact form submission:", {
    fullName,
    email,
    phone,
    subject,
    message,
    receivedAt: new Date().toISOString(),
  });

  res.status(200).json({
    success: true,
    message: "Thanks for reaching out — we'll get back to you shortly.",
  });
}

module.exports = { submitContact };
