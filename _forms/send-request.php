<?
/* Include PHPMailer and initialize variables. */
require_once("PHPMailer/class.phpmailer.php");

$smtpServer = 'smtp.mail.virginia.edu';
$primarySpecCollName = 'John Witherell';
$primarySpecCollEmail = 'jmf6a@virginia.edu';
$secondarySpecCollName = 'Carla Lee';
$secondarySpecCollEmail = 'cl9eb@virginia.edu';
$emailSubject = 'Shakespeare Tour Request';

class tourReceipt {
  public $mailSent;
  public $confirmationMsg;

  /*
	 * Constructor takes an indicator that email was sent and the desired
   * confirmation message.
	 *
   * @param $mailSent - boolean that indicates email sent successfully
   * @param $confirmationMsg - string representing confirmation message to
   *        display
	 */
	public function __construct($sent, $message='') {
		$this->initialize();

		if ( is_bool($sent) ) {
      if ($sent) {
        $this->mailSent = $sent;
      }
		}

    if ($message != '') {
      $this->confirmationMsg = $message;
    }
	}

  /*
	 * Initializes an object.
	 */
	private function initialize() {
		$this->mailSent = false;
		$this->confirmationMsg = '<p>There was a problem sending your request at this time. Please try again later.</p><p>Thank you.</p>';
	}
}
$tourRequest = new tourReceipt();

/* If hidden form field exists and is empty then not spam. */
if (isset($_POST['specificrequest']) and ($_POST['specificrequest'] == '')) {
  /* Retrieve form content securely. */
  $name = (isset($_POST['name'])) ? htmlentities($_POST['name']) : '';
  $phone = (isset($_POST['phone'])) ? htmlentities($_POST['phone']) : '';
  $email = (isset($_POST['email'])) ? htmlentities($_POST['email']) : '';
  $affiliation = (isset($_POST['affiliation'])) ? htmlentities($_POST['affiliation']) : '';
  $groupSize = (isset($_POST['groupsize'])) ? htmlentities($_POST['groupsize']) : '';
  $desiredTourDate = (isset($_POST['desiredtourdate'])) ? htmlentities($_POST['desiredtourdate']) : '';
  $specialAccommodations = (isset($_POST['specialaccommodations'])) ? htmlentities($_POST['specialaccommodations']) : '';

  /* Format email using form content. */
  $emailBody =  'Thank you for your request! A member of the Shakespeare ';
  $emailBody .= 'Exhibition team will reply to you within 1-2 business days ';
  $emailBody .= "to confirm your tour.\n\n";
  $emailBody .= "Name: $name\n";
  $emailBody .= "Phone Number: $phone\n";
  $emailBody .= "Email Address: $email\n";
  $emailBody .= "Affiliation: $affiliation\n";
  $emailBody .= "Group Size: $groupSize\n";
  $emailBody .= "Desired Tour Date: $desiredTourDate\n";
  $emailBody .= "Special Accommodations: $specialAccommodations\n";

  /* Send emails. */
  // Email sent to patron if address was specified.
  if ($email != '') {
    $mail = new PHPMailer();
    $mail->IsSMTP(true);
    $mail->Host = $smtpServer;
    $mail->SetFrom($primarySpecCollEmail,$primarySpecCollName);
    $mail->AddReplyTo($primarySpecCollEmail,$primarySpecCollName);
    $mail->AddReplyTo($secondarySpecCollEmail,$secondarySpecCollName);
    $mail->AddAddress($email,$name); // Indicate who gets the email.
    $mail->Subject = $emailSubject;
    $mail->Body = $emailBody;
    $patronCopySent = $mail->Send();
  }
  // Email sent to Library.
  $shakespeareCopySent = false;
  $mail = new PHPMailer();
  $mail->IsSMTP(true);
  $mail->Host = $smtpServer;
  if ($email != '') {
    $mail->SetFrom($email,$name);
  } else {
    $mail->SetFrom($primarySpecCollEmail,$primarySpecCollName);
  }
  $mail->AddAddress($primarySpecCollEmail,$primarySpecCollName);
  $mail->AddCC($secondarySpecCollEmail,$secondarySpecCollName);
  $mail->AddReplyTo($primarySpecCollEmail,$primarySpecCollName);
  $mail->AddReplyTo($secondarySpecCollEmail,$secondarySpecCollName);
  $mail->AddAddress($email,$name); // Indicate who gets the email.
  $mail->Subject = $emailSubject;
  $mail->Body = $emailBody;
  $shakespeareCopySent = $mail->Send();
}

/* Send response back to indicate success/failure of form submission. */
if ($shakespeareCopySent) {
  $tourRequest = new tourReceipt($shakespeareCopySent, '<p>Thank you for your request! A member of the Shakespeare Exhibition team will reply to you within 1-2 business days to confirm your tour.</p>');
}
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: *");
header("Content-type: application/json; charset=utf-8");
echo json_encode($tourRequest);
?>
