Vue.createApp({
  data() {
    return {
      albums: []
    }
  },
  mounted() {
    axios.get("./api/albums.php").then((response) => {
      this.albums = response.data;
      console.log(this.albums)
    })
  }
}).mount("#app");