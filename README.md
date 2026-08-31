# PokéAPI-klient skrevet i React

Dette er en enkel, lettforståelig klient for PokéAPI. Den er riktignok ikke helt komplett, og det er noen ting du må gjøre med den for å få den komplett.

## Oppgave 1

Du skal lage en komponent som heter `<SearchResult>` som skal brukes til å presentere søkeresultatet. Her skal du presentere statistikken som kommer fra APIet på en pen måte. Du skal minst lage props for 

+ Name
+ Base experience
+ Height
+ Weight
+ Abilities
+ Held items

Disse propsene skal være riktig typet. Det kan bety at du må lage egne typer for disse. Du skal også komplettere appen med typer der disse mangler, for eksempel i nettverkskallet som gjøres.

## Oppgave 2

Dersom en bruker skriver inn navnet på en Pokémon som ikke finnes, må du vise en feilmelding. Denne feilmeldingen skal lages som en komponent, `<SearchError>`, og du skal bruke conditional rendering for å vise denne komponenten når det trengs.

## Oppgave 3

Du skal implementere søkehistorikk som tar vare på de tre siste søkene i appen. Dersom brukeren har søkt flere enn tre ganger, skal de gamle søkeordene fjernes fra lista etter behov.

## Oppgave 4

Du skal lage en komponent for visning av bilde av Pokémonen, kalt `<PokemonPhoto>`. Du skal bruke data fra APIet til å velge riktig bilde; du må hente bildet som brukes i det nyeste spillet den gjeldende Pokémonen var med i.

## Oppgave 5

Du skal, ut fra dataene i APIet, lage en liste over hvilke spill den aktive Pokémonen har vært med i. Denne komponenten skal hete `<GamesList>` og skal kun brukes til presentasjon, ikke filtrering. Du må derfor filtrere dataene FØR de sendes inn i komponenten. Hvorfor tror du dette er et krav til komponenten?

## Oppgave 6

Du skal implementere en knapp ved siden av Pokémonens abilities. Når brukeren trykker på knappen, skal appen din hente en liste over andre Pokémon som har samme ability. Navnene på lista skal implementeres slik at når man trykker på dem, søker appen opp den gjeldende Pokémonen i stedet for den som vises nå. Dette skal gjøres ved å gjøre et nytt nettverkskall.

## Oppgave 7

Ut fra dataene i som kommer i API-forespørselen skal du nå lage en TypeScript-type kalt `PokeAPIResponse`. Denne typen skal legges i sin egen fil, og du skal så importere typen inn i appen din og bruke den til å type responsen fra APIet på riktig måte.