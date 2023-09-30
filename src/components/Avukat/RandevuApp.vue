<template>
  <div class="bg-black">
    <HeaderApp class="" />
    <section class="text-gray-600 body-font CostumContainer relative bg-black">
      <div
        class="w-full h-full bg-gray-950 flex items-center justify-between mt-5"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.8755103784188!2d32.85252177589668!3d39.854622789659565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d345070a889937%3A0x9d8311b88a33510c!2s%C4%B0lkbahar%2C%20612.%20Sk.%20No%3A12%2C%2006550%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1696110917621!5m2!1str!2str"
          style="filter: contrast(1.2) opacity(0.8)"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="w-full mx-auto h-[45rem] mb-20"
        ></iframe>
        <form
          @submit.prevent="onSubmit"
          class="px-5 py-5 mx-auto absolute top-0 right-0"
        >
          <div class="bg-white rounded-lg p-8 flex flex-col z-10 shadow-md">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              MHK Hukuk İletişim & Randevu
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              Sizi arayalım , randevunuzu oluşturalım.
            </p>
            <div class="relative mb-4">
              <InputText
                type="text"
                match="name"
                label="Adınız Soyadınız"
                placeholder="Ad soyad"
                value=""
                required
              />
              <InputText
                type="tel"
                match="tel"
                label="Telefon Numaranız"
                placeholder="0 555 55 55 "
                value=""
                required
              />
              <InputText
                type="email"
                match="email"
                label="Email Adresiniz"
                placeholder="example@gmail.com "
                value=""
                required
              />
            </div>
            <div class="relative mb-4">
              <TextArea
                mactch="area"
                label="Mesajınız"
                rows="4"
                placeholder="Hangi konuda destek istersiniz ve size ne zaman ulaşalım ?"
                value=""
                required
              />
            </div>
            <button data-text="Gönder" class="btn" type="submit">Gönder</button>
            <p class="text-xs text-gray-500 mt-3">
              Sizinle Güçlüyüz, Hukukla Güçlüsünüz.
            </p>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import InputText from "../Forms/InputText.vue";
import TextArea from "../Forms/TextArea.vue";
import HeaderApp from "./HeaderApp.vue";

export default {
  setup() {
    const onSubmit = (event) => {
      event.preventDefault(); // Sayfanın yenilenmesini engeller

      // Formun gönderim işlemini burada gerçekleştirin
      // formData verilerini kullanarak istediğiniz işlemleri yapabilirsiniz
    };

    return { onSubmit };
  },
  components: { InputText, TextArea, HeaderApp },
};
</script>

<style lang="scss" scoped></style>
