<?php
require_once("PHPMailer/PHPMailerAutoload.php");




if (isset($_POST['subject'])&& $_POST['body']!="") {
$sub=$_POST['subject'];
$bod=$_POST['body'];
$em=	$_POST['email'];		
	?>		

<?php

$mail = new PHPMailer();
$mail->isSMTP();
$mail->SMTPAuth=true;
$mail->SMTPSecure = 'ssl';
$mail->Host = 'smtp.gmail.com';
$mail->Port = '465';
$mail->isHTML();
$mail->Username = 'noreplymyac@gmail.com';
$mail->Password = 'Dragonprayer';
$mail->SetFrom('no-reply@howcode.org');
$mail->Subject = $sub;
$mail->Body = $bod."\n".$em;
$mail->AddAddress('nikithanupkumar@gmail.com');


if(!$mail->Send()) {
	echo "Mailer Error: " . $mail->ErrorInfo;
 } else {
	echo ("<script LANGUAGE='JavaScript'>
    window.alert('Succesfully Sent');
    window.location.href='index.php';
    </script>");
 }
}else{
    echo ("<script LANGUAGE='JavaScript'>
    window.alert('Unsuccesfully try again');
    window.location.href='index.php';
    </script>"); 
} 
?>
