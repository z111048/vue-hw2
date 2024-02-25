import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

const site = "https://vue3-course-api.hexschool.io/v2/";
const api_path = "james9527";

// app => Vue 實體
const app = createApp({
  data() {
    return {
      products: {},
      tempProduct: {},
    };
  },
  methods: {
    getData() {
      const api = `${site}api/${api_path}/admin/products/all`;
      axios
        .get(api)
        .then((res) => {
          console.log(res);
          this.products = res.data.products;
          console.log(this.products);
        })
        .catch((err) => {
          assert(err);
          window.location = "product.html";
        });
    },
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexschoolToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    axios.defaults.headers.common["Authorization"] = token;
    // console.log(token);

    this.getData();
  },
});
// app.component...
app.mount("#app");
