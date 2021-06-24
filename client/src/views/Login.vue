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

<script lang="ts">
import axios from 'axios';

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
        // todo remove these rules, they are really for a register form not a login
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
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          await axios
            .post('/auth/login', {
              username: this.formData.username,
              password: this.formData.password
            })
            .catch((e) => {
              alert(
                // todo make it one of those fancy built in error messages on the page (i think ant design has them)
                'Error logging in.\nCode: ' +
                  e.response.status +
                  ' returned from server'
              );
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
