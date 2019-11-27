<template>
  <v-container grid-list-lg fill-height>
    <span class="headline font-weight-black section-title">Sobre o CONNEPI</span>
    <v-row justify="center" align="center">
      <v-carousel cycle>
        <v-carousel-item
        v-for="(color, i) in colors"
        :key="color"
        >
          <v-sheet
            :color="color"
            height="100%"
            tile
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="display-3">Imagem {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <v-col class="mt-5" cols="12">
        <v-row justify="space-between">
          <v-col cols="6" align-center>
            <div class="flex column justify-center fill-height">
              <div class="headline font-weight-bold">
                O Congresso Norte Nordeste de Pesquisa e Inovação:
                <span class="primary--text"> CONNEPI</span>
              </div>
              <div class="mt-4 subtitle-1 text-justify">
                O CONNEPI tem se consolidado como grande incentivador
                 dos projetos científicos desenvolvidos pelos Institutos Federais
                da Rede Norte-Nordeste. O evento, que a cada edição desde 2006
                traz um tema diferente, tem reunido além da comunidade acadêmica,
                diferentes setores da sociedade, como empresários,
                governantes, grupos culturais, na expectativa de cumprir o
                papel da pesquisa: expandi-la além dos muros da academia.
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="flex justify-end">
              <img width="400" src="@/assets/images/connepi-researchers.png" alt="Pesquisadores" />
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="mt-5" cols="12">
        <v-row justify="space-between">
          <v-col cols="6">
            <img
              width="400"
              src="@/assets/images/connepi-presentation.png"
              alt="Apresentação de trabalho"
            />
          </v-col>
          <v-col cols="6" align-center>
            <div class="flex column justify-center fill-height">
              <div class="headline font-weight-bold">
                O evento em uma palavra: <span class="primary--text">Impactante!</span>
              </div>
              <div class="mt-4 subtitle-1 text-justify">
                De uma ideia em 2006 a um sucesso em 2016. Podemos resumir a sua participação
                 na comunidade acadêmica, principalmente no âmbito dos Institutos Federais,
                 com uma palavra: Impactante. A cada edição o evento cresceu e permitiu aos
                 alunos dos Institutos Federais, tanto do ensino médio/técnico quanto do
                 ensino superior, apresentarem o resultado das suas pesquisas e
                 ingressar mais cedo na comunidade acadêmica.
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="mt-5" cols="12">
        <v-row justify="space-between">
          <v-col cols="6" align-center>
            <div class="flex column justify-center fill-height">
              <div class="headline font-weight-bold">
                O Repositório:
                <span class="primary--text"> Preservando o conhecimento e a história.</span>
              </div>
              <div class="mt-4 subtitle-1 text-justify">
                Os artigos apresentados no evento representam o esforço de todos
                 os organizadores e alunos, e isso não poderia ser esquecido.
                  Esse repositório foi desenvolvido com o objetivo de organizar e
                  disponibilizar os artigos de todas as edições do CONNEPI,
                  tendo em vista que o evento não possui um repositório oficial e
                  as publicações se encontravam dispersas na internet.
                  Desta forma, auxiliando para que o conhecimento gerado pelos
                  resultados das pesquisas apresentados no CONNEPI continue sendo
                  difundido e marcando a história de todos os envolvidos.
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="flex justify-end">
              <img
                width="400"
                src="@/assets/images/connepi-banners.png"
                alt="Apresentação de Banners"
              />
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
      ],
    };
  },
};
</script>
