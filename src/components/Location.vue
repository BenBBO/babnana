<template>
  <l-map id="map" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" />
    <l-marker :lat-lng="center" :icon="icon">
      <l-popup >
        <div>Nous intervenons dans la région Grenobloise</div>
      </l-popup>
    </l-marker>
    <l-circle :lat-lng="center" :radius="circle.radius" :color="circle.color" :stroke="false" />
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker, LCircle, LPopup } from "vue2-leaflet";
import { latLng, icon } from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "Location",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LCircle,
    LPopup
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      center: latLng(45.188529, 5.724524),
      zoom: 13,
      icon: icon({
        iconUrl: require("@/assets/babnana.png"),
        iconSize: [100, 54],
        iconAnchor: [50, 27]
      }),
      circle: {
        radius: 25000,
        color: "red"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
#map {
  height: 50vh;
}
</style>
