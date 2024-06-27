import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {NgForOf} from "@angular/common";
import {Rule} from "./model/rule.model";
import {animate, style, transition, trigger} from "@angular/animations";
import {Category} from "./model/category.model";

@Component({
  imports: [
    FooterComponent,
    NavbarComponent,
    NgForOf
  ],
  selector: 'app-rules',
  standalone: true,
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class RulesComponent {

  constructor() {

  }

  categories: Category[] = [
    {
      title: '§1 Všeobecná a podrobná pravidla projektu Moonix.cz',
      rules: [
        { section: "§1", rule: "1.1", content: "Je zakázáno využívat veškeré modifikace Minecraftu, které zvýhodňují daného hráče oproti ostatním." },
        { section: "§1", rule: "1.2", content: "Hráč má zakázáno vytvářet si vícero účtů za účelem získání výhod, či za účelem obcházení trestu." },
        { section: "§1", rule: "1.3", content: "Je zakázáno, využívat jakékoliv chyby, či bugu, který se ve hře nachází a hráč má povinnost tuto chybu nahlásit." },
        { section: "§1", rule: "1.4", content: "Je zakázáno jakkoliv urážet, či ubližovat ostatním hráčům, i za účelem pobavení." },
        { section: "§1", rule: "1.5", content: "Hráč má povinnost nahlásit jiného hráče, pokud má podezření na využívání modifikovaného klientu, či bugu." },
        { section: "§1", rule: "1.6", content: "Je zakázáno jakkoliv účelně přetěžovat server, pro zkažení herního zážitku ostatním hráčům." },
        { section: "§1", rule: "1.7", content: "Hráč má právo na jakýkoliv dotaz, který se týká projektu Moonix.cz." },
        { section: "§1", rule: "1.8", content: "Všeobecná pravidla sítě se mohou změnit kdykoliv bez udání důvodu či upozornění." },
        { section: "§1", rule: "1.9", content: "Je zakázáno používat nick, který je nevhodný, nebo se podobá nicku jakéhokoliv člena Teamu či YouTubera." },
        { section: "§1", rule: "1.10", content: "Je zakázáno nabádat jakéhokoliv hráče k porušování pravidel a nevhodných či jinak nepřípustných aktivit." },
        { section: "§1", rule: "1.11", content: "Hráč má povinnost respektovat každého člena Teamu." },
        { section: "§1", rule: "1.12", content: "Zda-li hráč poruší pravidla, bude mu udělen trest dle banovacích tabulek projektu. Jestliže prohřešek přesně neodpovídá žádnému bodu z tabulky, má člen Teamu právo na potrestání hráče podle svého uvážení." },
        { section: "§1", rule: "1.13", content: "Jestliže je hráč nespokojen se svým trestem, nebo se domnívá, že jde o omyl, může se obrátit na podporu na Discordu či webu. Jinde mu žádost nebude přijata." },
        { section: "§1", rule: "1.14", content: "Na serveru je přísně zakázána jakákoliv propagace jiných serverů, YouTube či Twitch tvůrců a jakýchkoliv odkazů odkazující na stránky jiné, než sítě Moonix.cz, výjimky vyhrazeny." },
        { section: "§1", rule: "1.15", content: "Je zakázáno lhát/klamat ostatním hráčům a členům Teamu." },
        { section: "§1", rule: "1.16", content: "Je nepřípustné jakékoliv obchodování, kde na obou stranách transakce nefigurují prostředky ekonomické měny, či herních předmětů sítě Moonix.cz." },
        { section: "§1", rule: "1.17", content: "V chatu se vyjadřujte slušně. Nesdílejte či jinak nešiřte obsah, který souvisí s pornografickým, sexistickým či teroristickým obsahem." },
        { section: "§1", rule: "1.18", content: "V rámci komunikace se nevyjadřuje k žádných etnickým rasám, politickým ideologiím či stranám. Vyhněte se šíření falešných a nepřesných informací." },
        { section: "§1", rule: "1.19", content: "Nezveřejňujte žádné citlivé a osobní informace žádného hráče či člena Teamu." },
        { section: "§1", rule: "1.20", content: "Při porušení pravidel se délka/váha trestu nesčítá. V potaz je brána ta, která má největší délku/váhu." },
        { section: "§1", rule: "1.21", content: "Platí zde přísný zákaz používání VPN (Virtuální privátní síť). Jestliže potřebujete udělit výjimku, kontaktujte nás na discordu." },
        { section: "§1", rule: "1.22", content: "Je zakázáno obviňovat jakéhokoliv hráče z porušování či zneužívání pravidel bez validního důkazu." },
        { section: "§1", rule: "1.23", content: "Jako validní důkaz lze považovat ten, který je dobře posuzovatelný a lze z něho vyčíst datum a čas pořízení. Důkazem může být screenshot, video či hlasová nahrávka. Důkaz starší 7 dnů nebude považován za platný." },
        { section: "§1", rule: "1.24", content: "Vytváření a sdílení falešných důkazů je v rozporu s pravidly sítě Moonix.cz." },
        { section: "§1", rule: "1.25", content: "Veškerá data a informace sítě Moonix.cz jsou zároveň považována jako její majetek. Při ztrátě či poškození nemá žádný hráč právo na náhradu škody." },
        { section: "§1", rule: "1.26", content: "Jestliže je hráč nezletilý, za veškeré akce a škody napáchány hráčem zodpovídá zákonný zástupce." },
        { section: "§1", rule: "1.27", content: "Jakýkoliv nákup proveden přes platební bránu projektu Moonix.cz je brán jako příspěvek a podporu projektu. Jestliže pravidla poruší hráč, který server podpořil, nebude na to brán žádný ohled." },
        { section: "§1", rule: "1.28", content: "Nákupy, které byly provedeny mimo platební bránu projektu Moonix.cz, budou automaticky brány jako porušení pravidla a hráč nebude mít žádný nárok na náhradu škody." },
        { section: "§1", rule: "1.29", content: "Stahování map pomocí jakýchkoliv modifikací bez povolení je přísně zakázáno." },
        { section: "§1", rule: "1.30", content: "Je zakázáno duplikovat či jinak využívat bugů itemů za účelem obohacení. Jestliže chybu objevíte, jste povinní chybu nahlásit na discordu projektu Moonix.cz." },
        { section: "§1", rule: "1.31", content: "Je přísně zakázáno obchodovat s herní měnou či předměty za reálné peníze nebo předměty." },
        { section: "§1", rule: "1.32", content: "Snaha obejít automatický AFK systém sítě Moonix.cz jakýmkoliv způsobem, je přísně zakázán." },
        { section: "§1", rule: "1.33", content: "Každý hráč, který se registruje na webu nebo minecraft serveru, automaticky souhlasí se všemi pravidly sítě a GDPR (Ochrana osobních údajů)." },
        { section: "§1", rule: "1.34", content: "Je zakázáno porušovat zákony České a Slovenské republiky." }
      ]
    },
    {
      title: '§2 Pravidla nákupů a plateb',
      rules: [

        { section: "§2", rule: "2.1", content: "Pravidla “1.27” a “1.28” jsou do této podkategorie zahrnuta." },
        { section: "§2", rule: "2.2", content: "Veškeré zakoupené výhody lze dosáhnout běžným hraním na serveru. Výjimkou jsou některé kosmetické doplňky a přístupy do zvláštních částí na serveru." },
        { section: "§2", rule: "2.3", content: "To, že hráč finančně podpořil server neznamená, že nebude stíhán za případné porušení pravidel. Při řešení trestu se nebere ohled, zda hráč server v minulosti podpořil či nikoliv." },
        { section: "§2", rule: "2.4", content: "V rámci poděkování našim podporovatelům, si vyhrazujeme právo na jejich upřednostnění při řešení problému na podpoře." },
        { section: "§2", rule: "2.5", content: "Pro všechny hráče, kteří vlastní jakýkoliv prémiový rank platí stejná pravidla jako pro hráče, kteří prémiový rank na svém účtu nevlastní." },
        { section: "§2", rule: "2.6", content: "Prémiové ranky nelze přenášet z jednoho účtu na druhý jestliže se nejedná o účet stejného hráče, který si produkt zakoupil (lze se s tímto například setkat při přechodu z warez účtu na nově zakoupený prémiový)." },
        { section: "§2", rule: "2.7", content: "Při otevírání beden pomocí klíčů se nejedná o hazard, jelikož hráč vždy získá hodnotu minimálně odpovídající, ne-li větší, než hodnota samotného klíče." },
        { section: "§2", rule: "2.8", content: "Po zakoupení jakéhokoliv produktu v obchodě nemá žádný z hráčů nárok na vrácení peněz za žádné podmínky." },
        { section: "§2", rule: "2.9", content: "Projekt Moonix.cz není žádným způsobem spojena a není součástí společnosti Mojang AB." }
      ]
    },
    {
      title: '§3 Pravidla jednotlivých serverů',
      rules: [
        { section: "§3", rule: "3.1", content: "Vytvoření a následné hraní za alternativní účet za účelem vylepšení statistik na hlavním účtu je přísně zakázáno." },
        { section: "§3", rule: "3.2", content: "Jak již bylo zmíněno v pravidle “1.1”, platí zde přísný zákaz jakýchkoliv modifikací klienta." },
        { section: "§3", rule: "3.3", content: "Za veškeré herní předměty si ručíte sami." }
      ]
    },
    {
      title: '§4 Pravidla, povinnosti a práva Teamu',
      rules: [
        { section: "§4", rule: "4.1", content: "Team se rozumí jako skupina lidí, která zajišťuje plynulý chod serveru." },
        { section: "§4", rule: "4.2", content: "Každý člen Teamu má povinnost řešit každý problém ve svém nejlepším uvážení a v co nejkratším časovém úseku." },
        { section: "§4", rule: "4.3", content: "Každý člen Teamu má povinnost dodržovat směrnice daného týmu. Směrnice nejsou veřejně dostupné." },
        { section: "§4", rule: "4.4", content: "Lze se proti jakémukoliv rozhodnutí člena Teamu odvolat na podpoře sítě. Výjimkou je Vedení a hlavní pozice jednotlivých teamů - zde se nelze odvolat." },
        { section: "§4", rule: "4.5", content: "Každý člen Teamu je povinen informovat hlavní pozici svého příslušného týmu o všech provedených změnách (pokud směrnice neurčuje jinak)." },
        { section: "§4", rule: "4.6", content: "Každý člen Teamu je povinen mít na všech platformách stejný či podobný nick. Stejný profilový obrázek není požadován." },
        { section: "§4", rule: "4.7", content: "Žádný člen Teamu nesmí zneužít svých pravomocí. Zda-li tato situace nastane, projednává o ní a následně rozhoduje Leader, případně Majitel." },
        { section: "§4", rule: "4.8", content: "Žádný člen Developer, Helper a Builder Teamu nesmí působit na jiném veřejně známém projektu." },
        { section: "§4", rule: "4.9", content: "Pro každého člena Teamu platí stejná pravidla jako pro obyčejného hráče." },
        { section: "§4", rule: "4.10", content: "Každý člen Teamu je při potrestání hráče povinen uvést důvod trestu. Vytváří si důkaz kvůli případnémů odvolání hráče. Důkaz je ponecháván po dobu 5 dnů, po této časové lhůtě se lze odvolat, ale žádost bude pravděpodobně zamítnuta." },
        { section: "§4", rule: "4.11", content: "Žádný člen Teamu se nesmí povyšovat nad ostatní hráče nebo členy Teamu." },
        { section: "§4", rule: "4.12", content: "Členství v Teamu si nelze zakoupit." },
        { section: "§4", rule: "4.13", content: "Žádný člen Teamu nesmí poskytovat žádnému hráči žádné předměty, herní měnu, či jiné produkty. Výjimkou je pozice Admin, Leader a Majitel." },
        { section: "§4", rule: "4.14", content: "Nikdo ze členů A-Teamu není povinen odpovídat na soukromé zprávy." },
        { section: "§4", rule: "4.15", content: "Člen Vedení je povinen poskytovat informace o změnách všem hráčům prostřednictví changelogu na discordu v kanále s názvem aktualizace." }
      ]
    },
    {
      title: '§5 Discord server',
      rules: [
        { section: "§5", rule: "5.1", content: "Veškerá pravidla Discordu se nachází na komunitním Discord serveru Moonix.cz v kanále s názvem pravidla." },
        { section: "§5", rule: "5.2", content: "Každý člen, který se napojí na komunitní discord automaticky prohlašuje, že již dosáhl minimálního věku pro používání discordu 13-ti let." }
      ]
    },
    {
      title: '§6 Ochrana osobních údajů (GDPR)',
      rules: [
        { section: "§6", rule: "6.1", content: "Veškerá data zůstávají uložená na uložišti projektu Moonix.cz, která je chráněna proti odcizení, zneužití nebo ztrátě." },
        { section: "§6", rule: "6.2", content: "Projekt Moonix.cz sbírá data, kterými je IP, herní nickname a zašifrované heslo." },
        { section: "§6", rule: "6.3", content: "Náš web do prohlížeče ukládá soubory cookies, lze je smazat v nastavení prohlížeče." },
        { section: "§6", rule: "6.4", content: "Herní nickname slouží ke komunikaci a k případné identifikaci hráče. Nickname je vždy unikátní." },
        { section: "§6", rule: "6.5", content: "IP adresa slouží k detekování obcházení trestu nebo multi-accountů. K této informaci má přístup pouze Vedení Teamu." },
        { section: "§6", rule: "6.6", content: "IP adresa, která již byla přidána na blacklist sítě Moonix.cz již nemůže být odstraněna." },
        { section: "§6", rule: "6.7", content: "Všichni hráči mají právo na sdílení screenshotů, textových zpráv a hlasových záznamů bez svolení oběti bez svolení, v případě, že se jedná o validní důkaz." },
        { section: "§6", rule: "6.8", content: "Hráč má právo na kompletní smazání účtu a osobních údajů spojených s ním na síti Moonix.cz" }
      ]
    },
  ];
}
