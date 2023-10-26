import './Posts.css';

const postData = [
    {id: 1, postText: 'Fuck You!'},
    {id: 2, postText: 'Bitch'},
]

const PostItem = (props) => {
    return (
        <div className="poststyle">
            {props.postAddedText}
        </div>
    );
}

const Posts = () => {
    let postsElements = postData.map ((el, index) =>
        <PostItem key={index} postAddedText={el.postText} id={el.id} />)
    return (
        <div className="Posts">

            <span>My posts</span> <br />
            {postsElements}
            <textarea placeholder="your news..."></textarea>
            <div className="btn"><button><b>Send</b></button></div>

        </div>
    );
}

export default Posts;