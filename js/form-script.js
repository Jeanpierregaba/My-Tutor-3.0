document.getElementById('submission-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  // Validation des champs
  const form = e.target;
  const errors = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;

  // Vérifier les champs obligatoires
  if (!form.nom.value.trim()) errors.push('Le champ "Nom" est requis.');
  if (!form.prenom.value.trim()) errors.push('Le champ "Prénoms" est requis.');
  if (!form.email.value.trim() || !emailRegex.test(form.email.value)) {
    errors.push('Un email valide est requis.');
  }
  if (form.site.value.trim() && !urlRegex.test(form.site.value)) {
    errors.push('Le site web doit être une URL valide.');
  }

  if (errors.length > 0) {
    document.getElementById('response-message').textContent = errors.join(' ');
    return;
  }

  // Récupérer les données du formulaire
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // URL du script Google Apps Script
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwRHk7p6uiwvkHpFgH1cq_Jw4nXQZNLJBJFfHmwAExVWXvyovI6DmjD9RL2Ac-eO3J7zw/exec';

  try {
    // Envoyer les données
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: new URLSearchParams(data),
    });

    if (response.ok) {
      responseMessage.textContent = 'Données envoyées avec succès !';
      responseMessage.style.color = 'green';
      form.reset();
    } else {
      throw new Error('Erreur lors de l\'envoi des données');
    }
  } catch (error) {
    document.getElementById('response-message').textContent = 'Erreur : ' + error.message;
    document.getElementById('response-message').style.color = 'red';
  }
});

// Afficher l'indicateur de chargement
const responseMessage = document.getElementById('response-message');
responseMessage.textContent = 'Envoi en cours...';
responseMessage.style.color = 'blue';
responseMessage.innerHTML += `<span class="loading"></span>`;

if (response.status === 404) {
  throw new Error('URL incorrecte. Vérifiez l\'URL du script Google.');
} else if (response.status >= 500) {
  throw new Error('Erreur serveur. Réessayez plus tard.');
} else {
  throw new Error('Erreur inconnue.');
}
