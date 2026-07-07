export default function Post({title, date, body}: {title: string, date: string, body: string}) {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{date}</h2>
            <p>{body}</p>
        </div>
    )
}