import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmplt',
  templateUrl: './cmplt.component.html',
  styleUrls: ['./cmplt.component.css']
})
export class CmpltComponent implements OnInit {

  items: any;

  constructor() {
  }

  ngOnInit() {
    this.items = [
      {
        hidden: false, title: 'A propos de Intermap', icon: 'assets/img/logo_negru_no_bg.png', icontext: 'assets/img/intremapRight.jpg',
        tag: 'what-we-offer', text: "Nous visons à faciliter l'accès des étudiants aux stages en rassemblant toutes les informations " +
          "en un seul endroit. InterMap est une plateforme qui regroupe des dizaines"
       +" d'entreprises d'interphonie, ouverte au public.Pour explorer la carte des stages,"
        +"il vous suffit de cliquer sur le bouton de connexion et ensuite de créer un compte"
          +"Après cela, chaque emplacement sur interMAP est le vôtre à explorer."
      },
      {
        hidden: true, title: 'Pour etudiants', icon: 'assets/img/ForStud.png', icontext: 'assets/img/ForStudentsImage.jpg',
        tag: 'for-students', text:"Si vous êtes étudiant, il vous suffit de vouloir l'un de nos stages. Consultez la liste que nous avons préparée "
            +"pour vous, et si au moins une vous convient. "
          +"Tout ce dont vous avez besoin est de créer un compte, de renseigner quelques données et de postuler pour le stage de rêve."
      },
      {
        hidden: true, title: 'Pour entreprises', icon: 'assets/img/forComp.jpg', icontext: 'assets/img/ForCompaniesImage.jpg',
        tag: 'for-companies', text: "En tant qu'entreprise, vous êtes l'élément clé du développement étudiant. Il ne vous reste plus"
          + "qu'à venir rencontrer les étudiants avec des offres de stages et une ouverture d'esprit pour apprendre de nouvelles choses."
          + "Préparez des stages intéressants et éducatifs et téléchargez-les sur notre plateforme. Une fois que celui-ci est public,"
          + "vous pouvez voir en temps réel le nombre de candidats inscrits, "
          + "vous pouvez les comparer selon les critères établis par vous et vous avez tout à disposition à l'aide de l'application."
      },
      {
        hidden: true, title: 'A propos de convention', icon: 'assets/img/cv.jpg', icontext: 'assets/img/ForCVImage.jpg',
        tag: 'about-cv', text:
          "En tant qu'entreprise, vous êtes clé du développement étudiant. Il ne vous reste plus qu'à venir rencontrer"
          +"les étudiants avec des offres de stages et une ouverture d'esprit pour apprendre de nouvelles choses."
          +"Préparez des stages intéressants et éducatifs et téléchargez-les sur notre plateforme. Une fois que celui-ci est public,"
        +"vous pouvez voir en temps réel le nombre de candidats inscrits,"
        +"vous pouvez les comparer selon les critères établis par vous et vous avez tout à disposition à l'aide de l'application. "
      },
      {
        hidden: true, title: 'Pourquoi interMap', icon: 'assets/img/information.png', icontext: 'assets/img/right-side-image_5.jpg',
        tag: 'photos', text: '\n' +
          "En tant qu'entreprise, vous êtes clé du développement étudiant. Il ne vous reste plus qu'à venir rencontrer "
          + "les étudiants avec des offres de stages et une ouverture d'esprit pour apprendre de nouvelles choses. "
          + "Préparez des stages intéressants et éducatifs et téléchargez-les sur notre plateforme. "
          + "Une fois que celui-ci est public, vous pouvez voir en temps réel le nombre de candidats inscrits,"
          + "tous pouvez les comparer selon les critères établis par vous et vous avez tout à disposition à l'aide de l'application. "
      },
    ];
  }

  toggle(items: any, item: any) {
    for (const itemm of items) {
      itemm.hidden = true;
    }
    item.hidden = !item.hidden;
  }
}
