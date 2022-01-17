marked.setOptions({
    breaks: true,
});

const renderer = new marked.Renderer();

function App() {

    const [text, setText] = React.useState("");

    return (
        <div className="w-full text-center px-4 bg-[#F6F5F5] min-h-screen" >
            <h1 className="p-4 text-2xl text-[#1687A7]">MI MARKDOWN PREVIEWER</h1>
            <textarea
                name="text"
                id="editor"
                rows="6"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full min-h-[40vh] border-2 border-[#276678] rounded-md shadow-lg bg-[#F6F5F5] "
            ></textarea>
            <h1 className="mt-3 text-2xl text-[#1687A7]">SALIDA</h1>
            <Preview markdown={text} />
        </div>
    );
}

function Preview({ markdown }) {
    return (
        
        <div
            dangerouslySetInnerHTML={{
                __html: marked(markdown, { renderer: renderer }),
            }}
            id="preview"
            className="w-full border-2  min-h-[40vh] rounded-md border-[#276678]"
        >
            
        </div>
    );
}
ReactDOM.render(<App/>, document.getElementById("root"));