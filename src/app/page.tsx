'use client'
import Image from "next/image";
import { Title } from "./components/Title";
import { ContentWrapper } from "./components/ContentWrapper";
import { Division } from "./components/Division";
import { Knowledge } from "./assets/knowledge";
import { IconButton } from "./components/Button/Icon-Button";
import * as Tabs from '@radix-ui/react-tabs';
import { TextButton } from "./components/Button/Text-Button";
import { FileText, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const currentDate = new Date();
  const birthDate = new Date(1999, 5, 1);
  var diff = Math.abs(currentDate.getTime() - birthDate.getTime());
  var age = Math.trunc(Math.ceil(diff / (1000 * 3600 * 24)) / 365);

  return (
    <div className="space-y-4">
      <ContentWrapper id="Dobra-1">
        <Title>Bem Vindo(a) ao Yuki Matt</Title>
        <div className="w-40 h-40 flex flex-col items-center justify-center border-2 border-zinc-500 rounded-full">
          <Image
            width={144}
            height={144}
            src="https://github.com/ndrake337.png"
            alt="Picture of the author"
            className="w-36 h-36 rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Hello there, General Keno..., *cof cof*</p>

          <p>
            Olá, Meu Nome é <strong>Matheus Felipe</strong>, tenho {age} anos, e
            atuo na área de programação desde 2020, meus foco principal é na
            área de desenvolvimento <strong>back-end</strong> mas tenho
            conhecimentos e experiencias atuando com <strong>Front-end</strong>,
            <strong>Analytics</strong> e <strong>Engenharia de dados</strong>.
          </p>

          <p>
            Caso goste dos projetos e currículo apresentados nesse portfólio,
            <strong>entre em contato</strong> por meio das opções abaixo.
          </p>
          <div className="flex justify-between pt-2 flex-wrap">
            <TextButton name="Email" href="mailto:matheus.felipe337@gmail.com" color="pink"><Mail /></TextButton>
            <TextButton name="Linkedin" href="https://www.linkedin.com/in/matheus-felipe-neves/" color="blue"><Linkedin /></TextButton>
            <TextButton name="Github" href="https://github.com/Ndrake337" color="dark"><Github /></TextButton>
            <TextButton name="Curriculo" href="#"><FileText /></TextButton>
          </div>
        </div>
      </ContentWrapper>

      <Division />

      <ContentWrapper id="Dobra-2">
        <Title>Conhecimentos</Title>
        <Tabs.Root defaultValue={Knowledge[0].Area}>
          <Tabs.List className="flex flex-row gap-9 items-center justify-center">
            {Knowledge.map((item) => {
              return (
                <Tabs.Trigger value={item.Area} asChild key={item.Area}>
                  <IconButton variant="normal" subtitle={item.Area}>
                    <item.ButtonIcon />
                  </IconButton>
                </Tabs.Trigger>
              )
            })
            }
          </Tabs.List>
          <div className="bg-zinc-400 -mx-8 px-8 py-1 gap-8 justify-center">
            {Knowledge.map((item) => {
              return (<Tabs.Content value={item.Area} key={item.Area}>
                {item.Skills.map((skill) => {
                  return (
                    <div key={skill.Name} className="flex flex-row items-center gap-2 my-1 p-2 bg-zinc-200/25 rounded-lg w-32 truncate cursor-pointer">
                      <Image width={28} height={28} src={skill.Icon} className="rounded-full" alt={`Icone do Conhecimento ${skill.Name}`} />
                      <span>{skill.Name}</span>
                    </div>
                  )
                })}
              </Tabs.Content>)
            })
            }
          </div>
        </Tabs.Root>
      </ContentWrapper>

      <Division />

      <ContentWrapper id="Dobra-3">
        <Title>Projetos em Destaque</Title>
        <img src="https://raw.githubusercontent.com/Ndrake337/Star-Wars-Space-Invaders/main/YKM/Banner.png" className="rounded-lg shadow-md" />
        <div className="flex flex-1 flex-col gap-4">
          <h2>StarWars Space Invaders</h2>
          <p>Projeto visa a construção de um jogo simples para pratica do paradigma de orientação a objetos utilizando LibGDX. Com ela pode-se desenvolver jogos simples renderizados em arquivos .jar</p>
          <div className="flex justify-between">
            <span className="rounded-full border border-blue-700 bg-blue-550 p-1.5 text-zinc-200 min-w-16 w-fit text-center cursor-pointer">Java</span>
            <a className="rounded-full border-2 border-zinc-500 p-1.5" href="https://github.com/Ndrake337/Star-Wars-Space-Invaders">Ler Mais</a>
          </div>
        </div>
      </ContentWrapper>
      <div />
    </div>
  );
}
