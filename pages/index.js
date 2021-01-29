
import styled from 'styled-components'
import db from '../db.json';
import Widget from '../pages/src/components/Widget'
import QuizBackground from '../pages/src/components/QuizBackground'
import Footer from '../pages/src/components/Footer'
import GitHubCorner from '../pages/src/components/GitHubCorner'

 //const BackgroundImage = styled.div`
// background-image: url(${db.bg});
  //flex: 1;
  //background-size: cover;
  //background-position: center;
 //`;
const QuizContainer = styled.div`
width: 100%;
max-width: 350px;
padding-top: 45px;
margin: auto 10%;
@media screen and (max-width: 500px) {
  margin: auto;
  padding: 15px;
}
`;

export default function Home() {
  return (
       <QuizBackground backgroundImage={db.bg}>
         <QuizContainer>
           <Widget> 
             <Widget.Header >
               <h1>QUIZ DEV</h1>
               </Widget.Header>
             <Widget.Content >
           <p>Teste Seu Conhecimento Dev</p>
           </Widget.Content>
           </Widget>
           <Widget>
           <h1>QUIZ DA GALERA</h1>
           <p>vamos que vamos.....</p>
           </Widget>
           <Footer/>
         </QuizContainer>
         <GitHubCorner  projectUrl="https://github.com/jljardim"/>
       </QuizBackground>
       
      

  );
}
