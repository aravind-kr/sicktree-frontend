import { Query } from 'react-apollo';

const Dashboard = prop => {
    // console.log(prop.query, '>>', prop.param);

    return <div>{prop.query}</div>;
};

export default Dashboard;
