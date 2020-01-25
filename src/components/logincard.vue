<template>
  <div>
    <img class="logoimage" src="../assets/images/logo.png" />
    <h1 class="fontbangers" v-if="show">SIGNUP</h1>
    <h1 class="fontbangers" v-if="!show">LOGIN</h1>
    <p>
      <span v-if="show" >already have an account ,</span>
       <span v-if="!show" >don't have an account ,</span>
      <span @click="show=!show" class="redirectlogin" v-if="show">login</span>
      <span @click="show=!show" class="redirectlogin" v-if="!show">signup</span>
    </p>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        prepend="@"
        class="fontbangers"
        id="input-group-1"
        label="Email address"
        label-for="input-1"
        description
      >
        <b-form-input
          prepend="@"
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="fontbangers"
        id="input-group-2"
        label="Password "
        label-for="input-2"
        description
      >
        <div>
          <b-form-input
            id="input-2"
            v-model="form.password"
            :type="ptype"
            required
            placeholder="Choose your password"
          ></b-form-input>
        </div>
        <div class="passwordshow" @click="togglePShow()">
          <b-icon-eye v-if="ptype == 'password'"></b-icon-eye>
          <b-icon-eye-slash v-if="ptype == 'text'"></b-icon-eye-slash>
        </div>
      </b-form-group>

      <b-form-group class="fontbangers" id="input-group-3" label="Your Name" label-for="input-3">
        <b-form-input id="input-3" v-model="form.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group class="fontbangers" id="input-group-4" label="Branch" label-for="input-4">
        <b-form-select id="input-4" v-model="form.stream" :options="streams" required></b-form-select>
      </b-form-group>

      <b-form-group class="fontbangers" id="input-group-5" label="College" label-for="input-5">
        <b-form-select id="input-5" v-model="form.college" :options="colleges" required></b-form-select>
      </b-form-group>

      <b-button class="fontbangers" type="submit" variant="primary">Submit</b-button>
    </b-form>
     <b-form @submit="onSubmit" v-if="!show">

      <b-form-group
        class="fontbangers"
        id="input-group-1"
        label="Email address"
        label-for="input-1"
        description
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="fontbangers"
        id="input-group-2"
        label="Password "
        label-for="input-2"
        description
      >
        <div>
          <b-form-input
            id="input-2"
            v-model="form.password"
            :type="ptype"
            required
            placeholder="Choose your password"
          ></b-form-input>
        </div>
        <div class="passwordshow" @click="togglePShow()">
          <b-icon-eye v-if="ptype == 'password'"></b-icon-eye>
          <b-icon-eye-slash v-if="ptype == 'text'"></b-icon-eye-slash>
        </div>
      </b-form-group>
      <b-button class="fontbangers" type="submit" variant="primary" v-if="!show">Login</b-button>
      <b-button class="fontbangers" type="submit" variant="primary" v-if="show">Signup</b-button>
    </b-form>
  </div>
</template>

<script>
import loginAPI from "../../services/loginAPI";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        name: "",
        college: null,
        stream: null
      },
      login:{
        email:"",
        password:""
      },
      ptype: "password",
      streams: ["test"],
      colleges: ["backendfailure"],
      show: false
    };
  },
  mounted() {
    this.onReset();
    this.loadbranches();
    this.loadcolleges();
  },
  methods: {
    async loadbranches() {
      const response = await loginAPI.getBranches();
      this.streams = response.data;
    },
    async loadcolleges() {
      const response = await loginAPI.getColleges();
      this.colleges = response.data;
    },
    togglePShow() {
      if (this.ptype == "text") this.ptype = "password";
      else this.ptype = "text";
    },
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset() {
      this.form.email = "";
      this.form.name = "";
      this.form.college = null;
      this.form.stream = null;
      this.form.password = "";
      //this.show = false;
      // this.$nextTick(() => {
      //   this.show = true;
      // });
    }
  }
};
</script>
<style scoped>
.logoimage {
  width: 20rem;
  display: block;
  margin: 0 auto;
}
.redirectlogin {
  font-weight: 900;
  cursor: pointer;
}
.redirectlogin:hover {
  color: rgb(55, 55, 104);
  text-decoration: underline;
}
.fontbangers {
 font-family: 'Righteous', cursive;
}
.passwordshow {
  padding-bottom: 35px;
  height: 2.2rem;
  position: absolute;
  font-size: 30px;
  left: 24.5%;
  top: 28.5rem;
  cursor: pointer;
}
@media only screen and (max-width: 700px) {
  .passwordshow {
    left: 70%;
    top: 26.5rem;
  }
}
</style>

