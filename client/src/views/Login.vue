<template>
  <div>
    <a-card id="login-card" shadow title="Login">
      <a-form-model
        id="login-form"
        layout="vertical"
        :rules="rules"
        prop="form"
        :model="formData"
        ref="form"
      >
        <a-form-model-item label="Username" prop="username">
          <a-input placeholder="Username" v-model="formData.username" />
        </a-form-model-item>

        <a-form-model-item label="Password" prop="password">
          <a-input-password
            v-model="formData.password"
            placeholder="Password"
          />
        </a-form-model-item>

        <a-form-model-item :wrapper-col="{ span: 16, offset: 4 }">
          <a-button-group>
            <a-button class="submit-button" type="primary" @click="onSubmit"
              >Submit!
            </a-button>
          </a-button-group>
        </a-form-model-item>
      </a-form-model>
      <a-button type="link">Register</a-button>
      <a-button type="link">Forgot Password</a-button>
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      labelCol: { span: 4 },
      wrapperCol: { span: 16 },
      formData: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            min: 3,
            max: 20,
            message: 'Length should be 3 to 20 characters.',
            trigger: 'blur',
            whitespace: true
          }
        ],
        password: {
          pattern:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/,
          required: true,
          message:
            'Password must be 8-30 characters, contain at least 1 uppercase letter, lowercase letter, number, and special character.'
        }
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid || !valid) {
          alert('submit!');
          console.log(this.$store.state.apiroot);
          // todo login endpoint etc

          this.request('/auth/login', 'POST', {
            username: 'testaccount3',
            password: 'testT123&'
          }).then((response) => {
            console.log(response);
            this.request('/users/me', 'GET');
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    login() {
      return;
    }
  }
};
</script>

<style scoped>
#login-form {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

#login-card {
  width: 35%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6%;
}
</style>
