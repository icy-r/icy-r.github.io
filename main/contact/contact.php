<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and trim the input
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

    // Validate the form data
    if(empty($name) || empty($email) || empty($subject) || empty($message)) {
        // Return an error message if any field is empty
        $error_message = "Please fill in all fields.";
    } elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Return an error message if the email is not valid
        $error_message = "Please enter a valid email address.";
    } else {
        // Set the recipient email address and message header
        $to = "youremail@example.com";
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";

        // Build the email message
        $email_message = "Name: $name\n\n";
        $email_message .= "Email: $email\n\n";
        $email_message .= "Subject: $subject\n\n";
        $email_message .= "Message:\n$message\n";

        // Send the email and return a success message
        mail($to, $subject, $email_message, $headers);
        $success_message = "Thank you for contacting us!";
    }
}
?>