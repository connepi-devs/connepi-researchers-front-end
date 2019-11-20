<template>
  <v-container>
    <v-row class="login-container" justify="center" align="center" fill-height>
      <v-card width="350">
        <v-card-title class="title font-weight-bold primary--text">
          Login
        </v-card-title>
        <v-container>
          <v-form @submit.prevent="login" ref="form" v-model="valid">
            <v-card-text>
                <v-text-field
                  v-model="email"
                  label="E-mail"
                  :rules="[emailRule, requiredRule]"
                />
                <v-text-field
                  v-model="password"
                  label="Senha"
                  :rules="[passwordMinLengthRule, requiredRule]"
                />
            </v-card-text>
            <v-card-actions>
              <div class="flex column justify-center align-center">
                <v-btn
                  @click="login"
                  width="100%"
                  rounded
                  color="primary"
                  :disabled="loading || !valid"
                  :loading="loading"
                  type="submit"
                >
                  Login
                </v-btn>
                <v-btn
                  @click="$router.push({ name: 'SignUp' })"
                  class="mt-2 text-capitalize"
                  color="primary"
                  text
                >
                  Não possui login? Cadastre-se!
                </v-btn>
              </div>
            </v-card-actions>
          </v-form>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import authService from '@/services/auth-service';
import handleErrors from '@/utils/handle-errors';
import { requiredRule, emailRule, passwordMinLengthRule } from '@/utils/validation-rules';
import { axiosInstance } from '@/services/axios-instance';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      loading: false,
      password: '',
      valid: false,
    };
  },
  methods: {
    emailRule,
    requiredRule,
    passwordMinLengthRule,
    login() {
      const body = {
        email: this.email,
        password: this.password,
      };
      this.loading = true;

      authService.login(body)
        .then(({ data, headers }) => {
          this.onLoginSuccess(data, headers);
        })
        .catch((err) => {
          this.setSnackbar({
            color: 'error',
            message: handleErrors(err),
            show: true,
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
    onLoginSuccess(data, headers) {
      localStorage.clear();
      localStorage.setItem('access-token', headers['access-token']);
      localStorage.setItem('client', headers['client']);
      localStorage.setItem('uid', headers['uid']);
      axiosInstance.defaults.headers.common['access-token'] = headers['access-token'];
      axiosInstance.defaults.headers.common['client'] = headers['client'];
      axiosInstance.defaults.headers.common['uid'] = headers['uid'];
      this.setSnackbar({
        color: 'success',
        message: 'Login realizado com sucesso!',
        show: true,
      });
      this.$router.push({ name: 'Home' });
    },
    ...mapActions('base', ['setSnackbar']),
  },
};
</script>

<style scoped>
  .login-container {
    height: calc(100vh - 64px);
  }
</style>
