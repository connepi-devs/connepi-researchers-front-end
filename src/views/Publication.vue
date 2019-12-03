<template>
  <v-container grid-list-lg>
    <v-row justify="center">
      <v-col cols="12">
        <v-card width="100%" height="88vh">
          <v-card-title class="font-weight-bold primary white--text">
            <span>Visualização da Publicação</span>
          </v-card-title>
          <v-card-text>
            <div class="flex column subtitle-1 pt-3">
              <span>
                <strong>Título: </strong> VCDSL: Uma proposta de Framework para a Geração de Linguagens Visuais Específicas de Domínio On-line
              </span>
              <span>
                <strong>Autor: </strong> José de Anchieta Queiroz Junior, Francisco José A. C. Souza, Cidcley Teixeira de Souza
              </span>
              <span>
                <strong>Ano: </strong> 2013
              </span>
              <span>
                <strong>Instituição: </strong> IFCE
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Publication',
};
</script>
