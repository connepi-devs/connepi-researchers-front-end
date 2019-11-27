<template>
  <v-container>
    <v-row class="login-container" justify="center" align="center" fill-height>
      <v-card width="350">
        <v-card-title class="title font-weight-bold primary--text">
          Cadastre-se
        </v-card-title>
        <v-container>
          <v-form @submit.prevent="signUp" ref="form" v-model="valid">
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
                <v-text-field
                  v-model="passwordConfirmation"
                  label="Confirmar a Senha"
                  :rules="[passwordMinLengthRule, requiredRule, passwordConfirmationRule]"
                />
            </v-card-text>
            <v-card-actions>
              <div class="flex column justify-center align-center">
                <v-btn
                  @click="signUp"
                  width="100%"
                  rounded
                  color="primary"
                  :disabled="loading || !valid"
                  :loading="loading"
                  type="submit"
                >
                  Cadastrar
                </v-btn>
                <v-btn
                  @click="$router.push({ name: 'Login' })"
                  class="mt-2 text-capitalize"
                  color="primary"
                  text
                >
                  Já possuo cadastro. Faça login!
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

export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      loading: false,
      passwordConfirmation: '',
      password: '',
      valid: false,
    };
  },
  methods: {
    emailRule,
    passwordMinLengthRule,
    requiredRule,
    signUp() {
      const body = {
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      this.loading = true;

      authService.signUp(body)
        .then(() => {
          this.setSnackbar({
            color: 'success',
            message: 'Usuário cadastrado com sucesso. Realize seu login!',
            show: true,
          });
          this.$router.push({ name: 'Login' });
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
  computed: {
    passwordConfirmationRule() {
      return this.password === this.passwordConfirmation || 'A confirmação é diferente da senha';
    },
  },
};
</script>

<style scoped>
  .login-container {
    height: calc(100vh - 64px);
  }
</style>
