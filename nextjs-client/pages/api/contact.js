import * as nodemailer from 'nodemailer';

const htmlEntities = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

const escapeHtml = value =>
  value.replace(/[&<>"']/g, character => htmlEntities[character]);

const sendContactEmail = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const { name, email, message } = req.body || {};
  if (
    typeof name !== 'string' ||
    !name.trim() ||
    typeof email !== 'string' ||
    !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email.trim()) ||
    typeof message !== 'string' ||
    !message.trim()
  ) {
    return res.status(400).json({
      error: 'Please enter a name, valid email, and message.',
    });
  }

  const studentName = name.trim();
  const studentEmail = email.trim();
  const replyNote =
    '이 메일은 예마요가 홈페이지에서 접수된 문의입니다. 메일의 “답장” 버튼을 누르면 문의자에게 답장이 전송됩니다. 답장 전 받는 사람이 아래 문의자 이메일 주소인지 확인해 주세요.';

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: {
        name: 'Yemayoga 홈페이지 문의',
        address: process.env.SMTP_USER,
      },
      replyTo: { name: studentName, address: studentEmail },
      to: process.env.EMAIL_RECIPIENT,
      subject: `[Yemayoga.com] Contact Message from ${studentName}`,
      text: `${replyNote}\n\n이름: ${studentName}\n문의자 이메일: ${studentEmail}\n\n문의 내용:\n${message}`,
      html: `<p>${replyNote}</p>
             <p><strong>이름:</strong> ${escapeHtml(studentName)}</p>
             <p><strong>문의자 이메일:</strong> <a href="mailto:${escapeHtml(studentEmail)}">${escapeHtml(studentEmail)}</a></p>
             <p><strong>문의 내용:</strong></p>
             <div>${escapeHtml(message).replace(/\r\n|\r|\n/g, '<br>')}</div>`,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }

  return res.status(200).json({ error: '' });
};

export default sendContactEmail;
