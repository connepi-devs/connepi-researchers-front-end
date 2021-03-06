<template>
  <v-container grid-list-lg>
    <div
      class="headline font-weight-black section-title"
      :class="{'text-center': $vuetify.breakpoint.xs}"
    >
      Sobre o CONNEPI
    </div>
    <v-row justify="center" align="center">
      <v-scroll-x-reverse-transition>
        <v-col v-if="mounted" cols="12">
          <v-row justify="space-between">
            <v-col cols="12" md="6" align-center>
              <div class="flex column justify-center fill-height">
                <div
                  class="headline font-weight-bold"
                  :class="{'text-center': $vuetify.breakpoint.xs}"
                >
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
            <v-col cols="12" md="6">
              <div class="flex justify-end">
                <v-img
                  width="400"
                  src="@/assets/images/connepi-researchers.png"
                  alt="Pesquisadores"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="primary"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-scroll-x-reverse-transition>
      <v-scroll-x-reverse-transition>
        <v-col v-if="mounted" class="mt-5" cols="12">
          <v-row justify="space-between">
            <v-col cols="12" md="6" :order="$vuetify.breakpoint.mdAndDown ? 2 : ''">
              <v-img
                :width="$vuetify.breakpoint.smAndDown ? '100%' : 400"
                src="@/assets/images/connepi-presentation.png"
                alt="Apresentação de trabalho"
              >
                <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="primary"></v-progress-circular>
                    </v-row>
                  </template>
              </v-img>
            </v-col>
            <v-col cols="12" md="6" align-center>
              <div class="flex column justify-center fill-height">
                <div
                  class="headline font-weight-bold"
                  :class="{'text-center': $vuetify.breakpoint.xs}"
                >
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
      </v-scroll-x-reverse-transition>
      <v-scroll-x-reverse-transition>
        <v-col v-if="mounted" class="mt-5" cols="12">
          <v-row justify="space-between">
            <v-col cols="12" md="6" align-center>
              <div class="flex column justify-center fill-height">
                <div
                  class="headline font-weight-bold"
                  :class="{'text-center': $vuetify.breakpoint.xs}"
                >
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
            <v-col cols="12" md="6">
              <div class="flex justify-end">
                <v-img
                  width="400"
                  src="@/assets/images/connepi-banners.png"
                  alt="Apresentação de Banners"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="primary"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-scroll-x-reverse-transition>
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
      mounted: false,
    };
  },
  created() {
    setTimeout(() => {
      this.mounted = true;
    }, 200);
  },
};
</script>
