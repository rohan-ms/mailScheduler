to create new schedule
POST http://localhost:5000/api/v1/mail

use below example JSON body for post request
{
"toMail":"example@gmail.com",
"scheduledDate":"2022-03-04 23:22:00",
"body":"required text"
}

to get all scheduled mails

    GET http://localhost:5000/api/v1/mail

to delete specific scheduled mail

    DELETE http://localhost:5000/api/v1/mail/_id

to update specific scheduled mail

    PUT http://localhost:5000/api/v1/mail/_id

use below example JSON body for put request
{
"toMail":"example@gmail.com",
"scheduledDate":"2022-03-04 23:22:00",
"body":"required text"
}

to get failed/waiting scheduled mail

    GET http://localhost:5000/api/v1/mail/unsent

Kindly change database configuration from app.js as necessary
