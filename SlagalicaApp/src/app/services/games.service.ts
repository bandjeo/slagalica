import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  public anagrams =  [
    {
      letters: ['e', 'o', 'n', 'k', 't', 'n', 'a', 'a', 'm', 'j', 'p', 'o'],
      solution: 'komponenta'
    },
    {
      letters: ['v', 'b', 'r', 'a', 'o', 'l', 'r', 'e', 'z', 't', 'b', 'a'],
      solution: 'obzervabla'
    }
  ]

  numbers = [
    {
      numbers: [8, 1, 2, 2, 13, 16],
      goal: 132
    }
  ]

  symbolMap = ['bane', 'tref', 'pik', 'herc', 'karo', 'zvezda']

  symbols = [
    {
      goal: [1, 4, 2, 0]
    },
    {
      goal: [5, 1, 0, 3]
    }
  ]

  questions = [
    {
      text: "U toku životnig ciklusa komponente, koliko puta se poziva ngOnInit?",
      answer1: "2",
      answer2: "Na svaku promenu",
      answer3: "0",
      answer4: "1",
      right: "1"
    },
    {
      text: "Koja anotacija se nalazi iznad servisa generisanog pomoću ng g service?",
      answer1: "@Service",
      answer2: "@Component",
      answer3: "@Output",
      answer4: "@Injectable",
      right: "@Injectable"
    },
    {
      text: "URL na kom se pristupa nekom enitetu drugačije se naziva...",
      answer1: "Endpoint",
      answer2: "Server",
      answer3: "REST",
      answer4: "API",
      right: "Endpoint"
    },
    {
      text: "Šta od navedenog nije ugrađena Angular direktiva?",
      answer1: "*ngFor",
      answer2: "routerLink",
      answer3: "ngModel",
      answer4: "*ngIf",
      right: "routerLink"
    },
    {
      text: "Kako bi sačekao odgovor na HTTP zahtev, HttpClient koristi...",
      answer1: "Observable",
      answer2: "map",
      answer3: "Servis",
      answer4: "pipe",
      right: "Observable"
    },
    {
      text: "Za šta se koristi @Output?",
      answer1: "Komunikacija roditelj-dete",
      answer2: "Reakcija na događaj",
      answer3: "Komunikacija dete-roditelj",
      answer4: "Injekcija",
      right: "Komunikacija dete-roditelj"
    },
    {
      text: "Kog tipa je ActivatedRoute.params?",
      answer1: "any",
      answer2: "Observable<Params>",
      answer3: "Params",
      answer4: "subscribe",
      right: "Observable<Params>"
    },
    {
      text: "Šta kao parametar prima funkcija subscribe?",
      answer1: "podatke",
      answer2: "funkciju",
      answer3: "objekat tipa any",
      answer4: "model",
      right: "funkciju"
    },
    {
      text: "Po RESTu, koja HTTP metoda se koristi za update?",
      answer1: "PUT",
      answer2: "POST",
      answer3: "GET",
      answer4: "DELETE",
      right: "PUT"
    },
    {
      text: "Ša vrši mapiranje putanje rute na komponentu?",
      answer1: "router-outlet",
      answer2: "routerLink",
      answer3: "Objekat rute",
      answer4: "ActivatedRoute",
      right: "Objekat rute"
    }
  ]

  connections = {
    question: "Povežite koncepte sa elementima njihove implementacije",
    column1: [
      {
        id: 1,
        name: 'Komunikacija roditelj-dete',
        background: 'white',
        color: 'grey'
      },
      {
        id: 2,
        name: 'Rutiranje',
        background: 'white',
        color: 'grey'
      },
      {
        id: 3,
        name: 'Uslovni prikaz html elementa',
        background: 'white',
        color: 'grey'
      },

      {
        id: 4,
        name: 'Dvosmerna veza',
        background: 'white',
        color: 'grey'
      },

      {
        id: 5,
        name: 'Komunikacija dete-roditelj',
        background: 'white',
        color: 'grey'
      },

      {
        id: 6,
        name: 'Slanje HTTP zahteva',
        background: 'white',
        color: 'grey'
      },

      {
        id: 7,
        name: 'Interpolacija',
        background: 'white',
        color: 'grey'
      },
      {
        id: 8,
        name: 'Query parametri',
        background: 'white',
        color: 'grey'
      }
    ],
    column2: [
      {
        id: 3,
        name: '*ngIf'
      },
      {
        id: 6,
        name: 'HttpClientModule'
      },
      {
        id: 1,
        name: '@Input'
      },
      {
        id: 7,
        name: '{{}}'
      },
      {
        id: 5,
        name: '@Output'
      },
      {
        id: 2,
        name: '<router-outlet>'
      },
      {
        id: 4,
        name: 'ngModel'
      },
      {
        id: 8,
        name: 'HttpParams'
      }
    ]
  }

  associations = [
    {
      column1: {
        a: 'parametar',
        b: '[routerLink]',
        c: 'putanja',
        d: 'ActivatedRoute',
        solution: 'Rutiranje'
      },
      column2: {
        a: 'Modal',
        b: 'biblioteka',
        c: 'komponenta',
        d: 'ng add',
        solution: 'NgBootstrap'
      },
      column3: {
        a: 'input',
        b: 'submit',
        c: 'ngModel',
        d: 'popunjavanje',
        solution: 'Forma'
      },
      column4: {
        a: 'zahtev',
        b: 'protokol',
        c: 'query parametri',
        d: 'metoda',
        solution: 'Http'
      },
      finalSolution: 'Moduo'
    },
    {
      column1: {
        a: 'tag',
        b: 'atribut',
        c: 'interpolacija',
        d: 'element',
        solution: 'html'
      },
      column2: {
        a: 'stil',
        b: 'klasa',
        c: 'id',
        d: 'nasledjivanje',
        solution: 'css'
      },
      column3: {
        a: 'roditelj-dete',
        b: 'klijent-server',
        c: 'servis',
        d: 'dete-roditelj',
        solution: 'komunikacija'
      },
      column4: {
        a: 'klasa',
        b: 'kod',
        c: 'tip',
        d: 'programski jezik',
        solution: 'typescript'
      },
      finalSolution: 'Komponenta'
    },
  ]




}
