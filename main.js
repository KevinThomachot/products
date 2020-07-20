//pour s'assurer qu'on puisse récupérer les éléments à manipuler
//on demande au script d'attendre que le DOM soit chargé

//on définit une fonction anonyme de callback qui s'executera au moment ou le DOM sera entièrement chargé
document.addEventListener('DOMContentLoaded', () => {
    //on récupère les éléments nécessaires au traitement de notre ToDoList
    let taskField = document.getElementById('taskField');
    let taskAdd = document.getElementById('taskAdd');
    let tasks = document.getElementById('tasks');
    

    //on définit une action lors du clic sur taskAdd 
    taskAdd.addEventListener('click', () => {
        //si notre champ input possède une valeur 
        if (taskField.value) {
            //on crée un nouvel élément li à rajouter dans notre liste
            let newTask = document.createElement('li');
            //on récupère le contenu du champ input taskField
            //et on le place dans notre nouvel element li
            newTask.textContent = taskField.value;
            //on réinitialise notre champ 
            taskField.value = "";
            //et on redonne le focus à notre champ d'inputd
            taskField.focus();
    
            //on crée notre element button
            let taskDelete = document.createElement('button');
            taskDelete.textContent = "x";
    
            //on lui assigne un eventListener
            taskDelete.addEventListener('click', (event) => {
                //lors du clic on supprime le parent du bouton qui sera notre li
                event.target.parentNode.remove();
            });
    
            //on gère le fait de barrer une tache lors du clic
            newTask.addEventListener('click', (event) => {
                let task = event.target; 
                //classList.toggle permet de donner une classe si elle n'est pas déjà présente, l'enlever si elle est déjà présente
                task.classList.toggle('strike');
            });
            //on l'insère dans notre li
            newTask.appendChild(taskDelete);
    
            //on ajoute ensuite notre li dans notre ul
            tasks.appendChild(newTask);
        }    
    });

});
