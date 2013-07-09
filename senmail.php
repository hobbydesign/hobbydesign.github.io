<?
$email = $_GET['form_email'] ;
$message = $_GET['form_message'] ;
mail( "eberner@gmail.com", "[getahobbydesign.com]", $message, "From: $email" );
print "Congratulations your email has been sent";
?>

