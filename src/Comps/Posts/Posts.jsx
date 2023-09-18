import './Posts.css';

const Posts = () => {
    return (
        <div className="Posts">
            <span>My posts</span> <br />
            <textarea placeholder="your news..."></textarea>
            <div className="btn"><button><b>Send</b></button></div>

        </div>
    )
}

export default Posts;