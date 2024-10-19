import Accordion from '../components/Accordion';

function AccordionPage() {
    const items = [
        {
            id: 'jdslia',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
        },
        {
            id: 'djwoeaa',
            label: 'Can I use Javascript on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
        },
        {
            id: 'djilafjd',
            label: 'Can I use CSS on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
        }
    ];

    return <Accordion items={items}/>

};

export default AccordionPage;