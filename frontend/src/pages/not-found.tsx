import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFound(){
    const navigate = useNavigate()
    return (
        <main className="space-y-5 grid place-items-center h-full py-20">
            <div className="space-y-3">
                <h1 className="sm:text-6xl text-3xl font-bold">Oops! Page not Found</h1>
                <p className="text-slate-500 sm:text-xl">We apologize that we couldn't find the page you were looking for.</p>
            </div>
            <Button className="bg-primary bg-orange-500 w-[250px] hover:bg-orange-600" onClick={() => navigate(-1)}>Go Back</Button>
        </main>
    )
}