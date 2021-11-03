<?
require_once 'PHPMailer/PHPMailerAutoload.php';
// require_once 'PHPMailer/src/SMTP.php';
//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

if($_SERVER['REQUEST_METHOD'] !== 'POST') {
    exit;
}

try {
    $mail->CharSet = 'UTF-8';
    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.mailtrap.io';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = '08cb40d083bf88';                     //SMTP username
    $mail->Password   = 'e192997f455c2d';                               //SMTP password
    $mail->SMTPSecure = 'tsl';            //Enable implicit TLS encryption
    $mail->Port       = 25;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    // $mail->setFrom('artemjev.denis2012@yandex.ru');

    foreach($_POST['admin_email'] as $email) {
        $mail->addAddress($email);
    }

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $_POST['form_subject'];
    $mail->Body    = 'Имя пользователя: ' . $_POST['name'] . ', телефон: ' . $_POST['tel'];

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>