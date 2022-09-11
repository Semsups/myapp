import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    if (props.collapsed === true) {
        return <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody title={props.titleValue}/>
        </div>
    }
    return <div>
        <AccordionTitle title={props.titleValue}/>
         </div>;
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (<div>
        <h3>{props.title}</h3>
    </div>);
}

function AccordionBody(props: any) {
    console.log('AccordionBody rendering')
    return (<div>
        <ul>
            <li>{props.title}</li>
            <li>{props.title}</li>
            <li>{props.title}</li>
        </ul>
    </div>);
}

export default Accordion;