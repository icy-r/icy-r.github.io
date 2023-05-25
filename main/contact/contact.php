<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Process the form data (e.g., send an email, store in a database, etc.)

  // Example: Send an email
  $to = "your-email@example.com"; // Replace with your email address
  $subject = "New Contact Form Submission";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Thank you for your message! We'll get back to you soon.";
  } else {
    echo "Oops! Something went wrong. Please try again.";
  }
}
?>
