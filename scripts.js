const vueApp = new Vue({
  el: "#app",
  data: {
    showModal: true,
    test: "Hello world"
  },
  methods: {
    submitForm() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
});
