import Table from '../components/Table';
import SortableTable from '../components/SortableTable';

function TablePage() {
    const data = [
        { name:'Orange', color: 'bg-orange-500', score: 5 },
        { name:'Apple', color: 'bg-red-500', score: 3 },
        { name:'Banana', color: 'bg-yellow-500', score: 1 },
        { name:'Lime', color: 'bg-green-500', score: 4 },
        { name:'Blueberry', color: 'bg-blue-900', score: 5 },
    ];

    const config = [
        { 
            label: 'Name',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name,
        },
        { 
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
        },
        { 
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score,
        },
        {
            label: 'Score squared',
            render: (fruit) => fruit.score ** 2,
            sortValue: (fruit) => fruit.score ** 2
        },
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    }; 

    return (
        <div>
            <h3>Unsorted table</h3>
            <Table data={data} config={config} keyFn={keyFn} />
            <h3>Sorted table</h3>
            <SortableTable data={data} config={config} keyFn={keyFn} />
        </div>
    )
}

export default TablePage;