/* global axios */
var app = new Vue({
  el: '#app',
  data: {
    mName: "",
    fName: "",
    loading: true,
    noError: true,
    percentage: "",
    result: "",
  },
  methods: {
    async fetchInfo() {
      var url = "/loveinfo?male=" + this.mName + "&female=" + this.fName;
      try {
        this.loading = true;
        document.getElementById("api-results").className = "show w3-animate-bottom";
        document.getElementById("app").className="w3-animate-top";
        const response = await axios.get(url);
        var json = response.data;

        // if there is no error
        if (json.message == undefined) {
          app.percentage = json.percentage + "% match!";
          app.result = json.result;
          app.loading = false;
          document.getElementById("app").className="w3-animate-top grow-success";
          app.noError = true;
          app.$forceUpdate();
        }
        else {
          app.result = "An error has occurred. Try entering different names.";
          app.percentage = "";
          app.loading = false;
          document.getElementById("app").className="w3-animate-top grow-error";
          app.noError = false;
        }
      }
      catch (error) {
        console.log(error);
      }
    }
  },
});
