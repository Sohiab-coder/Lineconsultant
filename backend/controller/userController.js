const sendEmail = require("../sendEmail/sendEmail");

exports.contactForm = async (req, res) => {
  try {
    const { name, lastName, email, message } = req.body;
    if (!name || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    const to = process.env.MY_MAIL;
    const subject = "Contact form Message from InFront Web Workers ";
    const text = `I am ${name} ${lastName} and my Email is ${email}. \nMessage: \n${message}`;

    await sendEmail(to, subject, text);

    res.status(200).json({
      success: true,
      message: "Your Message Has Been Sent.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.webForm = async (req, res) => {
  try {
    const { webUrl, email } = req.body;
    if (!webUrl || !email) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    const to = process.env.MY_MAIL;
    const subject = "InFront Web Workers ";
    const text = `Sir My WebSite URL: ${webUrl}. \n Contact me this email ${email}`;

    await sendEmail(to, subject, text);

    res.status(200).json({
      success: true,
      message: "Your Message Has Been Sent.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.orderForm = async (req, res) => {
  try {
    const {
      name,
      lastName,
      companyName,
      country,
      state,
      streetAdress,
      city,
      postcode,
      phone,
      email,
      prodQty,
      prodName,
      prodPrice,
    } = req.body;
    if (
      !name ||
      !lastName ||
      !country ||
      !state ||
      !streetAdress ||
      !city ||
      !postcode ||
      !phone ||
      !email
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    const to = process.env.MY_MAIL;
    const subject = "InFront Web Workers Orders ";
    const text = `Name: ${name} \n Last Name: ${lastName} \n${
      companyName ? `Company Name: ${companyName}` : ""
    } \n Country: ${country} \n State: ${state}/n Adress: ${streetAdress} /n City: ${city} \n Zip Code: ${postcode}\n Phone Number: ${phone}\n Email: ${email}\n ProductName: ${prodName}\n Product Price: ${prodPrice}\n Product Quality: ${prodQty}`;

    await sendEmail(to, subject, text);

    res.status(200).json({
      success: true,
      message: "Order Placed SuccessFully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
