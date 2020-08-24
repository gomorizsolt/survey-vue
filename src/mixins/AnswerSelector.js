import { mapGetters } from "vuex";

export default {
  beforeMount() {
    const answer = this.getAnswerByName(this.name);

    if (answer?.selectedValue) {
      this.selectedValue = answer.selectedValue;
    }
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    choices: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    selectedValue: "",
  }),
  computed: {
    ...mapGetters(["getAnswerByName"]),
    formattedChoices() {
      return this.choices.map((choice) => Object.values(choice)[0]);
    },
  },
  methods: {
    updateAnswer(nextSelectedValue) {
      this.selectedValue = nextSelectedValue;

      this.$store.dispatch("updateAnswer", {
        name: this.name,
        selectedValue: nextSelectedValue,
      });
    },
  },
};
