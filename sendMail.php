<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_OFF;
    $mail->isSMTP();
    $mail->CharSet = 'UTF-8';
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'j.kot@dinodyn.com';
    $mail->Password   = 'rySkuw-hicsy8-tihxar';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    //Recipients
    $mail->setFrom('j.kot@dinodyn.com', 'otech.pro');
    $mail->addAddress('j.kot@otech.pro');
    // Content
    $mail->isHTML(true);
    $mail->Subject = "Заявка с сайта otech.pro";

    $html = '';
    foreach ($_POST['data'] as $item) {
        $html .= ucfirst($item['name']) . ' <b>'. strip_tags($item['value']) .'</b><br>';
    }
    $mail->Body = $html;
    $mail->send();

    echo json_encode(['success' => 'Сообщение успешно отправлено!']);
} catch (Exception $e) {
    echo json_encode(['error' => 'Сообщение не отправлено!']);
}