import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { NgForOf, NgStyle, NgClass } from "@angular/common";

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    NgForOf,
    NgStyle,
    NgClass
  ],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  categories = [
    {
      name: 'Globální',
      faqs: [
        {
          question: 'Jak se napojím na server Moonix.cz?',
          answer: 'Po zapnutí Minecraftu klikněte na tlačítko "Multiplayer" a následně "Add Server". Pojmenujete si server jak chcete a napíšete adresu projektu <span class="highlight-blue">play.moonix.cz</span>! Klikněte "Join" a můžete hrát!',
          open: false
        },
        {
          question: 'Napojil/a jsem se na server a vidím před sebou nápis Moonix. Co mám dělat?',
          answer: 'Na našem serveru je pro hraní vyžadována registrace. Na klávesnici stiskněte tlačítko "T" a napište /register <span class="highlight-bold-blue">[heslo] [hesloZnovu]</span> (pokud jste již na serveru byli, stačí /login <span class="highlight-bold-blue">[heslo]</span>)',
          open: false
        },
        {
          question: 'S jakou verzí se mohu na server napojit?',
          answer: 'Náš server bude vždy primárně tvořen a zaměřován na tu <span class="highlight-blue">nejnovější verzi</span>. Silně tedy doporučujeme se napojit s <span class="highlight-bold-blue">nejaktuálnější verzí</span>.',
          open: false
        },
        {
          question: 'Jak funguje VIP a kde si ho můžu koupit?',
          answer: 'Bez VIP a podobných služeb které poskytujeme by nebylo možné server provozovat. V prvním případě tím podpoříte chod serveru a zároveň získáte mnoho výhod, které si můžete přečíst napsáním příkazu /vip na daných serverech.<br><br> VIP a jiné produkty lze zakoupit na našem obchodě obchod.moonix.cz',
          open: false
        },
        {
          question: 'Koupil jsem si produkt ve vašem obchodě a nic mi nepřišlo',
          answer: 'Zachovej klid, vše se hned vyřeší. Než dorazí daný produkt přímo na tvůj účet, tak to může zabrat i několik minut. Pokud jsi stále nic neobdržel, zkus se odpojit a znovu připojit. V nejhorším případě se vše může vyřešit v ticketu na našem Discordu!',
          open: false
        },
        {
          question: 'Zapomněl jsem heslo nebo si ho chci změnit',
          answer: 'Pokud jsi zapomněl/a své heslo, kontaktuj nás na Discordu! Pokud máš k účtu přístup a své heslo víš, použij na Lobby serveru příkaz /changepass <span class="highlight-blue">[staréHeslo] [novéHeslo]</span>',
          open: false
        },
        {
          question: 'Dostal jsem ban/trest neprávem, co bych měl dělat?',
          answer: 'Pokud máš dojem, že ti byl trest udělen neprávem, ihned nás kontaktuj na našem Discordu prostřednictvím ticketu.',
          open: false
        },
        {
          question: 'Chtěl bych se stát součastí týmu, je nábor otevřený?',
          answer: 'Na našem projektu jsou nábory otevřeny neustále! Pokud máš zájem stát se součástí týmu, založ si na Discordu ticket s příslušnou kategorií.',
          open: false
        },
        {
          question: 'Měl/a bych zájem o spolupráci',
          answer: 'Spolupráce navazujeme pouze v případě zájmu o YouTube/TikTok Rank. Pokud tuto podmínku splňuješ, kontaktuj nás na Discordu!',
          open: false
        }
      ]
    },
    {
      name: 'BoxFight',
      faqs: [
        {
          question: 'Je týmování mezi hráči povoleno?',
          answer: 'Teamování povoleno není. Týmování je povoleno pouze v klanu, nebo když spolu mají uzavřené manželství (/marry)',
          open: false
        },
        {
          question: 'K čemu slouží EXP Levely a jak je získávat?',
          answer: 'Za EXP Levely si lze zakoupit mnoho různých předmětů napříč celým BoxFight serverem (Jídlo, Speciální předměty, Odemykání evolucí, Ruleta, a mnoho dalšího).<br><br> Získavat je lze ze zabíjení hráčů, plnění úkolů, beden, mini-eventů, vrtáku a dále!',
          open: false
        },
        {
          question: 'Co jsou to Evoluce a jak si je vylepšuji?',
          answer: 'Vylepšování Evolucí je primárním cílem hráče. Při každém vylepšení na novou úroveň se hráči odemkne mnoho nových prvků, které mohou výrazně ovlivnit styl hraní (zóny, předměty, vylepšení). Vylepšení na novou úroveň vyžaduje určité podmínky, abychom zamezili rychlému pokroku za malý časový úsek.',
          open: false
        },
        {
          question: 'Zůstanou mi předměty a EXP když umřu?',
          answer: 'Při úmrtí hráče vypadne z inventáře 50% jakýchkoliv předmětů. VIP v tomto případě nemají žádnou výhodu.<br><br>V případě s EXP Levelama je to trochu jinak. Jestliže zemřete, ztratíte všechny EXP Levely, které máte u sebe. Vyjímkou jsou ranky VIP - Meteor a Tiger, které mají 50% šanci, že jim EXP Levely budou ponechány. Pokud nechcete o své EXP Levely přijít, můžete si je uschovat ve svojí Úschovně.',
          open: false
        },
        {
          question: 'Jak se dají získat lepší věci?',
          answer: 'U nás se dá řídit takovým nepsaným pravidlem "Čím nebezpečnější místo, tím lepší odměny". Je tedy pochopitelné, že v zóně, kde je PvP zapnuto budou lepší odměny než v zóně bez Pvp!',
          open: false
        },
        {
          question: 'Kdo a jak si může založit klan? Jak se napojím ke kamarádovi?',
          answer: 'Svůj klan si může založit úplně každý! Být součástí klanu vám přinese mnoho výhod jako např. klan bednu a mnoho dalšího!<br><br>Klan si vytvoříte příkazem /clan create [název] a ke kamarádovi se napojíte příkazem /clan accept [názevKlanu] (je ale nutné, aby jsi byl/a majitelem klanu pozván/a - /clan invite [jménoHráče]',
          open: false
        },
        {
          question: 'Co je to BoxPass a v čem je BoxPass+ lepší?',
          answer: 'BoxPass je formou Battle Passu přizpůsobený našemu BoxFightu! Každých X Úrovní si můžete vyzvednout odměnu. Nové úrovně získáváte plněním BoxPass úkolů.<br><br>V případě vlastnění BoxPass+ vás čeká odměna k vyzvednutí na každé úrovni! Nachází se zde unikátní předměty, které lze získat pouze prostřednictvím našeho obchodu!',
          open: false
        },
        {
          question: 'Mám pocit, že mě hráč zabil když cheatoval, co mám dělat?',
          answer: 'V takovém případě doporučujeme nahrávat svůj herní zažitek po celou dobu hraní u nás, aby jste měli případný důkaz, který můžete použít v ticketu na Discordu jako důkaz!',
          open: false
        },
        // Add more BoxFight-specific FAQs here
      ]
    },
    {
      name: 'Survival',
      faqs: [
        {
          question: 'Již Brzy',
          answer: '...',
          open: false
        },
        // Add more Survival-specific FAQs here
      ]
    }
  ];

  selectedCategory = this.categories[0];

  constructor(private sanitizer: DomSanitizer) {}

  toggleFaq(index: number): void {
    this.selectedCategory.faqs[index].open = !this.selectedCategory.faqs[index].open;
  }

  setCategory(category: any): void {
    this.selectedCategory = category;
  }

  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
