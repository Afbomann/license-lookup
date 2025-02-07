<script setup lang="ts">
import type { TVehicleInformation } from "../types";

defineProps<{ vehicleInformation: TVehicleInformation }>();
</script>

<template>
  <div
    class="w-[600px] max-w-[85%] bg-slate-200 p-[15px] mx-auto mt-[3dvh] mb-[5dvh] outline rounded-md outline-slate-300"
  >
    <h2 class="font-bold text-base lg:text-lg">Vehicle ID:</h2>
    <ul class>
      <li class="text-sm lg:text-base">
        Identifier:
        {{ vehicleInformation.kjoretoydataListe[0].kjoretoyId.kjennemerke }}
      </li>
      <li class="text-sm lg:text-base">
        Substitution number:
        {{
          vehicleInformation.kjoretoydataListe[0].kjoretoyId.understellsnummer
        }}
      </li>
    </ul>

    <h2 class="font-bold text-base lg:text-lg mt-[1dvh]">
      First-time registration:
    </h2>
    <ul class>
      <li class="text-sm lg:text-base">
        First-time registered:
        {{
          new Date(
            vehicleInformation.kjoretoydataListe[0].forstegangsregistrering.registrertForstegangNorgeDato
          ).toLocaleDateString()
        }}
      </li>
    </ul>

    <h2 class="font-bold text-base lg:text-lg mt-[1dvh]">
      Identifiers ({{
        vehicleInformation.kjoretoydataListe[0].kjennemerke.length
      }}):
    </h2>
    <div class="mt-[1dvh] flex flex-col gap-[2dvh]">
      <div
        v-for="identifier in vehicleInformation.kjoretoydataListe[0]
          .kjennemerke"
        class="bg-slate-300 outline outline-slate-400 rounded-md p-[10px]"
      >
        <p class="text-sm lg:text-base">
          Date:
          {{ new Date(identifier.fomTidspunkt).toLocaleDateString() }}
        </p>
        <p class="text-sm lg:text-base">
          Identifier:
          {{ identifier.kjennemerke }}
        </p>
      </div>
    </div>

    <h2 class="font-bold text-base lg:text-lg mt-[1dvh]">Registration:</h2>
    <ul class>
      <li class="text-sm lg:text-base">
        Date:
        {{
          new Date(
            vehicleInformation.kjoretoydataListe[0].registrering.fomTidspunkt
          ).toLocaleDateString()
        }}
      </li>
      <li class="text-sm lg:text-base">
        Driving type:
        {{
          vehicleInformation.kjoretoydataListe[0].registrering.kjoringensArt
            .kodeNavn
        }}
      </li>
      <li class="text-sm lg:text-base">
        Registration status:
        {{
          vehicleInformation.kjoretoydataListe[0].registrering
            .registreringsstatus.kodeNavn
        }}
      </li>
      <li
        v-if="
          vehicleInformation.kjoretoydataListe[0].registrering
            .avregistrertSidenDato
        "
        class="text-sm lg:text-base"
      >
        Unregistered since:
        {{
          new Date(
            vehicleInformation.kjoretoydataListe[0].registrering.avregistrertSidenDato
          ).toLocaleDateString()
        }}
      </li>
    </ul>

    <h2 class="font-bold text-base lg:text-lg mt-[1dvh]">Approval:</h2>
    <div class="mt-[1dvh] flex flex-col gap-[2dvh]">
      <div class="bg-slate-300 outline outline-slate-400 rounded-md p-[10px]">
        <p class="text-sm lg:text-base">First time approved</p>
        <p class="text-sm lg:text-base">
          Date:
          {{
            new Date(
              vehicleInformation.kjoretoydataListe[0].godkjenning.forstegangsGodkjenning.forstegangRegistrertDato
            ).toLocaleDateString()
          }}
        </p>
        <p class="text-sm lg:text-base">
          Approval ID:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .forstegangsGodkjenning.godkjenningsId
          }}
        </p>
        <p class="text-sm lg:text-base">
          Approval subtype:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .forstegangsGodkjenning.godkjenningsundertype.kodeNavn
          }}
        </p>
        <p class="text-sm lg:text-base">
          Valid from:
          {{
            new Date(
              vehicleInformation.kjoretoydataListe[0].godkjenning.forstegangsGodkjenning.gyldigFraDato
            ).toLocaleDateString()
          }}
        </p>
      </div>
      <div class="bg-slate-300 outline outline-slate-400 rounded-md p-[10px]">
        <p class="text-sm lg:text-base">Technical approval</p>
        <p class="text-sm lg:text-base">
          Approval ID:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.godkjenningsId
          }}
        </p>
        <p class="text-sm lg:text-base">
          Approval subtype:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.godkjenningsundertype.kodeNavn
          }}
        </p>
        <p class="text-sm lg:text-base">
          Valid from:
          {{
            new Date(
              vehicleInformation.kjoretoydataListe[0].godkjenning.tekniskGodkjenning.gyldigFraDato
            ).toLocaleDateString()
          }}
        </p>
        <p class="text-sm lg:text-base">
          Vehicle classification:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.kjoretoyklassifisering.beskrivelse
          }}
        </p>
        <br />
        <p
          v-if="
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.kjoretoyklassifisering.spesielleKjennetegn
          "
          class="text-sm lg:text-base"
        >
          Special characteristics:<br />
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.kjoretoyklassifisering.spesielleKjennetegn
          }}
        </p>
        <br />
        <p class="text-sm lg:text-base">
          Complies with type of approval:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.kjoretoyklassifisering
              .iSamsvarMedTypegodkjenning
              ? "Yes"
              : "No"
          }}
        </p>
        <br />
        <p class="text-sm lg:text-base">Demands:</p>
        <p
          v-for="demand in vehicleInformation.kjoretoydataListe[0].godkjenning
            .tekniskGodkjenning.krav"
          class="text-sm lg:text-base"
        >
          {{ demand.kravoppfyllelse.kodeBeskrivelse }}
        </p>
        <br />
        <p class="text-sm lg:text-base">Technical data</p>
        <br />
        <p class="text-sm lg:text-base">
          Axles ({{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.akslinger.antallAksler
          }}):
        </p>
        <div class="flex flex-col gap-[2dvh] mt-[1dvh]">
          <div
            v-for="axle in vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.akslinger.akselGruppe"
            class="text-sm lg:text-base bg-slate-400 outline outline-slate-500 rounded-md p-[10px]"
          >
            <p class="text-sm lg:text-base">
              ID:
              {{ axle.id }}
            </p>
            <p class="text-sm lg:text-base">
              Axle group location:
              {{ axle.plasseringAkselGruppe }}
            </p>
            <p class="text-sm lg:text-base">
              Technically allowed axle group load:
              {{ axle.tekniskTillattAkselGruppeLast }} kg
            </p>
            <p class="text-sm lg:text-base">
              Drive shaft:
              {{ axle.akselListe.aksel[0].drivAksel ? "Yes" : "No" }}
            </p>
          </div>
        </div>

        <p class="text-sm lg:text-base mt-[2dvh]">
          Tires and rim ({{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.dekkOgFelg
              .akselDekkOgFelgKombinasjon[0].akselDekkOgFelg.length
          }}):
        </p>
        <div class="flex flex-col gap-[2dvh] mt-[1dvh]">
          <div
            v-for="tire in vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.dekkOgFelg
              .akselDekkOgFelgKombinasjon[0].akselDekkOgFelg"
            class="text-sm lg:text-base bg-slate-400 outline outline-slate-500 rounded-md p-[10px]"
          >
            <p class="text-sm lg:text-base">
              ID:
              {{ tire.akselId }}
            </p>
            <p class="text-sm lg:text-base">
              Tire code:
              {{ tire.belastningskodeDekk }}
            </p>
            <p class="text-sm lg:text-base">
              Tire dimension:
              {{ tire.dekkdimensjon }}
            </p>
            <p class="text-sm lg:text-base">
              Rim dimension:
              {{ tire.felgdimensjon }}
            </p>
            <p class="text-sm lg:text-base">
              Speed code:
              {{ tire.hastighetskodeDekk }}
            </p>
          </div>
        </div>

        <p class="text-sm lg:text-base mt-[2dvh]">Dimensions:</p>
        <p
          v-if="
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.dimensjoner.bredde
          "
          class="text-sm lg:text-base"
        >
          Width:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.dimensjoner.bredde
          }}
        </p>
        <p
          v-if="
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.dimensjoner.hoyde
          "
          class="text-sm lg:text-base"
        >
          Height:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.dimensjoner.hoyde
          }}
        </p>
        <p
          v-if="
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.dimensjoner.lengde
          "
          class="text-sm lg:text-base"
        >
          Length:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.dimensjoner.lengde
          }}
        </p>

        <p class="text-sm lg:text-base mt-[2dvh]">General info:</p>
        <p class="text-sm lg:text-base">
          Trade term:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.generelt.handelsbetegnelse[0]
          }}
        </p>
        <p class="text-sm lg:text-base">
          Brand:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.generelt.merke[0].merke
          }}
        </p>
        <p class="text-sm lg:text-base">
          Brand code:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.generelt.merke[0].merkeKode
          }}
        </p>
        <p class="text-sm lg:text-base">
          Technical code:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.generelt.tekniskKode.kodeNavn
          }}
        </p>
        <p class="text-sm lg:text-base">
          Type designation:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.generelt.typebetegnelse
          }}
        </p>

        <p class="text-sm lg:text-base mt-[2dvh]">Environmental data:</p>
        <p class="text-sm lg:text-base">
          Fuel type:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.miljodata
              .miljoOgdrivstoffGruppe[0].drivstoffKodeMiljodata.kodeNavn
          }}
        </p>

        <p class="text-sm lg:text-base mt-[2dvh]">Motor:</p>
        <p class="text-sm lg:text-base">
          Gearbox type:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.motorOgDrivverk.girkassetype
              .kodeNavn
          }}
        </p>
        <p class="text-sm lg:text-base">
          Hybdrid category:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.motorOgDrivverk.hybridKategori
              .kodeNavn
          }}
        </p>
        <p class="text-sm lg:text-base">
          Max speed:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.motorOgDrivverk
              .maksimumHastighet[0]
          }}
          km/t
        </p>
        <p class="text-sm lg:text-base">
          Engine displacement:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.motorOgDrivverk.motor[0]
              .slagvolum
          }}CC
        </p>

        <p class="text-sm lg:text-base mt-[2dvh]">Population:</p>
        <p class="text-sm lg:text-base">
          Seats infront:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.persontall.sitteplasserForan
          }}
        </p>
        <p class="text-sm lg:text-base">
          Seats total:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.persontall.sitteplasserTotalt
          }}
        </p>

        <p class="text-sm lg:text-base mt-[2dvh]">Weights:</p>
        <p class="text-sm lg:text-base">
          Own weight:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.vekter.egenvekt
          }}
          kg
        </p>
        <p class="text-sm lg:text-base">
          Own weight minimum:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.vekter.egenvektMinimum
          }}
          kg
        </p>
        <p class="text-sm lg:text-base">
          Payload:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.vekter.nyttelast
          }}
          kg
        </p>
        <p class="text-sm lg:text-base">
          Allowed total weight:
          {{
            vehicleInformation.kjoretoydataListe[0].godkjenning
              .tekniskGodkjenning.tekniskeData.vekter.tillattTotalvekt
          }}
          kg
        </p>
      </div>
    </div>
  </div>
</template>
