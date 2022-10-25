import { useRouter } from "next/router"
import Layout from '../../components/layout';


interface User{
    id: String;
    name: String;
    email: String;
    phone: String;
}

interface UserDetailProps{
    user: User;
}
export default function UserDetail(props: UserDetailProps) {
    

    const { user } = props
    const rooter = useRouter();
    const { id } = rooter.query;
    return (
       <Layout pageTitle="Detail User">
            <p>Users Details {id}</p>
            <p>{user.name }</p>
             <p>{user.email }</p>
            </Layout>
       
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');


    const dataUsers = await res.json(); 
    const paths = dataUsers.map((user: User) => ({
        params: {
            id: `${user.id}`

        }
    }));
      
    return {
        paths,
        fallback:false
    }
    
}
interface GetStaticProps{
    params: {
        id: string;

    }
}
export async function getStaticProps(context: GetStaticProps) {
    const { id } = context.params;


    
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);


    const user = await res.json(); 
    return {
        props :{
            user: user
        }
    }
}