
import sgMail from '@sendgrid/mail';
import { templateCatalog } from '../../lib/emails/templateCatalog';

export const sendEmail = (args, server) => {

  const {
    template,
    email,
    language = 'en',
    plainText = '',
    data,
  } = args;

  const _id = server.uid();

  const emailBody = {
    to: email,
    from: templateCatalog[template].sender,
    // subject: data.subject,
    text: plainText,
    templateId: templateCatalog[template].id,
    dynamic_template_data: {
      spanish: language === 'es',
      ...data,
    },
  };

  return {

    steps: [

      () => {
        return server.model.createEntity({
          _id,
          domain: ':emails',
          attrs: { status: 0, emailBody },
        });
      },

      () => {
        return sgMail.send(emailBody);
      },

      res => {
        if (!res) return { error: 'MAIL_SENDING_ERROR' };
        return server.model.addAttrsToEntity({
          _id,
          attrs: { key: 'status', value: 1 },
        });
      }

    ],

  };

};
