export default function Footer() {
    const srcUrl = (fileName: string) => {
        return `src/assets/images/blinkies/${fileName}`;
    }
    return (
        <footer>
            <img src={srcUrl("sailor.gif")} />
            <img src={srcUrl("spooky.gif")} />
            Copyright Jarek Smith 2001
            <img src={srcUrl("silly.gif")} />
            <img src={srcUrl("coffee.gif")} />
        </footer>
    )
}