<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST["message"];

  $email_from = "maxwinop@gmail.com";
  $email_subject = "New Form Submission";
  $email_body = "User Name: $name.\n".
                "User Email: $visitor_emaio.\n".
                "Message: $message.\n";
                
  $to = "anuragsolanki299@gmail.com";
  
  $headers = "Form: $email_from \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";
  mail($to,$email_subject,$email_body,$headers);
  header("Location: index.html");
?>