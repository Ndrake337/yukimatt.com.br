'use client'
import axios from "axios"
import { useEffect, useState } from "react"
import { ContentWrapper } from "../components/ContentWrapper"
import { RepositoryShower, RepositoryShowerProps } from "../components/RepositoryShower/RepositoryShower"

export default function Portfolio() {
  const [repos, setRepos] = useState<RepositoryShowerProps[]>()
  
  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Ndrake337/repos')
        const repoList = response.data.sort((a:any,b:any) => {
          return new Date(b.updated_at).valueOf() - new Date(a.updated_at).valueOf()
        }).map((repo: any) => {
          return({
            title: repo.name,
            description: repo.description,
            tech: repo.language
          })
        })
        setRepos(repoList)
        
      } catch (error) {
        console.log(error); 
      }
    }

    fetchRepoData()
    
  }, [])

  return ( 
    <ContentWrapper>
      {
        repos?.map((repo:RepositoryShowerProps) =>{
          return(<RepositoryShower key={repo.title} title={repo.title} description={repo.description} tech={repo.tech} />)
        })
      }
    </ContentWrapper>
  )
}
