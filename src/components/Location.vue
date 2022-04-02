<template>
  <l-map id="map" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" />
    <l-marker :lat-lng="center" :icon="icon">
      <l-popup>
        <div class="text-center">
          <p>
            <b>Retrouvez Babnana à l'Isle aux chiens</b>
            <br />
            <i>route de Bourgoin, 38460 Trept</i>
          </p>
        </div>
      </l-popup>
    </l-marker>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import { latLng, icon } from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "Location",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      center: latLng(45.679313, 5.316476),
      zoom: 13,
      icon: icon({
        iconUrl: require("@/assets/babnana.png"),
        iconSize: [100, 54],
        iconAnchor: [50, 27],
      }),
    };
  },
};
</script>

<style lang="scss" scoped>
#map {
  height: 50vh;
}
</style>
