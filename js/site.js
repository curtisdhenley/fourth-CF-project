function sendNewEmail() {
    alert('Message sent!')
}

function captureEmailAddress() {

    // get the email address input element
    const recipient = document.getElementById('email')
    // get the email value from the input
    let emailAddress = recipient.value
    // make an alert
    // give the alert the email addy that was entered
    alert(`Message sent to: ${emailAddress}!`)
}

function sendEmailWithSubject() {
    const subject = document.getElementById('subject')
    let subjectValue = subject.value
    const incomingSubject = document.getElementById('incomingSubject')
    alert('Subject Changed!')
    incomingSubject.innerHTML = subjectValue
}

function modalChange() {

    const modalFrom = document.querySelector('.modal-from')
    const modalSubject = document.querySelector('.modal-subject')
    const modalText = document.querySelector('.modal-text')

    const recipient = document.getElementById('email')
    const subject = document.getElementById('subject')
    const message = document.getElementById('message')

    const emailSender = document.querySelector('.emailSender')
    const incomingSubject = document.querySelector('.incomingSubject')
    const emailPreview = document.querySelector('.emailPreview')

    alert('Message sent!')

    emailSender.innerHTML = recipient.value
    incomingSubject.innerHTML = subject.value
    emailPreview.innerHTML = message.value

    modalFrom.textContent = recipient.value
    modalSubject.textContent = subject.value
    modalText.textContent = message.value

}