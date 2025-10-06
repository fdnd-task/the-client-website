# The Client - Website

## Code Conventies

Je bent nu twee weken bezig met de website voor je eerste opdrachtgever bij
FDND. Twee weken waarin je al veel code hebt geschreven; je hebt aan de hand
van een aantal schetsen een _prototype_ gemaakt in gestructureerde _HTML_.
Je hebt _Layout Modes_ en wat _typografie_ toegepast via _CSS_, en waarschijnlijk
je website _responsive_ gemaakt via het _Mobile first_ principe. Je hebt
meerdere keren een code & design review gedaan, en feedback gehad op je werk.

Grote kans dat je nog niet niet heel veel tijd hebt genomen om eens rustig naar
het totaalplaatje te kijken. Misschien ben je inmiddels het overzicht wel al
kwijt. Er komt steeds meer code bij, en het wordt steeds complexer. Hoe zorg je
er nou voor dat je robuuste code blijft schrijven, en dat je zelf het overzicht
houdt?

Je kunt voor jezelf een aantal _code conventies_ aanhouden, waardoor je grip
houdt op je werk. In teams worden deze vaak vastgelegd, en wordt er van
teamleden verwacht dat ze deze ook naleven. Sommige bedrijven leggen code
conventies voor alle projecten binnen het hele bedrijf vast.

Bij FDND houden we ook een aantal _code conventies_ aan. Om te beginnen deze
drie:

### Geef je HTML ademruimte

Zorg dat je je HTML netjes en consequent _inspringt_, bijvoorbeeld altijd met
4 spaties, of tabs. Je HTML heeft dus ook witruimte nodig. Als je je code
consequent schrijft, zul je merken dat je sneller gaat coderen, en makkelijker
aanpassingen kunt maken.

💡 Gebruik als richtlijn voor het inspringen en de witruimte je kennis over
_block-level_ en _inline-level_ elementen: begin block-level elementen op een
nieuwe regel, en laat inline-level elementen doorlopen op dezelfde regel. Als
je dit consequent doorvoert, wordt je latere CSS hier ook beter van.

#### ⛔️ Doe dit niet

```html
<body>
<nav>
<ul><li>
<a href="/">Home</a></li>
<li><a href="/contact.html">Contact</a></li></ul>
</nav>
<h1>Eerste kop</h1>
     <p>Welkom op deze
     <strong>website</strong>.
     </p>
         <p><a
        href="/pagina-2.html"
        class="button">Lees verder
        </a>
        </p>
    <footer>
     <p>Gemaakt door iemand.
</p>
  </footer>
</body>
```

#### ✅ Doe dit wel

```html
<body>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contact.html">Contact</a></li>
        </ul>
    </nav>

    <h1>Eerste kop</h1>
    <p class="intro">Welkom op deze <strong>website</strong>.</p>
    <p><a href="/pagina-2.html" class="button">Lees verder</a></p>

    <footer>
        <p>Gemaakt door iemand.</p>
    </footer>
</body>
```

### Schrijf je CSS selectors in dezelfde volgorde als de HTML

Zorg dat je CSS bestand de volgorde en structuur van de HTML volgt. Hierdoor
wordt het makkelijker om je werk terug te vinden, en aanpassingen te maken.
Maak slim gebruik van _inheritance_ en de _cascade_ binnen CSS, en zet je code op van generiek
naar specifieker.

💡 Je kunt in CSS ook selectors _nesten_ om meer overzicht te houden (en minder
te typen). Laat ook hierbij de structuur van je HTML terugkomen.

#### ⛔️ Doe dit niet


```css
nav {
    display: flex;
}

.intro {
    font-family: sans-serif;
    text-align: center;
}

footer {
    font-family: sans-serif;
    font-size: smaller;
}

a.button {
    font-family: sans-serif;
    padding: .5em;
    border: 1px solid;
}

nav ul {
    font-family: sans-serif;
    list-style: none;
}

body {
    line-height: 1.5;
}
```

#### ✅ Doe dit wel

```css
body {
    font-family: sans-serif;
    line-height: 1.5;
}

nav {
    display: flex;
    ul {
        list-style: none;
    }
}

.intro {
    text-align: center;
}

a.button {
    padding: .5em;
    border: 1px solid;
}

footer {
    font-size: smaller;
}
```

### Nest je media queries

Zorg dat je per onderdeel (_component_) op je pagina afzonderlijk nadenkt over
hoe deze _responsive_ werkt. Door je _Mobile First_ media queries te _nesten_,
is het makkelijker om met verschillende formaten breakpoints te werken, en hou
je meer overzicht. Ga je een onderdeel veranderen (of verwijderen), dan heb je
op één plek ook alle code bij elkaar.

💡 Heb je _Mobile First Responsive Design_ al helemaal onder de knie? Kijk dan
ook eens hoe je _Container Queries_ in kunt zetten op deze manier.

#### ⛔️ Doe dit niet

```css
body {
    line-height: 1.5;
}
.navigation {
    font-weight: bold;
}
footer {
    text-align: right;
}
@media (min-width: 30em) {
    body {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .navigation {
        display: flex;
        justify-content: space-between;
    }
    footer {
        text-align: center;
    }
}
```

#### ✅ Doe dit wel

```css
body {
    line-height: 1.5;
    @media (min-width: 30em) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
.navigation {
    font-weight: bold;

    /* De navigatie mag al eerder naast elkaar */
    @media (min-width: 26em) {
        display: flex;
        justify-content: space-between;
    }
}
footer {
    text-align: right;
    @media (min-width: 32em) {
        text-align: center;
    }
}
```

### Opdracht met je tafel

Bekijk met je tafel en mentor de HTML van één persoon en bespreek wat er
verbeterd kan worden qua ademruimte en inspringen, zoals hierboven beschreven.

Bespreek vervolgens samen de CSS van een andere student, en loop hierin de
volgorde van de selectors door. Wat kan beter? Kunnen er selectoren genest
worden? Kunnen sommige properties algemener neergezet worden?

Bekijk daarna van een andere student, die al media queries heeft gebruikt, of
deze handiger genest kunnen worden. Bespreek ook de waardes in de breakpoints.

### Individuele opdracht

Herschrijf (_refactor_) je eigen code aan de hand van bovenstaande code
conventies.

Maak een issue aan op je project, genaamd “Refactor HTML en CSS”.

Begin met al je HTML ademruimte geven en consequent in te springen.

Pas vervolgens de volgorde van je CSS aan, en kijk waar je selectors kunt
nesten.

Herschrijf hierna je media queries, door deze te nesten bij de selectors waar
ze voor gelden (waarschijnlijk heb je dit voor vrijdag ook al gedaan).

Als je dit gedaan hebt, is er als het goed is niks veranderd aan de werking
van je site, is je code iets overzichtelijker geworden, en heb je je eerste
_code refactor_ gedaan. Probeer volgende keer deze eerste paar conventies
vanaf het begin toe te passen op je code.

Sluit het issue door je code te pushen.

### Bronnen

- [Refactoren @ Wikipedia](https://nl.wikipedia.org/wiki/Refactoren)
- [HTML Style Guide @ W3Schools](https://www.w3schools.com/html/html5_syntax.asp)

## Hoe nu verder, voor woensdag?

Vrijdag heb je waarschijnlijk wat issues ingeschoten gekregen tijdens de code & design review. Pak deze stap voor stap op. Koppel je commits aan je issues, en sluit issues als je ze afgerond hebt. Hou tussendoor de [Definition of done](INSTRUCTIONS.md#definition-of-done) in de gaten.

💪 Wist je dat je issues ook kunt [sluiten via je commit message](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)?

En vergeet niet dat je via issues ook om feedback op je werk kunt vragen aan een docent, door diegene te _taggen_:

| Squad 1i |       | Squad 1J      |       |
| -------- | -------- | -------- | -------- |
| Koop | @KoopReynders | Krijn | @KrijnHoetmer | 
| Joost | @joostf | Cyd | @cydstumpel |
| Gwen  | @gwen-bo | Sanne  | @shooft |
| Jad  | @jadjoubran | Suus | @suustenvoorde |

<img width="838" height="317" alt="image" src="https://github.com/user-attachments/assets/c42d276b-8361-4c0c-87a1-237682d8bbe4" />
