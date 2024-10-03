document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');

    const nom = document.getElementById("nom");
    const prenom = document.getElementById("prenom");
    const entreprise = document.getElementById("entreprise");
    const phone = document.getElementById("phone");
    const mail = document.getElementById("mail");
    const subject = document.getElementById("subject");
    const text = document.getElementById("text");

    function validateForm() {
        if (!nom.value || !prenom.value || !entreprise.value || !phone.value || !mail.value || !subject.value || !text.value) {
            alert("Tous les champs sont obligatoires !");
            return false;
        }
        if (!/^\d+$/.test(phone.value)) {
            alert("Le numéro de téléphone doit contenir uniquement des chiffres.");
            return false;
        }
        return true;
    }

    function sendEmail() {
        const bodymessage = `nom : ${nom.value}<br> prénom : ${prenom.value}<br> entreprise : ${entreprise.value}<br> 
        télé : ${phone.value}<br> email : ${mail.value}<br> sujet: ${subject.value}<br> message : ${text.value}`;
        
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "santcall.dr@gmail.com",
            Password: "179EAF5FF1FA2B2E491DC3E0107ADBF79B46",
            To: 'santcall.dr@gmail.com',
            From: "santcall.dr@gmail.com",
            Subject: subject.value,
            Body: bodymessage
        }).then(
          message => {
            alert(message);
            clearInputs(); 
            location.reload();// Vider les champs après l'envoi
          }
        );
    }

    function clearInputs() {
        nom.value = "";
        prenom.value = "";
        entreprise.value = "";
        phone.value = "";
        mail.value = "";
        subject.value = "";
        text.value = "";
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Empêcher la soumission classique du formulaire
        if (validateForm()) {
            sendEmail();
        }
    });

    // Clear inputs when the phone input is clicked
    
});
