export interface TVehicleInformation {
  kjoretoydataListe: KjoretoydataListe[];
}

export interface KjoretoydataListe {
  kjoretoyId: KjoretoyId;
  forstegangsregistrering: Forstegangsregistrering;
  kjennemerke: Kjennemerke[];
  registrering: Registrering;
  godkjenning: Godkjenning;
}

export interface KjoretoyId {
  kjennemerke: string;
  understellsnummer: string;
}

export interface Forstegangsregistrering {
  registrertForstegangNorgeDato: string;
}

export interface Kjennemerke {
  fomTidspunkt: string;
  kjennemerke: string;
  kjennemerkekategori: string;
  kjennemerketype: Kjennemerketype;
}

export interface Kjennemerketype {
  kodeBeskrivelse: string;
  kodeNavn: string;
  kodeVerdi: string;
  tidligereKodeVerdi: any[];
}

export interface Registrering {
  fomTidspunkt: string;
  kjoringensArt: KjoringensArt;
  registreringsstatus: Registreringsstatus;
  registrertForstegangPaEierskap: string;
  avregistrertSidenDato: string;
}

export interface KjoringensArt {
  kodeBeskrivelse: string;
  kodeNavn: string;
  kodeVerdi: string;
  tidligereKodeVerdi: any[];
}

export interface Registreringsstatus {
  kodeBeskrivelse: string;
  kodeNavn: string;
  kodeVerdi: string;
  tidligereKodeVerdi: any[];
}

export interface Godkjenning {
  forstegangsGodkjenning: ForstegangsGodkjenning;
  kjoretoymerknad: any[];
  registreringsbegrensninger: Registreringsbegrensninger;
  tekniskGodkjenning: TekniskGodkjenning;
  tilleggsgodkjenninger: any[];
}

export interface ForstegangsGodkjenning {
  forstegangRegistrertDato: string;
  godkjenningsId: string;
  godkjenningsundertype: Godkjenningsundertype;
  gyldigFraDato: string;
  gyldigFraDatoTid: string;
  kvalitetskodeForstegangRegDato: KvalitetskodeForstegangRegDato;
  unntak: any[];
}

export interface Godkjenningsundertype {
  kodeNavn: string;
  kodeVerdi: string;
  tidligereKodeVerdi: any[];
}

export interface KvalitetskodeForstegangRegDato {
  kodeBeskrivelse: string;
  kodeNavn: string;
  kodeVerdi: string;
  tidligereKodeVerdi: any[];
}

export interface Registreringsbegrensninger {
  registreringsbegrensning: any[];
}

export interface TekniskGodkjenning {
  godkjenningsId: string;
  godkjenningsundertype: Godkjenningsundertype2;
  gyldigFraDato: string;
  gyldigFraDatoTid: string;
  kjoretoyklassifisering: Kjoretoyklassifisering;
  krav: Krav[];
  tekniskeData: TekniskeData;
  unntak: any[];
}

export interface Godkjenningsundertype2 {
  kodeNavn: string;
  kodeVerdi: string;
  tidligereKodeVerdi: any[];
}

export interface Kjoretoyklassifisering {
  beskrivelse: string;
  efTypegodkjenning: EfTypegodkjenning;
  kjoretoyAvgiftsKode: KjoretoyAvgiftsKode;
  nasjonalGodkjenning: NasjonalGodkjenning;
  spesielleKjennetegn: string;
  tekniskKode: TekniskKode;
  tekniskUnderkode: TekniskUnderkode;
  iSamsvarMedTypegodkjenning: boolean;
}

export interface EfTypegodkjenning {
  typegodkjenningNrTekst: string;
  typegodkjenningnummer: Typegodkjenningnummer;
  variant: string;
}

export interface Typegodkjenningnummer {
  direktiv: string;
  land: string;
  serie: string;
  utvidelse: string;
}

export interface KjoretoyAvgiftsKode {
  kodeBeskrivelse: string;
  kodeNavn: string;
  kodeVerdi: string;
  tidligereKodeVerdi: any[];
}

export interface NasjonalGodkjenning {
  nasjonaltGodkjenningsAr: string;
  nasjonaltGodkjenningsHovednummer: string;
  nasjonaltGodkjenningsUndernummer: string;
}

export interface TekniskKode {
  kodeBeskrivelse: string;
  kodeNavn: string;
  kodeVerdi: string;
  tidligereKodeVerdi: any[];
}

export interface TekniskUnderkode {
  kodeVerdi: string;
  tidligereKodeVerdi: any[];
}

export interface Krav {
  kravomrade: Kravomrade;
  kravoppfyllelse: Kravoppfyllelse;
}

export interface Kravomrade {
  kodeBeskrivelse: string;
  kodeVerdi: string;
  tidligereKodeVerdi: any[];
}

export interface Kravoppfyllelse {
  kodeBeskrivelse: string;
  kodeVerdi: string;
  tidligereKodeVerdi: any[];
}

export interface TekniskeData {
  akslinger: Akslinger;
  bremser: Bremser;
  dekkOgFelg: DekkOgFelg;
  dimensjoner: Dimensjoner;
  generelt: Generelt;
  karosseriOgLasteplan: KarosseriOgLasteplan;
  miljodata: Miljodata;
  motorOgDrivverk: MotorOgDrivverk;
  ovrigeTekniskeData: any[];
  persontall: Persontall;
  tilhengerkopling: Tilhengerkopling;
  vekter: Vekter;
}

export interface Akslinger {
  akselGruppe: AkselGruppe[];
  antallAksler: number;
}

export interface AkselGruppe {
  akselListe: AkselListe;
  id: number;
  plasseringAkselGruppe: string;
  tekniskTillattAkselGruppeLast: number;
}

export interface AkselListe {
  aksel: Aksel[];
}

export interface Aksel {
  drivAksel: boolean;
  id: number;
  plasseringAksel: string;
  tekniskTillattAkselLast: number;
}

export interface Bremser {
  tilhengerBremseforbindelse: any[];
}

export interface DekkOgFelg {
  akselDekkOgFelgKombinasjon: AkselDekkOgFelgKombinasjon[];
}

export interface AkselDekkOgFelgKombinasjon {
  akselDekkOgFelg: AkselDekkOgFelg[];
}

export interface AkselDekkOgFelg {
  akselId: number;
  belastningskodeDekk: string;
  dekkdimensjon: string;
  felgdimensjon: string;
  hastighetskodeDekk: string;
}

export interface Dimensjoner {
  bredde?: number;
  hoyde?: number;
  lengde?: number;
}

export interface Generelt {
  fabrikant: any[];
  handelsbetegnelse: string[];
  merke: Merke[];
  tekniskKode: TekniskKode2;
  typebetegnelse: string;
}

export interface Merke {
  merke: string;
  merkeKode: string;
}

export interface TekniskKode2 {
  kodeBeskrivelse: string;
  kodeNavn: string;
  kodeVerdi: string;
  tidligereKodeVerdi: any[];
}

export interface KarosseriOgLasteplan {
  antallDorer: any[];
  dorUtforming: any[];
  kjennemerketypeBak: KjennemerketypeBak;
  kjennemerkestorrelseBak: KjennemerkestorrelseBak;
  plasseringFabrikasjonsplate: PlasseringFabrikasjonsplate[];
  plasseringUnderstellsnummer: PlasseringUnderstellsnummer[];
  rFarge: RFarge[];
}

export interface KjennemerketypeBak {
  kodeBeskrivelse: string;
  kodeNavn: string;
  kodeTypeId: string;
  kodeVerdi: string;
  tidligereKodeVerdi: any[];
}

export interface KjennemerkestorrelseBak {
  kodeBeskrivelse: string;
  kodeNavn: string;
  kodeTypeId: string;
  kodeVerdi: string;
  tidligereKodeVerdi: any[];
}

export interface PlasseringFabrikasjonsplate {
  kodeNavn: string;
  kodeTypeId: string;
  kodeVerdi: string;
  tidligereKodeVerdi: any[];
}

export interface PlasseringUnderstellsnummer {
  kodeNavn: string;
  kodeTypeId: string;
  kodeVerdi: string;
  tidligereKodeVerdi: any[];
}

export interface RFarge {
  kodeBeskrivelse: string;
  kodeNavn: string;
  kodeTypeId: string;
  kodeVerdi: string;
  tidligereKodeVerdi: any[];
}

export interface Miljodata {
  miljoOgdrivstoffGruppe: MiljoOgdrivstoffGruppe[];
}

export interface MiljoOgdrivstoffGruppe {
  drivstoffKodeMiljodata: DrivstoffKodeMiljodata;
  lyd: Lyd;
}

export interface DrivstoffKodeMiljodata {
  kodeBeskrivelse: string;
  kodeNavn: string;
  kodeTypeId: string;
  kodeVerdi: string;
  tidligereKodeVerdi: any[];
}

export interface Lyd {}

export interface MotorOgDrivverk {
  girkassetype: Girkassetype;
  girutvekslingPrGir: any[];
  hybridKategori: HybridKategori;
  maksimumHastighet: number[];
  maksimumHastighetMalt: any[];
  motor: Motor[];
}

export interface Girkassetype {
  kodeBeskrivelse: string;
  kodeNavn: string;
  kodeTypeId: string;
  kodeVerdi: string;
  tidligereKodeVerdi: any[];
}

export interface HybridKategori {
  kodeBeskrivelse: string;
  kodeNavn: string;
  kodeTypeId: string;
  kodeVerdi: string;
  tidligereKodeVerdi: any[];
}

export interface Motor {
  drivstoff: Drivstoff[];
  slagvolum: number;
}

export interface Drivstoff {
  drivstoffKode: DrivstoffKode;
}

export interface DrivstoffKode {
  kodeBeskrivelse: string;
  kodeNavn: string;
  kodeTypeId: string;
  kodeVerdi: string;
  tidligereKodeVerdi: any[];
}

export interface Persontall {
  sitteplasserForan: number;
  sitteplasserTotalt: number;
}

export interface Tilhengerkopling {
  kopling: any[];
}

export interface Vekter {
  egenvekt: number;
  egenvektMinimum: number;
  nyttelast: number;
  tillattTotalvekt: number;
  vogntogvektAvhBremsesystem: any[];
}
