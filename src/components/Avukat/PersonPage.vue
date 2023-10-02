<template>
  <div class="bg-black">
    <div class="CostumContainer text-white">
      <HeaderApp />
      <!-- <section class="text-gray-200 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1
              class="heading1 !text-center !mb-0 font-medium title-font !text-firstColor"
            >
              MHK Hukuk Avukat Kadromuz
            </h1>
            <div class="gradientLine mb-4 !w-1/2 mx-auto"></div>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              MHK Hukuk Avukatları, hukuki danışmanlık ve temsil konularında
              uzmanlaşmış bir hukuk firmasıdır. Firmanın hukuk avukatları, geniş
              bir hukuki bilgiye ve deneyime sahip olan ve müvekkillerine en iyi
              hukuki çözümleri sunma konusunda kararlı olan profesyonellerden
              oluşur. MHK Hukuk Avukatları, farklı hukuki alanlarda uzmanlaşmış
              avukatları bünyesinde bulundurarak, müvekkillerinin çeşitli
              ihtiyaçlarını karşılamak için geniş bir yelpazede hizmet sunar.
            </p>
          </div>
          <div class="flex flex-col flex-wrap -m-2">
            <div
              class="p-2 lg:w-1/3 md:w-1/2 w-full"
              v-for="(avukat, index) in lawyerTeam"
              :key="index"
            >
              <div
                class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
              >
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-200 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  :src="avukat.img"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-200 title-font font-medium">
                    {{ avukat.name }}
                  </h2>
                  <p class="text-gray-500">{{ avukat.job }}</p>
                </div>
              </div>
              <div class="card">
                <router-link
                  v-for="detay in avukat.detail"
                  :key="detay.slug"
                  :to="{
                    name: 'detay',
                    params: { detaySlug: detay.slug },
                    props: { detay: detay },
                  }"
                >
                  <PersonDetail :detay="detay" />
                </router-link>
              </div>
              <router-view></router-view>
            </div>
          </div>
        </div>
      </section> -->
      <!-- <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.show',
          params: { id: destination.id, slug: destination.slug },
        }"
      >
        {{ destination.name }} - PP
      </router-link> -->

      <FooterApp brand="MHK Hukuk" year="2023" developer="mkemal.krdnz">
        <template #icon>
          <LawIcon width="24" height="24" fill="#e1b254" />
        </template>
      </FooterApp>
    </div>
  </div>
</template>

<script>
import HeaderApp from "./HeaderApp.vue";
import FooterApp from "../Footer/FooterApp.vue";
import LawIcon from "../icons/LawIcon.vue";
// import person from "@/components/person.json";

// import PersonDetail from "./PersonDetail.vue";

export default {
  // setup() {
  //   const sourceData = person;

  //   return { destinations: sourceData.destinations };
  // },
  components: { HeaderApp, FooterApp, LawIcon },
};
</script>

<style lang="scss" scoped></style>
