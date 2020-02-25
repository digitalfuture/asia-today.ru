<template>
  <v-row class="social-links" align="center" justify="center">
    <v-tooltip
      v-for="icon of icons"
      :key="icon.name"
      bottom
      color="rgba(255, 255, 255, 0)"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          fab
          class="social-links__icon black ma-2"
          v-on="on"
          ripple
          :href="icon.link"
          target="_blank"
        >
          <v-img
            class="social-links__image"
            :src="icon.src"
            width="20"
            height="20"
            contain
          ></v-img>
        </v-btn>
      </template>
      <v-chip dark small>{{ icon.name.toUpperCase() }}</v-chip>
    </v-tooltip>
  </v-row>
</template>

<script>
export default {
  name: 'social-links',
  data() {
    return {
      icons: [
        {
          name: 'OK',
          src: '/img/icons/social/ok.png',
          link: '//ok.ru/asiatodayru'
        },
        {
          name: 'VKontakte',
          src: '/img/icons/social/vk.png',
          link: '//vk.com/asiatodayru'
        },
        {
          name: 'Telegram',
          src: '/img/icons/social/telegram.png',
          link: '//t.me/AsiaTodayRu'
        },
        {
          name: 'Zen',
          src: '/img/icons/social/zen.png',
          link: '//zen.yandex.ru/id/5e2efa291a860800af3bdf46'
        },
        {
          name: 'YouTube',
          src: '/img/icons/social/youtube.png',
          link: '//www.youtube.com/channel/UCwSAW9N8XFGEO-dkevVKShA'
        },
        {
          name: 'Facebook',
          src: '/img/icons/social/fb.png',
          link: '//www.facebook.com/groups/asiatodayru/'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.social-links {
  .social-links__icon {
    width: 32px;
    height: 32px;
  }
  .social-links__image {
    max-height: 20px;
    max-width: 20px;
  }
}
</style>
