document.addEventListener('DOMContentLoaded', () => {
  // Données de secours : le site continue de fonctionner même si le fichier data n'est pas chargé.
  const fallback = [
    {
      id:'ia', title:"Comprendre l'intelligence artificielle", level:'Débutant', duration:'4 semaines',
      description:"Les bases pour comprendre l'IA et l'utiliser de façon responsable.",
      modules:[
        {title:'Module 1 — Découvrir l’IA',lessons:['Qu’est-ce que l’intelligence artificielle ?','IA générative : texte, image et audio','Ce que l’IA sait faire… et ne sait pas faire'],exercise:'Créer une fiche qui explique l’IA avec 5 exemples du quotidien.',support:'Fiche mémo — vocabulaire de l’IA'},
        {title:'Module 2 — Bien utiliser un assistant IA',lessons:['Objectif et contexte','Donner des contraintes','Améliorer une réponse'],exercise:'Transformer 3 demandes vagues en prompts précis.',support:'Checklist du prompt efficace'},
        {title:'Module 3 — Vérifier les réponses',lessons:['Erreurs et hallucinations','Croiser les informations','Respecter les sources et la vie privée'],exercise:'Analyser une réponse IA et repérer 5 points à vérifier.',support:'Grille de vérification'},
        {title:'Module 4 — Mini-projet',lessons:['Choisir une idée','Planifier avec l’IA','Présenter son résultat'],exercise:'Créer un mini-projet utile avec un assistant IA.',support:'Canevas de projet NOVAIA'}
      ]
    },
    {
      id:'creation', title:'Création de contenu avec l’IA', level:'Débutant', duration:'3 semaines',
      description:'Imaginer, rédiger et organiser du contenu avec l’aide de l’IA.',
      modules:[
        {title:'Module 1 — Trouver des idées',lessons:['Brainstorming','Public et objectif','Calendrier de contenu'],exercise:'Créer 20 idées de contenus pour un thème choisi.',support:'Matrice d’idées'},
        {title:'Module 2 — Texte et storytelling',lessons:['Structure d’un texte','Ton et style','Réécriture'],exercise:'Créer puis améliorer une courte publication.',support:'Checklist rédaction'},
        {title:'Module 3 — Projet créatif',lessons:['Brief créatif','Production','Amélioration'],exercise:'Créer un mini-plan de contenu sur 7 jours.',support:'Template de brief'}
      ]
    },
    {
      id:'automation', title:'Automatisation et workflows', level:'Intermédiaire', duration:'3 semaines',
      description:'Comprendre comment relier des tâches pour gagner du temps.',
      modules:[
        {title:'Module 1 — Penser en workflow',lessons:['Déclencheur','Action','Résultat'],exercise:'Dessiner le workflow d’une tâche répétitive.',support:'Carte workflow'},
        {title:'Module 2 — IA + automatisation',lessons:['Entrées et sorties','Contrôles','Erreurs'],exercise:'Concevoir un workflow fictif de traitement de messages.',support:'Fiche logique'},
        {title:'Module 3 — Défi automatisation',lessons:['Cahier des charges','Test','Amélioration'],exercise:'Présenter une automatisation complète sur papier.',support:'Canevas défi'}
      ]
    },
    {
      id:'entrepreneurship', title:'Entreprendre avec l’IA', level:'Intermédiaire', duration:'4 semaines',
      description:'Passer d’une idée à un projet structuré en utilisant l’IA comme outil.',
      modules:[
        {title:'Module 1 — Trouver une idée',lessons:['Problème et solution','Public cible','Valeur'],exercise:'Formuler 3 idées et choisir la plus utile.',support:'Canvas idée'},
        {title:'Module 2 — Construire une offre',lessons:['Promesse','Fonctionnalités','Présentation'],exercise:'Créer une fiche d’offre simple.',support:'Template offre'},
        {title:'Module 3 — Prototype',lessons:['Maquette','Test utilisateur','Améliorations'],exercise:'Créer une première version de son projet.',support:'Checklist prototype'},
        {title:'Module 4 — Pitch final',lessons:['Raconter le projet','Montrer la valeur','Répondre aux questions'],exercise:'Préparer un pitch de 2 minutes.',support:'Plan de pitch'}
      ]
    }
  ];

  const formations = Array.isArray(window.NOVAIA_FORMATIONS) && window.NOVAIA_FORMATIONS.length
    ? window.NOVAIA_FORMATIONS
    : fallback;

  const list = document.querySelector('#formations');
  if (list) {
    list.innerHTML = formations.map(f => `
      <article>
        <span class="tag">${f.level}</span>
        <h3>${f.title}</h3>
        <p>${f.description}</p>
        <p><strong>${f.modules.length} modules</strong> · ${f.duration}</p>
        <a class="btn small" href="formation.html?id=${encodeURIComponent(f.id)}">Voir le programme →</a>
      </article>
    `).join('');
  }

  const course = document.querySelector('#course');
  if (course) {
    const id = new URLSearchParams(location.search).get('id') || 'ia';
    const f = formations.find(x => x.id === id) || formations[0];
    course.innerHTML = `
      <div class="course">
        <p class="eyebrow">${f.level.toUpperCase()} · ${f.duration}</p>
        <h1>${f.title}</h1>
        <p class="lead">${f.description}</p>
        <div class="actions">
          <a class="btn" href="inscription.html?formation=${encodeURIComponent(f.id)}">Prendre cette formation →</a>
          <a class="btn ghost" href="formations.html">Choisir un autre parcours</a>
        </div>
        ${f.modules.map((m,i) => `
          <article class="module">
            <span class="tag">MODULE ${i+1}</span>
            <h3>${m.title}</h3>
            <ul>${m.lessons.map(l => `<li>${l}</li>`).join('')}</ul>
            <p><strong>Exercice :</strong> ${m.exercise}</p>
            <p><strong>Support :</strong> ${m.support}</p>
          </article>
        `).join('')}
      </div>
    `;
  }

  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const msg = form.querySelector('.form-message');
      if (msg) msg.textContent = 'Merci ! Ta demande a bien été reçue. Cette version est une démonstration.';
    });
  });
});
