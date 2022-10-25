import Layout from "../../components/layout";
import { useRouter } from 'next/router'
import styles from '../../styles/Users.module.css';


interface UsersProps{
    dataUsers: Array<any>;
}
export default function users(props: UsersProps) {


    const { dataUsers } = props;
    const router = useRouter();     
    
    return (
        <Layout pageTitle="User">
            <p className="title">Users</p>
            {dataUsers.map((user) => (
                <div key={user.id} onClick={() => router.push(`/users/${user.id}`)}className={styles.card}>
                    <li key={user.name}>{user.name}</li>
                </div>
               
            
            ))}
        </Layout>


    );

}
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    
    const dataUsers = await res.json();
    return {
        props: {
            dataUsers,
        }
    }
}