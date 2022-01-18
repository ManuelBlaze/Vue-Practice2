// build Vue app
const app = Vue.createApp({
  data() {
    return {
      name: "",
      enterName: "",
    };
  },
  methods: {
    showAlert: () => {
      alert("Clicked Button!");
    },
    changeName(event, enter) {
      const {
        target: { value },
      } = event;

      if (enter) {
        this.enterName = value;
        return;
      }

      this.name = value;
    },
  },
});

// mount app
app.mount("#assignment");
