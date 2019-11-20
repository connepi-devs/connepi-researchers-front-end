<template>
  <v-container>
    <v-row class="login-container" justify="center" align="center" fill-height>
      <v-card width="350">
        <v-card-title>Login</v-card-title>
        <v-container>
          <v-form>
            <v-card-text>
                <v-text-field
                  v-model="email"
                  label="E-mail"
                />
                <v-text-field
                  v-model="password"
                  label="E-mail"
                />
            </v-card-text>
            <v-card-actions>
              <div class="flex column justify-center align-center">
                <v-btn
                  @click="login"
                  width="100%"
                  rounded
                  color="primary"
                  :disabled="loading"
                  :loading="loading"
                >
                  Login
                </v-btn>
                <v-btn
                  class="mt-2 text-capitalize"
                  color="primary"
                  text
                >
                  Ainda não tem conta? Cadastrar
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
import handleErrors from "@/utils/handle-errors";

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      loading: false,
      password: '',
    };
  },
  methods: {
    login() {
      const body = {
        email: this.email,
        password: this.password,
      };
      this.loading = true;

      authService.login(body)
        .then(({ data }) => {
          console.log(data);
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
    ...mapActions('base', ['setSnackbar']),
  },
};
</script>

<style scoped>
  .login-container {
    height: calc(100vh - 64px);
  }
</style>
