const app = new Vue({
  el: "#app",
  data: {
    slides: [
      {
        image: "img/01.jpg",
        title: "Sveziaaaaaaaaaaaaa",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
      },
      {
        image: "img/02.jpg",
        title: "Svizzera",
        text: "Lorem ipsum.",
      },
      {
        image: "img/03.jpg",
        title: "Gran Bretagna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        image: "img/04.jpg",
        title: "Germania",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
      },
      {
        image: "img/05.jpg",
        title: "Paradise",
        text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.",
      },
    ],
    indiceAttivo: 0,
    intervalId: undefined,
  },

  mounted() {
    console.log("mounted!");
    this.intervalId = setInterval(this.cliccaNext, 3000);
  },

  methods: {
    createInterval() {
      this.intervalId = setInterval(this.cliccaNext, 3000);
    },

    cliccaNext: function () {
      //   alert("provaprova");
      this.indiceAttivo++;
      if (this.indiceAttivo === this.slides.length) {
        this.indiceAttivo = 0;
      }
    },
    cliccaPrev() {
      this.indiceAttivo--;
      if (this.indiceAttivo === -1) {
        this.indiceAttivo = this.slides.length - 1;
      }
    },
  },
});
