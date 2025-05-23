# Inleiding

De gemeente Rotterdam beoogt, met het [programma Mercator](https://www.rotterdam.nl/mercator) en de daarbinnen te ontwikkelen Integrale Bronregistratie Objecten (IBRO), een oplossing te bieden voor knelpunten in bestaande objectregistraties waarmee onder meer landelijke basisregistraties Basisregistratie Grootschalige Topografie (BGT), Basisregistratie Adressen en Gebouwen (BAG) gevuld worden als ook onderliggend voor de Basisregistratie Wet Onroerende Zaken (WOZ). Het doel is een consistente, actuele en foutloze registratie te realiseren, die waar mogelijk ook 3D-objectinformatie omvat, en beter aansluit op de gebruikspraktijk van burgers en overheden.

De huidige registratiesystemen zijn gescheiden ontstaan en kennen weinig samenhang. Dit leidt tot
inefficiëntie en hoge kosten doordat objectinformatie in meerdere systemen moet worden
bijgehouden, met soms tegenstrijdige gegevens als gevolg.

**Bronregistratie objecten**

Rotterdam wil met de IBRO een prototype ontwikkelen dat aansluit op landelijke initiatieven zoals
[Common Ground](https://commonground.nl/), het Federatief Datastelsel (FDS) en passend binnen de doelstellingen van Zicht op
Nederland (ZoN). Het programma start met een “greenfield”-aanpak, waarbij de nieuwe registratie
parallel aan de bestaande systemen wordt ontwikkeld. Rotterdam streeft naar een integrale
registratie die objecten in de fysieke ruimte centraal stelt. Deze nieuwe “Bronregistratie Objecten” is gebaseerd op landelijke standaarden zodat deze in de toekomst ook door andere overheden
gebruikt kan worden.

**Proeftuin**

Het informatiemodel voor de IBRO wordt ontwikkeld als onderdeel van een proeftuin in het kader van programma Mercator van de gemeente Rotterdam. Het is geen landelijke standaard. Dit informatiemodel staat voorlopig naast de informatiemodellen voor de bestaande basisregistraties (BAG, BGT, WOZ). Uitgangspunt is dat het informatiemodel ook gebruikt kan worden door andere gemeenten, waarbij het belangrijk is om op te merken dat dit gebruik door andere gemeenten vrijwillig en optioneel is.

**Conceptueel Informatiemodel**

Dit document bevat een beschrijving van het conceptueel informatiemodel.
Het informatiemodel is gebaseerd op de richtlijnen die door [[MIM12]] worden gesteld.
De begrippen die in het conceptueel informatiemodel worden genoemd, zijn beschreven in het begrippenmodel
**VERWIJZING OPNEMEN DIE PUBLIEK TOEGANKELIJK IS !!**

<figure>
    <img src="media/conceptueel_informatiemodel.jpg">
    <figcaption>Conceptueel informatiemodel</figcaption>
</figure>

Een conceptueel informatiemodel beschrijft het informatiedomein waar de IBRO over gaat. Het geeft een overzicht van de objecten, hun onderlinge relaties en de attributen die aan deze objecten zijn gekoppeld. Het informatiemodel is een abstracte weergave van de werkelijkheid en legt de basis voor logisch gegevensmodellen. Het conceptueel informatiemodel is niet bedoeld om direct in een database of applicatie te worden geïmplementeerd, maar dient als referentie voor verdere uitwerking.

Op basis van dit conceptueel informatiemodel zal, conform [[MIM12]], een logisch gegevensmodel worden uitgewerkt, en bijbehorende technische standaarden.
Hierbij kan er besloten worden om bepaalde onderdelen van het informatiemodel niet te implementeren, of om onderdelen van het informatiemodel op een andere manier te implementeren. Dit kan bijvoorbeeld het geval zijn als er geen behoefte is aan bepaalde functionaliteit, of als er technische beperkingen zijn.
