let respecConfig = {
  useLogo: true,
  useLabel: true,
  // title is verplicht! Neem hier de titel van het document op ----------------------
  title: "Conceptueel Informatiemodel Integrale Bronregistratie Objecten (IMIBRO)",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "wv",                   // Werkversie
  //specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  //specType: "NO",                 // Norm
  //specType: "ST",                 // Standaard
  specType: "IM",                 // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  //specType: "HR",                     // HandReiking
  //specType: "WA",                 // Werkafspraak
  //specType: "BD",                 // Beheer Documentatie
  //specType: "AL",                 // Algemeen document
  //specType: "BP",                 // Best Practice
  nl_organisationStylesURL: "https://tools.geostandaarden.nl/respec/style/",
  //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  //-- zie: https://geonovum.github.io/handleiding-tooling/ReSpec/#pubdomain
  pubDomain: "ibro",
  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  //license: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //license: "cc0",                 // Public Domain Dedication
  license: "cc-by",                 // Attribution, met bronvermelding
  //-- TODO shortName is verplicht! (komt in de URL: kies logische afkorting)--------------
  shortName: "ibro-cm",
  
  //edDraftURI = De URI van de draft version. Deze wordt automatisch afgeleid van de github URI; maar kan hier overschreven worden. 
	//edDraftURI: ["https://geonovum.github.io", "/", "shortName"],

  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2023-03-28",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  //publishVersion: "0.0.2",
  //previousVersion: "0.0.1",
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  //previousPublishDate: "2014-05-01",
  //previousMaturity: "CV",
  //-- TODO: de namen van de Editor(s) / Redacteur(en)---------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors:
    [
      {
        name: "Linda van den Brink",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  //-- de namen van de auteur(s) ------------------------------------------------------
  //-- vul in: per auteur: name:, company:, companyURL: -------------------------------
  authors:
    [
      {
        name: "Pano Maria",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      },
      {
        name: "Linda van den Brink",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  // TODO: Vul de github URL in.
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/Geonovum/ibro-cm",
  // Create PDF and link to file in header (optional):
  // TODO: Change the filename as preferred.
  alternateFormats: [
      {
          label: "pdf",
          uri: "template.pdf",
      },
  ],
  // Lokale lijst voor bibliografie
  // - Kijk eerst naar de beschikbare www.specref.org .
  // - Kijk daarna in de organisatieconfig.
  // - Voeg dan pas hieronder toe.
  localBiblio: 
  {
    BGT12: {
      id: "BGT12",
      title: "Basisregistratie Grootschalige Topografie Gegegevenscatalogus BGT 1.2",
      href: "https://docs.geostandaarden.nl/imgeo/catalogus/bgt/",
      status: "Definitief",
      date: "2020-07-01",
      publisher: "Geonovum",
    },
    EMSO: {
      id: "EMSO",
      title: "DiS Geo : Eisen aan model samenhangende objectenregistratie",
      href: "https://docs.geostandaarden.nl/disgeo/emso/",
      status: "Versie ter vaststelling",
      date: "2021-06-16",
      publisher: "Geonovum",
    },
    GWSW: {
      id: "GWSW",
      title: "Gegevenswoordenboek Stedelijk Water",
      href: "https://data.gwsw.nl/",
      publisher: "Stichting RIONED"
    },
    IMBOR: {
      id: "IMBOR",
      title: "Informatiemodel Beheer Openbare Ruimte (IMBOR)",
      href: "https://www.crow.nl/imbor",
      publisher: "CROW",
    },
    "INSPIRE-D2.10.1": {
      id: "INSPIRE-D2.10.1",
      title: "INSPIRE Data Specifications - Base Models - Generic Network Model",
      href: "https://knowledge-base.inspire.ec.europa.eu/publications/inspire-data-specifications-base-models-generic-network-model_en",
      status: "Definitief",
      publisher: "European Commission",
      date: "2013-04-05"
    },
    MIM12: {
      id: "MIM12",
      title: "MIM - Metamodel Informatie Modellering (Versie 1.2)",
      href: "https://docs.geostandaarden.nl/mim/def-st-mim-20240613/",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2024-06-13"
    },
    "NEN3610-2022": {
      title: "NEN-3610 Basismodel geo-informatie",
      href: "https://www.nen.nl/nen-3610-2022-nl-296137",
      status: "Definitief",
      date: "Juni 2022",
      publisher: "NEN",
    }
  }
};
