var nodemailer = require("nodemailer");

var sender = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'emailfrom',
		pass: 'password'
	}
});

var mail = {
	from: 'emailfrom',
	to:'emailto',
	subject: 'This is the subject',
	text: 'This is the content',

attachments: [
		{
			filename: 'download.jpg',
			path: __dirname + '/send/download.jpg',
			cid: 'uniq-download.jpg'
		},
        {
			filename: 'situation-compte-rg.pdf',
			path: __dirname + '/send/situation-compte-rg.pdf',
			cid: 'uniq-situation-compte-rg.pdf'
		}
	]
};

sender.sendMail(mail, function (error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent successfully: ' + info.response);
	}
});
