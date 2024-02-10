# Digital Health Database Management

Deployed website link : https://digi-health.vercel.app/

## How to connect to localhost
(Requires NodeJS to be installed on the system)
- Open terminal
- Change directory to 'frontend'
- Type npm start


## Admin
Admin is the person who has the power to authorise other doctors who then will be able to interact with patients' health records and reports.
- The admin cannot edit or look previous reports or diagnosis of patients
- The admin can add and authorise doctors


## Doctor

Authorised doctors have to be first added in the Doctors page, then given authority by the admin

A doctor,
- Can look patients' health reports by their public Key
- Can add patients to the existing records
- Cannot view details of or authorise other doctors
- Can add diagnosis and prescriptions to report

## Patient

A patient has to be first added by a doctor, where their name, blood type, and allergies have to be mentioned. This serves as a general health profile for the patient.
A doctor can then generate a report, mentioning the diagnosis and prescriptions along with the date of diganosis.

The general heath profile of an added patient can be looked up by a doctor prior to the diagnosis, along with the latest report from before.

- A patient cannot view anyone else's report except of their own

