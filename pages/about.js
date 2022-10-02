import Image from "next/image";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        A expressão Lorem ipsum em design gráfico e editoração é um texto padrão
        em latim utilizado na produção gráfica para preencher os espaços de
        texto em publicações para testar e ajustar aspectos visuais antes de
        utilizar conteúdo rea
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="charizard"
      />
    </div>
  );
}
