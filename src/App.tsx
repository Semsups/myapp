import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Raiting/Raiting";


function App() {
    console.log('App rendering')
    return(
        <div>
            {/* <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            <Rating value={0}/>
            <Rating value={2}/>
            <Rating value={4}/>
            <Rating value={5}/> */}
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"User"} collapsed={false}/>
            {/*<Rating value={2}/>*/}
            </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendering')
    return <h1>{ props.title }</h1>
}

export default App;
