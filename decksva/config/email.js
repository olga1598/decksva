// Function to generate the email layout

function generateEmailBody(data) {
    const fname = data.fname;
    const lname = data.lname;
    const email = data.email;

    const emailText = `<div>
                <table style="width:100%">
                    <tr>
                    <th><strong>Name:</strong></th>
                    </tr>
                    <tr>
                    <td align="center">${fname} ${lname}</td>
                    </tr>
                </table>
                <table style="width:100%">
                    <tr>
                    <th><strong>Phone:</strong></th>
                    </tr>
                    <tr>
                    <td align="center">${data.phone}</td>
                    </tr>
                </table>
                <table style="width:100%">
                    <tr>
                    <th><strong>Email:</strong></th>
                    </tr>
                    <tr>
                    <td align="center">${email}</td>
                    </tr>
                </table>
                <table style="width:100%">
                    <tr>
                    <th><strong>Address:</strong></th>
                    </tr>
                    <tr>
                    <td align="center">${data.address1} ${data.address2}, ${data.city}, ${data.state}, ${data.zip}, ${data.country}</td>
                    </tr>
                </table>
                <table style="width:100%">
                    <tr>
                    <th><strong>Description:</strong></th>
                    </tr>
                    <tr>
                    <td align="center">${data.text}</td>
                    </tr>
                </table>
                </div>`
    return emailText;
}

module.exports = generateEmailBody;