export default function Footer(){
    const today=new Date();
    return (
        <div>
            <p className="Footer">&copy;{today.getFullYear()} All right reserved by Abrar </p>
        </div>
    )
}