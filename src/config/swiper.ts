import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Grid,
  Autoplay
} from 'swiper/modules'
import { type SwiperOptions } from 'swiper/types'

export const swiperConfig: SwiperOptions = {
  modules: [Navigation, Pagination, Scrollbar, A11y, Grid, Autoplay],
  spaceBetween: 22,
  slidesPerView: 3,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 2,
        fill: 'row'
      }
    },
    520: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: 'row'
      }
    },
    768: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: 'row'
      }
    }
  },
  loop: true,
  navigation: true,
  pagination: { clickable: true },
  grid: {
    rows: 2,
    fill: 'row'
  }
}
