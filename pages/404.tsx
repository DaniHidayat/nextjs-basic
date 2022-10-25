import { useEffect } from "react"
import { useRouter } from "next/router"
export default function Custom404() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2000)
    }, []);
    return (
        <div>
            <p className="title-not-found">oppss halaman tidak di temukan</p>
        </div>
    )
    
}