'use client'
import Image from "next/image";
import { Title } from "./assets/components/Title";
import { ContentWrapper } from "./assets/components/ContentWrapper";
import { Division } from "./assets/components/Division";
import { Knowledge } from "./assets/knowledge";
import { IconButton } from "./assets/components/Button/Icon-Button";
import * as Tabs from "@radix-ui/react-tabs";
import { TextButton } from "./assets/components/Button/Text-Button";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import {
  RepositoryShower,
  RepositoryShowerProps,
} from "./assets/components/RepositoryShower/RepositoryShower";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [repoData, setRepoData] = useState<RepositoryShowerProps>()
  const currentDate = new Date();
  const birthDate = new Date(1999, 5, 1);
  var diff = Math.abs(currentDate.getTime() - birthDate.getTime());
  var age = Math.trunc(Math.ceil(diff / (1000 * 3600 * 24)) / 365);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await axios.get('https://api.github.com/repos/Ndrake337/Star-Wars-Space-Invaders')
        console.log(response);
        
        setRepoData({
          title: response?.data.name,
          description: response?.data.description,
          tech: response?.data.language
        })
      } catch (error) {
        console.log(error);
      }
    };
    fetchRepoData();
  }
    , [])

  return (
    <div className="space-y-4">
      <ContentWrapper id="Dobra-1">
        <Title>Bem Vindo(a) ao Yuki Matt</Title>
        <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full border-2 border-zinc-500">
          <Image
            width={144}
            height={144}
            src="https://github.com/ndrake337.png"
            alt="Picture of the author"
            className="h-36 w-36 rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Hello there, General Keno..., *cof cof*</p>

          <p>
            Olá, Meu Nome é <strong>Matheus Felipe</strong>, tenho {age} anos, e
            atuo na área de programação desde 2020, meu foco principal é na área
            de desenvolvimento <strong>back-end</strong> mas tenho conhecimentos
            e experiencias atuando com <strong>Front-end</strong>,
            <strong>Analytics</strong> e <strong>Engenharia de dados.</strong>.
          </p>

          <p>
            Caso goste dos projetos e currículo apresentados nesse portfólio,
            <strong>entre em contato</strong> por meio das opções abaixo.
          </p>
          <div className="flex flex-wrap justify-between gap-2 pt-2">
            <TextButton
              name="Email"
              href="mailto:matheus.felipe337@gmail.com"
              color="pink"
            >
              <Mail />
            </TextButton>
            <TextButton
              name="Linkedin"
              href="https://www.linkedin.com/in/matheus-felipe-neves/"
              color="blue"
            >
              <Linkedin />
            </TextButton>
            <TextButton
              name="Github"
              href="https://github.com/Ndrake337"
              color="dark"
            >
              <Github />
            </TextButton>
            <TextButton name="Curriculo" href="#">
              <FileText />
            </TextButton>
          </div>
        </div>
      </ContentWrapper>

      <Division />

      <ContentWrapper id="Dobra-2">
        <Title>Conhecimentos</Title>
        <Tabs.Root defaultValue={Knowledge[0].Area}>
          <Tabs.List className="flex w-full items-center justify-center gap-4">
            {Knowledge.map((item) => {
              return (
                <Tabs.Trigger value={item.Area} asChild key={item.Area}>
                  <IconButton variant="normal" subtitle={item.Area}>
                    <item.ButtonIcon />
                  </IconButton>
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>
          <div className="w-screen gap-8 bg-zinc-400 px-8 py-1 dark:bg-zinc-900">
            {Knowledge.map((item) => {
              return (
                <Tabs.Content
                  value={item.Area}
                  key={item.Area}
                  className="grid grid-cols-2"
                >
                  {item.Skills.map((skill) => {
                    return (
                      <div
                        key={skill.Name}
                        className="my-1 flex w-32 cursor-pointer flex-row items-center gap-2 truncate rounded-lg bg-zinc-200/25 p-2 dark:bg-zinc-50/25"
                      >
                        <Image
                          width={28}
                          height={28}
                          src={skill.Icon}
                          className="rounded-full"
                          alt={`Icone do Conhecimento ${skill.Name}`}
                        />
                        <span>{skill.Name}</span>
                      </div>
                    );
                  })}
                </Tabs.Content>
              );
            })}
          </div>
        </Tabs.Root>
      </ContentWrapper>

      <Division />

      <ContentWrapper id="Dobra-3">
        <Title>Projetos em Destaque</Title>
        <RepositoryShower
          title={repoData?.title}
          description={repoData?.description}
          tech={repoData?.tech}
        />
      </ContentWrapper>
      <div />
    </div>
  );
}
