/*jshint esversion: 6*/

//technologies tool tips
$(() => { $('[data-toggle="tooltip"]').tooltip() })

//emailjs
window.onload = () => {
  document.querySelector('#contact-form').addEventListener('submit', (event) => {
    event.preventDefault()
    emailjs.send("smtp_server","template_sONPlQTz", {})
      .then((res) => {
        console.log("SUCCESS. status=%d, text=%s", res.status, res.text)
      }, (err) => {
        console.log("FAILED. error=", err)
    })
  })
}