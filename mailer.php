<?php
header('Content-Type: text/html; charset=utf-8');
$to = 'info@arvisual.eu';
//$to = 'michael@arvisual.eu';
$subj     = !empty($_POST['subj']) ? htmlentities($_POST['subj']) : "";
$email    = !empty($_POST['email']) ? htmlentities($_POST['email']) : "";
$message  = !empty($_POST['message']) ? htmlentities($_POST['message']) : "";
if (empty($subj) || empty($email) || empty($message)) {
    http_response_code(400);
    exit();
}
$headers = "From: demo@arvisual.eu" . "\r\n" .
           "Reply-To: $message" . "\r\n" .
           'X-Mailer: PHP/' . phpversion() .
           'MIME-Version: 1.0' . "\r\n" .
           'Content-Type: text/html; charset=utf-8' . "\r\n";
$txt = "<html>
        <body>
            <p>Od: " . $message . " <br>
            " . $email . "</p>
        </body>
            </html>";
mail($to, $subj, $txt, $headers);
?>