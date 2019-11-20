<template>
  <v-container grid-list-lg>
    <v-card width="100%" height="88vh">
      <v-card-title class="font-weight-bold">
        <span>Visualização da Publicação</span>
      </v-card-title>
      <v-card-text>
        <div class="flex column subtitle-1">
          <span>
            <strong>Título: </strong> Título da Publicação
          </span>
          <span>
            <strong>Autor: </strong> Joaquim José da Silva Xavier
          </span>
          <span>
            <strong>Ano: </strong> 2012
          </span>
          <span>
            <strong>Instituição: </strong> Instituto Federal de Alagoas
          </span>

          <!-- PDF -->
          <iframe
            class="mt-5"
            src="https://drive.google.com/file/d/1cFjfy0K0ce3f5GaxYPMEegpEqY7P0J4n/preview"
            width="100%"
            height="480"
          />
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Publication',
};
</script>
