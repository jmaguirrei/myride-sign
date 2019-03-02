
import sgMail from '@sendgrid/mail';

export default function initServices({ sendrigApiKey }) {

  sgMail.setApiKey(sendrigApiKey);

}

