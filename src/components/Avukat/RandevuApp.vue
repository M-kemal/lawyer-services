<template>
  <div class="bg-black k1:h-screen">
    <HeaderApp class="" />
    <section class="text-gray-600 body-font CostumContainer relative bg-black">
      <div
        v-if="succesMessage"
        class="absolute -top-5 left-5 z-30 animate-fadeInSlide"
      >
        <BaseSuccess
          name="Randevu Oluşturuldu"
          message="Ana Sayfaya yönlendiriyoruz..."
          class="!text-firstColor !bg-gray-950/50 rounded-xl"
        >
          <template #icon>
            <SuccessIcon
              title="Success"
              class="bg-firstColor text-black rounded-lg p-1 slideInDown"
            ></SuccessIcon>
          </template>
        </BaseSuccess>
      </div>
      <div
        v-if="errorMessage"
        class="absolute left-0 !-top-5 k12:left-5 k12:top-5 z-30 animate-fadeInSlide p-2"
      >
        <AlertError
          name="Hata"
          message="Size ulaşabilmemiz için lütfen bilgileri eksiksiz doldurun."
          class="!bg-gray-950/70 rounded-xl"
        >
          <template #icon>
            <AlertIcon title="Alert" class="animate-fadeInSlide"></AlertIcon>
          </template>
        </AlertError>
      </div>
      <div
        class="w-full h-[40rem] bg-gray-950 flex items-center justify-between mt-11"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.8755103784188!2d32.85252177589668!3d39.854622789659565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d345070a889937%3A0x9d8311b88a33510c!2s%C4%B0lkbahar%2C%20612.%20Sk.%20No%3A12%2C%2006550%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1696110917621!5m2!1str!2str"
          style="filter: contrast(1.2) opacity(0.9)"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="w-full mx-auto h-full mb-20 animate-fadeInSlide border-2 border-firstColor rounded-md"
        ></iframe>
        <form
          @submit.prevent="submitForm"
          class="px-5 mx-auto absolute -top-5 right-0"
        >
          <div
            class="loginBg rounded-lg px-8 py-4 flex flex-col z-10 shadow-md slideInUp"
          >
            <h2 class="text-gray-200 text-lg mb-1 font-medium title-font">
              MHK Hukuk İletişim & Randevu
            </h2>
            <p class="leading-relaxed mb-5 text-gray-200">
              Sizi arayalım , randevunuzu oluşturalım.
            </p>
            <div class="relative">
              <InputText
                type="text"
                match="name"
                label="Adınız Soyadınız"
                placeholder="Ad soyad"
                :value="ad"
                v-model:value="ad"
                labelColor="#FFF"
              />

              <InputText
                type="tel"
                match="tel"
                label="Telefon Numaranız"
                placeholder="0 555 55 55 "
                :value="tel"
                v-model:value="tel"
                labelColor="#FFF"
              />

              <InputText
                type="email"
                match="email"
                label="Email Adresiniz"
                placeholder="example@gmail.com "
                :value="mail"
                v-model:value="mail"
                labelColor="#FFF"
              />
            </div>
            <div class="relative">
              <TextArea
                match="area"
                label="Mesajınız"
                rows="4"
                placeholder="Hangi konuda destek istersiniz ve size ne zaman ulaşalım ?"
                v-model:value="msj"
                labelColor="#FFF"
              />
            </div>
            <button data-text="Gönder" class="btn !py-4" type="submit">
              Gönder
            </button>
            <p class="text-xs text-gray-200 mt-3 text-center">
              Sizinle Güçlüyüz, Hukukla Güçlüsünüz.
            </p>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';
import InputText from '../Forms/InputText.vue';
import TextArea from '../Forms/TextArea.vue';
import HeaderApp from './HeaderApp.vue';
import AlertError from '../Utilities/AlertError.vue';
import AlertIcon from '../icons/AlertIcon.vue';
import SuccessIcon from '../icons/SuccessIcon.vue';
import { useRouter } from 'vue-router';
import BaseSuccess from '../Utilities/BaseSuccess.vue';

export default {
  setup() {
    const ad = ref('');
    const mail = ref('');
    const tel = ref(null);
    const msj = ref('');

    const errorMessage = ref(false);
    const succesMessage = ref(false);

    const router = useRouter();

    const submitForm = () => {
      // Tüm inputlar dolu mu kontrol edelim
      if (
        ad.value === '' ||
        mail.value === '' ||
        tel.value === null ||
        msj.value === ''
      ) {
        errorMessage.value = true;
        setTimeout(() => {
          errorMessage.value = false;
        }, 3000);
      } else {
        // Tüm inputlar doluysa formu gönder
        // Burada form gönderme işlemini ekleyebilirsiniz
        // Örneğin: Axios veya fetch kullanarak sunucuya veri gönderme
        succesMessage.value = true;
        setTimeout(() => {
          router.push('/');
        }, 3000);
      }
    };

    return { submitForm, ad, mail, tel, msj, errorMessage, succesMessage };
  },
  components: {
    InputText,
    TextArea,
    HeaderApp,
    AlertError,
    AlertIcon,
    BaseSuccess,
    SuccessIcon,
  },
};
</script>

<style lang="css" scoped>
.loginBg {
  background: #000000;
  background: -webkit-linear-gradient(
    140deg,
    #000000 0%,
    #e1b254 50%,
    #000000 100%
  );
  background: linear-gradient(140deg, #000000 0%, #e1b254 50%, #000000 100%);
}
</style>
