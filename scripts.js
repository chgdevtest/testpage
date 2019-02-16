const vueApp = new Vue({
  el: "#app",
  data: {
    showModal: false,
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    comments: "",
    errors: []
  },
  methods: {
    checkForm() {
      this.errors = [];
      if (!this.firstName) {
        this.errors.push("First Name is required");
      }
      if (!this.lastName) {
        this.errors.push("Last Name is required");
      }
      if (!this.phone) {
        this.errors.push("Phone is required");
      }
      if (!this.email) {
        this.errors.push("Email is required");
      }

      if (this.errors.length === 0) {
        this.submitForm();
      }
    },
    submitForm() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
});
